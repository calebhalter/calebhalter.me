import React from 'react'
import { api_query } from './express_requests'

class Pos_tagger extends React.Component {
  constructor(props) {
    super(props);
  }
  send_request = async function(element) {
    console.log(document)
    if (element.value.length > 0)
      api_query('POS_Tagger', "POST", {
        sentence: element.value
      })
      .then(response => {
        let resText = document.getElementById('POS_result')
        resText.innerHTML = ''
        for (let i in response) {
          if (i != 0 && i != (response.length - 1)) {
          resText.innerHTML += `
            <div style="display: inline-block; border: 1px solid black; border-radius: 5px; padding: 5px; margin: 5px;">
              <div>${response[i][0]}</div>
              <div>${response[i][1]}</div>
            </div>
            `
          }
        }
      })
  }
  
  componentDidMount() {
    document.getElementById('POS_tagger-input').addEventListener("keydown", function(event) {
      if (event.key == 'Enter') {
        document.getElementById("POS_tagger-button").click()
      }
    }) 
  }

  render() {
    return (
      <div>
        <p>Enter a sentence and press enter.</p>
        <div className="d-flex justify-content-sm-start align-items-sm-center" style={{textAlign: "center"}}>
          <input className="d-inline-flex flex-grow-1 align-content-start justify-content-sm-start align-items-sm-center" type="text" id="POS_tagger-input" style={{marginRight: "10px", maxWidth: "80%"}}></input>
          <a className="btn btn-primary" role="button" id="POS_tagger-button" onClick={() => this.send_request(document.getElementById('POS_tagger-input'))}>Submit</a>
        </div>
        <div id="POS_result" style={{marginTop: '10px', paddingBottom: '10px', display: 'inline-block', borderRadius: '3px', overflowX: 'scroll',  whiteSpace: 'nowrap', width: '80%'}}></div>
      </div>
    )
  }

}

export default Pos_tagger;