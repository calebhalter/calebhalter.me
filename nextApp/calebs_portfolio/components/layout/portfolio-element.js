import React from 'react'
import ImageGallery from 'react-image-gallery'

class PortfolioElement extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <center>
                <div id="portfolio-element-div" style={{width: '75%'}}>
                    <ImageGallery items={this.props.images} showPlayButton={false} showThumbnails={false}/>
                </div>
            </center>
        )
    }
}

export default PortfolioElement;