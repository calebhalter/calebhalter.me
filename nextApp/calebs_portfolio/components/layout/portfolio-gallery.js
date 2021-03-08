import React from 'react'
import InteractiveItem from './interactive-item'
import Pos_tagger from '../functional_components/pos_tagger'
import WordTransformation from '../functional_components/word_transformation'
import { config, Trail } from 'react-spring/renderprops.cjs'

class Gallery extends React.PureComponent {
    constructor(props) {
      super(props);
      let refs = [
        React.createRef(),
        React.createRef()
      ];
      let descriptions = {
        POS: `Using a Hidden Markov Model, this Python script tags the parts of speech for each word in your input sentence`,
        WordTransform: `This C++ function takes two words as input and finds the smallest number of transformations necessary to \
                            turn the first word into the second`
      }
      let elements = [
        <InteractiveItem closeAll={() => this.closeAll(0)} ref={refs[0]} element={<Pos_tagger />} title='POS tagger' description={descriptions['POS']} />,
        <InteractiveItem closeAll={() => this.closeAll(1)} ref={refs[1]} element={<WordTransformation />} title='Word Transformation' description={descriptions['WordTransform']} />
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
        <div id='elements' style={{zIndex: '1', position: 'relative'}}>
          {this.state.elements}
        </div>
      )
    }
  }

export default Gallery;