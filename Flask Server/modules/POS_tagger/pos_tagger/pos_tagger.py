import collections
import operator

from . import utils


def create_model(sentences):
    prior_counts = collections.defaultdict(lambda: collections.defaultdict(int))
    priors = collections.defaultdict(lambda: collections.defaultdict(float))
    likelihood_counts = collections.defaultdict(lambda: collections.defaultdict(int))
    likelihoods = collections.defaultdict(lambda: collections.defaultdict(float))
    majority_tag_counts = collections.defaultdict(lambda: collections.defaultdict(int))
    majority_baseline = collections.defaultdict(str)
    tag_counts = collections.defaultdict(int)
    for sentence in sentences:
        for i, token in enumerate(sentence):
            tag_counts[token.tag] += 1
            majority_tag_counts[sentence[i].word][sentence[i].tag] += 1
            likelihood_counts[sentence[i].tag][sentence[i].word] += 1
            if i == 0:
                continue
            prior_counts[sentence[i].tag][sentence[i - 1].tag] += 1
    for word in majority_tag_counts:
        majority_baseline[word] = max(majority_tag_counts[word].items(), key=operator.itemgetter(1))[0]
    V = len(tag_counts)
    for current in prior_counts:
        # P(t|t-1) = c(t-1,t)/c(t-1)
        # smoothed: P(t|t-1) = [c(t-1,t) + 1]/[c(t-1) + V]
        for previous in prior_counts[current]:
            numerator = float(prior_counts[current][previous] + 1)
            denominator = float(tag_counts[previous] + V)
            priors[current][previous] = (numerator / denominator)
    for tag in likelihood_counts:
        # P(t|w) = c(t,w)/c(t)
        for word in likelihood_counts[tag]:
            numerator = float(likelihood_counts[tag][word])
            denominator = float(tag_counts[tag])
            likelihoods[tag][word] = (numerator / denominator)
    return priors, likelihoods, majority_baseline, tag_counts


def predict_tags(sentences, model, mode='always_NN'):
    assert mode in ['always_NN', 'majority', 'hmm']

    priors, likelihoods, majority_baseline, tag_counts = model
    total_tokens = 0
    for tag in model[3] :
        total_tokens += model[3][tag]
    for sentence in sentences:
        if mode == 'always_NN':
            for token in sentence:
                token.tag = "NN"
        elif mode == 'majority':
            for token in sentence:
                if token.word in majority_baseline:
                    token.tag = majority_baseline[token.word]
                else:
                    token.tag = ""
        elif mode == 'hmm':
            viterbi = collections.defaultdict(lambda: collections.defaultdict(float))
            vitTags = collections.defaultdict(lambda: collections.defaultdict(str))
            i=0
            for token in sentence:
                pwt = -1
                if token.word == '<s>':
                    continue
                # low probability estimation for unknown words
                if token.word not in majority_baseline:
                    pwt = float(1/total_tokens)
                if i == 0:
                    for t in model[3]:
                        if pwt != -1:
                            likelihood = pwt
                        else :
                            likelihood = model[1][t][token.word]
                        viterbi[t][i] = likelihood * model[0][t]['<s>']
                        vitTags[t][i] = '<s>'
                else:
                    for t in model[3]:
                        if pwt != -1:
                            likelihood = pwt
                        else :
                            likelihood = model[1][t][token.word]
                        if likelihood == 0:
                            continue
                        vit_max = -1
                        for j in model[3]:
                            past_v = viterbi[j][i-1]
                            if past_v == 0:
                                continue
                            temp = past_v * likelihood * model[0][t][j]
                            if temp > vit_max:
                                vit_max = temp
                                viterbi[t][i] = vit_max
                                vitTags[t][i] = j
                i += 1
            max_tag = None
            max_val = -1
            i -= 1
            for v in viterbi :
                temp = viterbi[v][i]
                if temp > max_val :
                    max_tag = vitTags[v][i]
                    max_val = temp
            new_tag = max_tag
            while i > 0 :
                sentence[i].tag = new_tag
                i -= 1
                new_tag = vitTags[new_tag][i]
        else:
            assert False
    return sentences


def main():
    tr_sents = utils.read_tokens(train_data)
    te_sents = utils.read_tokens(heldout_data, test=True)

    model = create_model(tr_sents)

    gold_sents = utils.read_tokens(heldout_data)
    for mode in ['always_NN', 'majority', 'hmm']:
        predictions = predict_tags(te_sents, model, mode=mode)
        accuracy = utils.calc_accuracy(gold_sents, predictions)
        print(f"Accuracy in test {'(' + mode + ')':12}"
              f"[{len(list(gold_sents))} sentences]: {accuracy:6.2f}")


def analyze_sentence(string):
    pass


def setup_model():
    train_data, heldout_data = "train.txt", "heldout.txt"

    tr_sents = utils.read_tokens(train_data)

    model = create_model(tr_sents)

    return model


def one_sentence(sentence, model):
    te_sents = utils.read_sentence(sentence)

    predictions = predict_tags(te_sents, model, mode='hmm')

    return predictions


if __name__ == "__main__":
    setup_model()
    one_sentence()