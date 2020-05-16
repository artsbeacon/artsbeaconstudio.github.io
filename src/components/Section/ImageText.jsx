import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Image } from 'react-bootstrap'

// TODO fix the link
// TODO testimonials

export default class ImageText extends Component {
  render() {
    const { doc } = this.props
    return (
      <Container id={doc.uid} fluid>
        <Row>
          <Col sm="7">
            <h2>{doc.data.title.text}</h2>
            <div dangerouslySetInnerHTML={{ __html: doc.data.body.html }} />
          </Col>
          <Col sm={{ span: 3, offset: 1 }}>
            <Image src="img/jenaheadshot0.5x.jpg" alt="Jena Jones" roundedCircle />
          </Col>
        </Row>
      </Container>
    )
  }
}

ImageText.propTypes = {
  doc: PropTypes.object.isRequired,
}
