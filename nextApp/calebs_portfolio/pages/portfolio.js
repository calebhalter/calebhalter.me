import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ScriptTag from 'react-script-tag'
import dynamic from 'next/dynamic'
import Topnav from '../components/layout/topnav'
import ImageGallery from 'react-image-gallery'
import PortfolioElement from '../components/layout/portfolio-element'
import { Spring, animated } from 'react-spring/renderprops.cjs'
import PortfolioProjects from '../components/layout/portfolio-projects'
import React from 'react'

const Circles = dynamic(
  () => import('../components/visuals/circles'),
  {
    ssr: false
  }
)

const avciso_images = [
  {
    original: "api/images/avciso-1.png",
    description: `AvCISO`
  },
  {
    original: "api/images/avciso-2.png",
    description: `AvCISO`
  },
  {
    original: "api/images/avciso-3.png",
    description: `AvCISO`
  }
]

const public_ballot_images = [
  {
    original: "api/images/publicballot-1.png",
    description: `PublicBallot.org`
  },
  {
    original: "api/images/publicballot-2.png",
    description: `PublicBallot.org`
  },
  {
    original: "api/images/publicballot-3.png",
    description: `PublicBallot.org`
  }
]

const software_dev_images = [
  {
    original: "api/images/3444-2.png",
    description: `Point of Service Project`
  },
  {
    original: "api/images/3444-1.png",
    description: `Point of Service Project`
  },
  {
    original: "api/images/3444-3.png",
    description: `Point of Service Project`
  }
]

function Home() {

  var fullscreen_ref = React.createRef();

  let open_window = (project) => {
    fullscreen_ref.current.open_window(project)
    document.getElementById('portfolio-main').style.opacity = 0.15
    document.getElementById('portfolio-main').style.zIndex = -2
  }

  let close_window = () => {
    fullscreen_ref.current.close_window()
    document.getElementById('portfolio-main').style.opacity = 1
  }

  return (
    <div style={{backgroundColor: 'black', }}>
      <Topnav currentPage='Portfolio'></Topnav>
      <section style={{textAlign: "center"}}>
        {/*<Circles position='fixed' HD='true' />*/}

        <div className="outer" id='portfolio-main'>
          <div className="middle">
            <div className="inner">
              <h1 className='page-text' style={{marginBottom: '50px'}}>Web Development Projects</h1>
              {/*<h6 className='page-text'>Take a look at some of my web development projects</h6>*/}
              <div className="row articles" style={{color: "white", width: '100%', padding: '30px'}}>
                <div className="col-sm-6 col-md-4 item">
                <h2 className="project-name">StandardUser AvCISO</h2>
                  <a href="#" style={{zIndex:50}} onClick={() => open_window('avciso')} ><img className="img-fluid" src="api/components/images/avciso-1.png" /></a>
                    <h4 className='portfolio-frameworks'>Python Flask, JavaScript</h4>
                </div>
                <div className="col-sm-6 col-md-4 item">
                <h2 className="project-name">public ballot</h2>
                  <a href="#" style={{zIndex:50}} onClick={() => open_window('public_ballot')} ><img className="img-fluid" src="api/components/images/publicballot-1.png" /></a>
                  <h4 className='portfolio-frameworks'>React, Express</h4>
                </div>
                <div className="col-sm-6 col-md-4 item">
                <h2 className="project-name">School POS Project</h2>
                <a href="#" style={{zIndex:50}} onClick={() => open_window('software_dev')} ><img className="img-fluid" src="api/components/images/3444-1.png" /></a>
                  <h4 className='portfolio-frameworks'>JavaScript</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PortfolioProjects ref={fullscreen_ref} window={'portfolio-main'} />
      </section>
    </div>
  )
}

export default Home;