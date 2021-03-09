import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class Topnav extends React.Component {
    constructor(props) {
        super(props)
        const topnav_items = [
            ['Home', 'index'], 
            ['Portfolio', 'portfolio'], 
            /*['Interactive Code', 'interactive_code'], */
            ['About', 'about'],
            ['Contact', 'contact'],
        ];
        this.state = {}
        this.state.topnav_list = [];
        topnav_items.forEach(item => {
            this.state.topnav_list.push(
                <Nav.Link className={`nav-link ${this.props.currentPage === item[0] ? "active" : ""}`} href={item[1]}>
                    {item[0]}
                </Nav.Link>
            )
        })
    }
    render() {
        return (
            <Navbar variant="dark" collapseOnSelect expand="lg" className="navbar navbar-dark navbar-expand-md navigation-clean" style={{zIndex: '2'}}>
                <Navbar.Brand href='/'>CalebHalter.me</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="collapse navbar-collapse" id="navcol-1">
                    <Nav className="navbar-nav ml-auto">
                        {this.state.topnav_list}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}