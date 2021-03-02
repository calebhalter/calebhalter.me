import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ScriptTag from 'react-script-tag'
import dynamic from 'next/dynamic'

let key = null
export default function Home() {

  async function callAPI() {
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
    const butt = await response.text()
    document.getElementById("answer").innerText = butt;
    console.log(butt)
    /*const response = await fetch("api/components/hello/" + key.toString());
    const butt = await response.text()
    console.log(butt)*/
  }

  async function api_request(component, method="GET", data=null) {
    var request = {
      method: method,
    }
    if (data !== null) {
      request.headers= {
        'Content-Type': 'application/json',
      },
      request["body"] = JSON.stringify(data)
    }
    const value = await fetch(`api/components/${component}`, request);
    return value.json();
  }

  async function POS_Tagger() {
    api_request('POS_Tagger', "POST", {
      sentence: document.getElementById('POS_input').value
    })
    .then(response => {
      console.log(response)
    })

  }

  console.log(__dirname)
  return (

    <div className={styles.container}>
      <Head>
        <title>CalebHalter.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to CalebHalter.com
        </h1>

        
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <h2>Word transformation</h2>
        <div style={{color:"black", borderColor:"black"}}>
          <h3 className={styles.card} onClick={() => callAPI()}><center>Go &rarr;</center></h3>
          <input type="text" id="word1"></input>
            <input type="text" id="word2"></input>
          </div>
        <textarea id="answer"></textarea>

        <h2>POS Tagger</h2>
        <input id="POS_input"></input>
        <div style={{color:"black", borderColor:"black"}}>
          <h3 className={styles.card} onClick={() => POS_Tagger()}><center>Go &rarr;</center></h3>
          </div>

        <div className={styles.grid}>
          <a className={styles.card}>
            
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <div id={"terminal"}>
            Click for terminal
          </div>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Depoy &rarr;</h3>
            <p>
              Instantly deploy your banana.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
