import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ScriptTag from 'react-script-tag'
import dynamic from 'next/dynamic'
import Topnav from '../components/layout/topnav'
import React from 'react'

const Circles = dynamic(
  () => import('../components/visuals/circles'),
  {
    ssr: false
  }
)

class Home extends React.Component {
  componentDidMount() {
    let main_text = document.getElementById('main-text')
    let nav_height = document.getElementById('navcol-1').offsetHeight + 50
    main_text.style.width = `${window.innerWidth}px`
    main_text.style.height = `${window.innerHeight - nav_height}px`
    main_text.children[0].style.top = `${(window.innerHeight - nav_height - 100) / 2}px`
    window.addEventListener('resize', function() {
      main_text.children[0].style.top = `${(window.innerHeight - nav_height - 100) / 2}px`
      main_text.style.width = `${window.innerWidth}px`
      main_text.style.height = `${window.innerHeight - nav_height}px`
    })
  }

  render() {
    return (
    <div>
      <Topnav currentPage='Home'></Topnav>
      <section style={{textAlign: "center"}}>
        <Circles position='fixed' HD='true' />
        <div id='main-text' style={{position: 'absolute', display: 'flex', justifyContent: 'center', textAlign: 'center', width: '100%', height: '100%'}}>
          <div style={{ top: '0px', bottom: '0px', position: 'absolute'}}>
            <h1 style={{fontWeight: 'bold', color: 'white', textShadow: '2px 2px 1px black'}}>Hi, I'm Caleb Halter</h1>
            <h2 style={{fontWeight: 'bold', color: 'white', textShadow: '2px 2px 1px black'}}>I'm a full-stack developer based in Denton, Texas</h2>
          </div>
        </div>
      </section>
    </div>
  )}
}

export default Home;