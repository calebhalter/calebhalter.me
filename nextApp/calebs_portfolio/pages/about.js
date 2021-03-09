import Topnav from '../components/layout/topnav'
import React from 'react'
import dynamic from 'next/dynamic'

const Galaxy = dynamic(
  () => import('../components/visuals/galaxy'),
  {
    ssr: false
  }
);

function About() {
  return (
    <div style={{backgroundColor: 'black', }}>
      <Topnav currentPage='About'></Topnav>
      <section style={{textAlign: "center"}}>
    <Galaxy />
        <div className="outer" id='portfolio-main'>
          <div className="middle"  style={{padding: '0px 30px 0px 30px'}}>
            <div className="inner row">
                <div className='col-md-6'>
                  <h1 className='page-text' style={{marginBottom: '50px'}}>Caleb Halter</h1>
                  {/*<h6 className='page-text'>Take a look at some of my web development projects</h6>*/}
                  <p style={{color: 'white', fontSize: 'X-large'}}>
                    I am a full-stack developer with a passion for beautiful and efficient webapps. 
                    I have a preference for backend development but I enjoy working on frontend too when
                    the opportunity comes. <hr style={{color: 'white', border: '1px solid'}}></hr>
                    My specialties are Python, C++, and JavaScript, but I love to learn new technologies.
                  </p>
                </div>
                <div className="col-md-6" style={{display: 'flex', alignContent: 'center'}}>
                  <img style={{objectFit: 'cover'}} className="img-fluid" src="api/components/images/caleb-1.png" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;