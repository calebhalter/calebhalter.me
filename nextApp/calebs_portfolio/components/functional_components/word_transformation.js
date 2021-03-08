import React from 'react'

class WordTransformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: undefined
    }
  }

  word_transformation = async function (input_div) {
    let word1 = input_div.children[0].value;
    let word2 = input_div.children[1].value;
    if (word1.length <= 0 || word2.length <= 0) {

    }
      if (!this.state.key) {
        const getKey = await fetch("api/components/key")
        const newKey = await getKey.text()
        this.state.key = newKey
      }
      if (word1.length == 0 || word2.length == 0) {
        document.getElementById("word_transformation-answer").innerText = "Input required";
        return;
      }
      else if (word2.length != word1.length) {
        document.getElementById("word_transformation-answer").innerText = "Words must be the same length";
        return;
      }
      const response = await fetch("api/components/word_transformation/" + this.state.key.toString() + "/" + word1 + "/" + word2);
      const variable = await response.text()
      document.getElementById("word_transformation-answer").innerText = variable;
      console.log(variable)
  }
  componentDidMount() {
    document.getElementById('word_transform-input-1').addEventListener("keydown", function(event) {
      if (event.key == 'Enter') {
        document.getElementById("word_transformation-button").click()
      }
    }) 
    document.getElementById('word_transform-input-2').addEventListener("keydown", function(event) {
      if (event.key == 'Enter') {
        document.getElementById("word_transformation-button").click()
      }
    }) 
  }
  render() {
    return (
      <div>
      <p>Enter two words of the same length and press enter.</p>
      <div id={'word_transformation-div'} className="d-flex justify-content-sm-start align-items-sm-center" style={{textAlign: "center"}}>
        <input className="d-inline-flex flex-grow-1 align-content-start justify-content-sm-start align-items-sm-center" type="text" id="word_transform-input-1" style={{width: "50%"}}></input>
        <input className="d-inline-flex flex-grow-1 align-content-start justify-content-sm-start align-items-sm-center" type="text" id="word_transform-input-2" style={{width: "50%"}}></input>
        <a className="btn btn-primary" role="button" id="word_transformation-button" onClick={() => this.word_transformation(document.getElementById('word_transformation-div'))}>Submit</a>
        
      </div>
      <div id="word_transformation-answer" style={{marginTop: '10px', paddingBottom: '10px', display: 'inline-block', borderRadius: '3px', overflowX: 'scroll',  whiteSpace: 'nowrap', width: '80%'}}></div>
    </div>
    )
  }
}

export default WordTransformation;