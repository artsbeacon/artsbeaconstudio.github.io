import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap'

// TODO allow for captions?

export default class ImageCarousel extends Component {
  render() {
    const { doc } = this.props
    const { items } = doc.data.body1[0]
    return (
      <Container id={doc.uid} fluid>
        <Row>
          <Col sm="7">
            <h2>{doc.data.title.text}</h2>
            <div dangerouslySetInnerHTML={{ __html: doc.data.body.html }} />
          </Col>
          <Col sm="5">
            <Carousel>
              {items.map((item) => (
                <Carousel.Item>
                  <Image src={item.gallery_image.url} alt={item.gallery_image.alt} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

ImageCarousel.propTypes = {
  doc: PropTypes.object.isRequired,
}
