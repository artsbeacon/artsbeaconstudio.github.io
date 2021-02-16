import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards'
import ClassList from './ClassList'
import ImageText from './ImageText'
import ImageCarousel from './ImageCarousel'
import Jumbo from './Jumbo'
import Signup from './Signup'
import Classes from './Classes'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Components = {
  Cards,
  ClassList,
  ImageCarousel,
  Banner: Jumbo,
  Testimonials,
  ImageAndText: ImageText,
  MailingListForm: Signup,
  TextFullWidth: Classes,
  ContactForm: Contact,
}

// WANT: see if the doc path can be made better

export default class Section extends Component {
  render() {
    const { sections } = this.props
    return (
      <div className="section-wrapper">
        {sections.map((section) => {
          if (section.page_section === null) {
            return ''
          }
          if (typeof section.page_section === 'undefined' || typeof section.page_section.document === 'undefined') {
            return ''
          }
          const doc = section.page_section.document[0]
          const sectionType = typeof doc.data !== 'undefined' ? doc.data.section_type : ''
          let cType = String(sectionType).replace(/ /g, '')
          if (doc.__typename === 'PrismicCardSection') {
            cType = 'Cards'
          }
          if (doc.__typename === 'PrismicClassList') {
            cType = 'ClassList'
          }
          if (typeof Components[cType] === 'undefined') {
            cType = 'ImageAndText'
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
