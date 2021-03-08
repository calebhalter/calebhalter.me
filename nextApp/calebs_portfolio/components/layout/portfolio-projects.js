import React from 'react'
import { Spring, animated } from 'react-spring/renderprops.cjs'
import PortfolioElement from './portfolio-element'


class PortfolioProjects extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            theComeUp: 0,
            project: 'avciso'
        }
        console.log("LKFJSLDKFJ")
    }

    data = {
        avciso: {
            title: "StandardUser AvCISO Dashboard",
            languages_frameworks: 'Python Flask, JavaScript',
            description: <p style={{color: 'white'}}>
                The AvCISO is a cybersecurity solution for enterprise that provides endpoint detection and response, and 
                backup disaster recovery. I've worked as the lead developer on the dashboard for this product,  
                and you can find out more about it <a target="_blank" style={{color: 'rgb(255, 41, 255)'}} href="https://www.standardusercyber.com/avciso-rmc">here</a>.
            </p>,
            images: [
                {
                original: "api/images/avciso-1.png",
                },
                {
                original: "api/images/avciso-2.png",
                },
                {
                original: "api/images/avciso-3.png",
                }
            ],
        },
        public_ballot: {
            title: "public ballot",
            languages_frameworks: 'React, Express',
            description: <p style={{color: 'white'}}>
                I made this app with a friend to give people a clear overview of the elections they are eligible to vote in, 
                from a national to local level. It went live a month before the 2020 election, and it gave a list of every candidate 
                running for each office in the state of Texas. Just by entering a Texas address, you can view every candidate in every election 
                that someone at that address is eligible to vote in. The data for the 2020 election is still live, and you can try the tool 
                yourself <a target="_blank" style={{color: 'rgb(255, 41, 255)'}} href="http://publicballot.org/">here</a>.
            </p>,
            images: [
                {
                    original: "api/images/publicballot-1.png",
                },
                {
                    original: "api/images/publicballot-2.png",
                },
                {
                    original: "api/images/publicballot-3.png",
                }
            ],
        },
        software_dev: {
            title: "Point-Of-Service Software Dev Project",
            languages_frameworks: 'JavaScript',
            description: <p style={{color: 'white'}}>
                In a software development class, my group was tasked with the creation of point-of-service for 
                a burger restaurant. I led a small team in charge of creating a tablet-based ordering system, similar to 
                one that you may see at a Chili's or Red Robin. Using it, a customer could order items, view the status of 
                their order, play games, and pay their bill.
            </p>,
            images: [
                {
                    original: "api/images/3444-2.png",
                },
                {
                    original: "api/images/3444-1.png",
                },
                {
                    original: "api/images/3444-3.png",
                }
            ]
        }
    }

    open_window = (project) => {
        console.log("HEY")
        this.setState({
            project: project,
            theComeUp: 1
        })
        document.getElementById(this.props.window).style.zIndex = -2;
    }

    close_window = () => {
        this.setState({
            theComeUp: 0
        })
        document.getElementById(this.props.window).style.opacity = 1;
        document.getElementById(this.props.window).style.zIndex = 1;
    }

    render() {
        return (
            <div>
                <center style={{justifyContent: 'center', display: 'flex'}}>
            <Spring
                toggle={this.state.theComeUp}
                from={{
                    opacity: 0, 
                    transform: 'translate3d(0,40px,0)',
                    zIndex: -1
                }}
                to={{
                    zIndex: this.state.theComeUp ? 3 : -1, 
                    opacity: this.state.theComeUp ? 1 : 0, 
                    transform: this.state.theComeUp ? 'translate3d(0,40px,0)' : 'translate3d(0,0,0)'
                }}>
                {({ opacity, transform, zIndex}) => 
                        <animated.div id='fullscreen' style={{opacity, transform, zIndex, position: 'absolute', width: '80%', backgroundColor: 'transparent', padding: '30px'}}>
                            <div style={{width: '100%', textAlign: 'right'}}><i onClick={() => this.close_window()}  style={{cursor: 'pointer', color: 'white', fontSize: 'XX-large'}} class="bi bi-x"></i></div>
                            <PortfolioElement images={this.data[this.state.project].images} />
                            <h2 className='page-text'>{this.data[this.state.project].title}</h2>
                            <h3 style={{color: 'white'}}>{this.data[this.state.project].languages_frameworks}</h3>
                            {this.data[this.state.project].description}
                        </animated.div>
                }
            </Spring>
            </center>
            </div>
        )
    }
}

export default PortfolioProjects;