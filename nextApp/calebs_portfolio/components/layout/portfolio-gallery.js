import React from 'react'
import GalleryItem from './gallery-item'
import Pos_tagger from '../functional_components/pos_tagger'

import { config, Trail } from 'react-spring/renderprops.cjs'

class Gallery extends React.PureComponent {
    constructor(props) {
      super(props);
      let refs = [
        React.createRef(),
        React.createRef()
      ];
      let elements = [
        <GalleryItem closeAll={() => this.closeAll(0)} ref={refs[0]} element={<Pos_tagger />} title='POS tagger' description="it'll tag the parts of speech on your stuff " />,
        <GalleryItem closeAll={() => this.closeAll(1)} ref={refs[1]} element={<Pos_tagger />} title='POS tagger 2'/>
      ]
      this.state = {
        refs: refs,
        elements: elements
      }
    }

    closeAll = (index) => {
      for (let i=0; i < this.state.elements.length; i++) {
        if (i !== index)
          this.state.refs[i].current.x_out()
      }
    }

    render() {
      return (
        <div id='elements'>
          {this.state.elements}
        </div>
      )
    }
  }

export default Gallery;