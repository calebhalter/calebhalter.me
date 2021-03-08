import React from 'react'
import ImageGallery from 'react-image-gallery'

class PortfolioElement extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <center>
                <div style={{width: '60%'}}>
                    <ImageGallery items={this.props.images} showPlayButton={false} showThumbnails={false}/>
                </div>
            </center>
        )
    }
}

export default PortfolioElement;