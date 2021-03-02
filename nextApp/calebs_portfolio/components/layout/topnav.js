import React from 'react'

export default class Topnav extends React.Component {
    constructor(props) {
        super(props)
        const topnav_items = [
            ['Home', 'index'], 
            ['Portfolio', 'portfolio'], 
            ['Contact', '#']
        ];
        this.state = {}
        this.state.topnav_list = [];
        topnav_items.forEach(item => {
            this.state.topnav_list.push(
            <li className="nav-item" key={item[1]}>
                <a className={`nav-link ${this.props.currentPage === item[0] ? "active" : ""}`} href={item[1]}>
                    {item[0]}
                </a>
            </li>)
        })
    }
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md navigation-clean">
                <div className="container">
                    <a className="navbar-brand" href='#'>CalebHalter.me</a>
                    <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav ml-auto">
                            {this.state.topnav_list}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}