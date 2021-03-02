import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ScriptTag from 'react-script-tag'
import dynamic from 'next/dynamic'
import Topnav from '../components/layout/topnav'

const Circles = dynamic(
  () => import('../components/visuals/circles'),
  {
    ssr: false
  }
)

function Home() {

  return (
    <div>
      <Topnav currentPage='Home'></Topnav>
      <section style={{textAlign: "center"}}>
          <h1 className="d-flex justify-content-xl-center align-items-xl-start" style={{textAlign: "center", position: "absolute", right: "0", left: "0"}}>I code stuff</h1>
          <Circles position='fixed' HD='true' />
      </section>
    </div>
  )
}

export default Home;