import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Carousel } from 'react-bootstrap'
import Testimonial from './Testimonial'

// TODO better path to the items
// TODO add the styles

export default class Testimonials extends Component {
  render() {
    const { doc } = this.props
    const { items } = doc.data.body1[0]
    return (
      <Container id={doc.uid} fluid className="bg-grey">
        <h2 className="text-center">{doc.data.title.text}</h2>
        <div dangerouslySetInnerHTML={{ __html: doc.data.body.html }} />
        <Carousel>
          {items.map((item) => (
            <Carousel.Item>
              <Testimonial img={item.gallery_image.url} cite={item.gallery_image.alt}>
                {item.image_captions.text}
              </Testimonial>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    )
  }
}

Testimonials.propTypes = {
  doc: PropTypes.object.isRequired,
}
