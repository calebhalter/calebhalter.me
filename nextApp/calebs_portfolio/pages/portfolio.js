import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ScriptTag from 'react-script-tag'
import dynamic from 'next/dynamic'
/*const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );*/
import Gallery from '../components/layout/portfolio-gallery'
import Topnav from '../components/layout/topnav'
import React from 'react'

const Circles = dynamic(
    () => import('../components/visuals/circles'),
    {
      ssr: false
    }
)

let key = null

export default function Home() {
  return (
    <div style={{}}>
      <Topnav currentPage='Portfolio'></Topnav>
      <center>
        <Gallery />
        <Circles display='fixed' HD='true'/>
      </center>
    </div>
  )
}
