import Topnav from '../components/layout/topnav'
import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const Galaxy = dynamic(
  () => import('../components/visuals/galaxy'),
  {
    ssr: false
  }
);

function About() {
  return (
    <div style={{backgroundColor: 'black', }}>
      <Head>
        <title>CalebHalter.me</title>
        <link rel="icon" href="/api/images/favicon.png" />      
      </Head>
      <Topnav currentPage='About'></Topnav>
      <section style={{textAlign: "center"}}>
    <Galaxy />
        <div className="outer" id='portfolio-main'>
          <div className="middle"  style={{padding: '0px 30px 0px 30px'}}>
            <center>
            <div className="inner row" >
                <div className='col-md-12'>
                  <h1 className='page-text' style={{marginBottom: '50px'}}>About me</h1>
                  {/*<h6 className='page-text'>Take a look at some of my web development projects</h6>*/}
                  <p style={{color: 'white', fontSize: 'X-large'}}>
                    I am a full-stack developer with a passion for beautiful and efficient webapps. 
                    I have a preference for backend development but I enjoy working on frontend too when
                    the opportunity comes. <hr style={{color: 'white', border: '1px solid'}}></hr>
                    My specialties are Python, C++, and JavaScript, but I love to learn new technologies.
                  </p>
                  <hr></hr>
                  <h3 className='page-text' style={{marginBottom: '50px'}}>You can contact me at <a style={{color: 'rgb(255, 41, 255)'}} href='mailto: CalebHalter@my.unt.edu'>CalebHalter@my.unt.edu</a></h3>
                </div>
                {/*<div className="col-md-6" style={{textAlign: 'left', color: 'white', fontWeight: 'normal'}}>
                  <h1 className='page-text' style={{marginBottom: '50px'}}>Contact me</h1>
                  <h3 style={{fontWeight: 'normal'}}>Your Name</h3>
                  <input style={{width: '100%'}} type='text'></input><hr></hr>
                  <h3 style={{fontWeight: 'normal'}}>Your email</h3>
                  <input style={{width: '100%'}} type='text'></input><hr></hr>
                  <h3 style={{fontWeight: 'normal'}}>Message</h3>
                  <textarea style={{width: '100%', height: '25vh'}}></textarea><hr></hr>
                </div>*/}
            </div>
            </center>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;