#!bin/python
from flask import Flask, request
from flask_cors import CORS
import pos_tagger.pos_tagger as pst
import json

app = Flask(__name__)
CORS(app)
model = None


@app.route('/POS_Sentence', methods=["POST", "OPTIONS"])
def POS_Sentence():
    if not model:
        return False
    sentence = request.form["sentence"]
    preds = pst.one_sentence(sentence, model)
    return_sent = []
    for token in preds[0]:
        print(token.word + '/' + token.tag)
        return_sent.append([token.word, token.tag])
    return json.dumps(return_sent)


if __name__ == '__main__':
    model = pst.setup_model()
    app.run(debug=True, port=5438)