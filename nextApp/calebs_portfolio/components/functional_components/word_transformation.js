var key;
async function word_transformation() {
    if (!key) {
      const getKey = await fetch("api/components/key")
      const newKey = await getKey.text()
      key = newKey
    }
    word1 = document.getElementById("word1").value;
    word2 = document.getElementById("word2").value;
    if (word1.length == 0 || word2.length == 0) {
      document.getElementById("answer").innerText = "Input required";
      return;
    }
    else if (word2.length != word1.length) {
      document.getElementById("answer").innerText = "Words must be the same length";
      return;
    }
    const response = await fetch("api/components/word_transformation/" + key.toString() + "/" + word1 + "/" + word2);
    const variable = await response.text()
    document.getElementById("answer").innerText = variable;
    console.log(variable)
}