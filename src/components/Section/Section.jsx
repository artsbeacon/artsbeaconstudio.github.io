import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards'
import ImageText from './ImageText'
import ImageCarousel from './ImageCarousel'
import Jumbo from './Jumbo'
import Signup from './Signup'
import Classes from './Classes'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Components = {
  banner: Jumbo,
  cards: Cards,
  imageText: ImageText,
  studio: ImageCarousel,
  signup: Signup,
  classes: Classes,
  testimonials: Testimonials,
  contact: Contact,
}

// TODO pass the component type down as a field in the cms
// WANT: see if the doc path can be made better

export default class Section extends Component {
  render() {
    const { sections } = this.props
    return (
      <div className="section-wrapper">
        {sections.map((section) => {
          const doc = section.page_section.document[0]
          let cType = doc.uid
          if (doc.uid === 'class-types') {
            cType = 'cards'
          } else if (doc.uid === 'mailing-list') {
            cType = 'signup'
          }
          if (typeof Components[cType] === 'undefined') {
            cType = 'imageText'
          }
          return React.createElement(Components[cType], {
            key: doc.uid,
            doc,
          })
        })}
      </div>
    )
  }
}

Section.propTypes = {
  sections: PropTypes.array.isRequired,
}
