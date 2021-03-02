import { timers } from 'jquery';
import React from 'react'
import { Spring, animated, config, interpolate } from 'react-spring/renderprops.cjs'

class GalleryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            width: 0,
            height: 0        }
    }

    handleClick = (link=undefined, open=true) => {
        this.props.closeAll();
        if (open && this.state.expand)
            return;
        this.setState(() => ({
            expand: open
        }));
        if (link !== undefined)
            location.href = '#' + link
    }

    handleResize = () => {
        console.log('resize')
        this.setState(state => ({
            expand: state.expand
        }))
    }

    componentDidMount() {
        this.state.width = window.innerWidth;
        this.state.height = window.innerHeight;
        this.state.render = true;
        this.setState(state => ({
            expand: false
        }));
        window.addEventListener("resize", this.handleResize);
    }

    x_out = () => {
        this.setState(() => ({
            expand: false
        }))
    }

    render() {
        return (
            <div>
                <Spring
                    config={config.slow}
                    toggle={this.state.expand}
                    from={{opacity: 0, width: 'inherit'}}
                    to={{ 
                        opacity: this.state.expand ? 1 : 0, 
                        position: this.state.expand ? 'relative': 'relative', 
                        width: this.state.expand ? this.state.width : this.state.width / 2, 
                        margin: this.state.expand ? '0px' : '25px', 
                        height: this.state.expand ? this.state.height : 'inherit',
                        backgroundColor: this.state.expand ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.83)',
                        appDisplay: this.state.expand ? 'unset' : 'none',
                        xDisplay: this.state.expand ? 'unset' : 'none'
                    }}>
                        {({ opacity, position, margin, height, width, appDisplay, xDisplay }) => 
                            <animated.div onClick={() => this.handleClick(this.props.title)} id={this.props.title} 
                                style={{
                                    width,
                                    height,
                                    position,
                                    margin,
                                    /*position,*/
                                    /*margin*/
                                }} className="jumbotron gallery-piece">
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => this.handleClick(undefined, false)} width="32" height="32" fill="currentColor" className="bi bi-fullscreen-exit" viewBox="0 0 16 16" style={{float: 'right', display: xDisplay}}>
                                <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
                                </svg>
                                <h1>{this.props.title}</h1>
                                <p>{this.props.description}</p>
                                <div style={{display: appDisplay}}>{this.props.element}</div>
                            </animated.div>
                    }

                </Spring>
            </div>
        )
    }
}

export default GalleryItem;