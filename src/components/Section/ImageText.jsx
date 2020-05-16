import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Image } from 'react-bootstrap'

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
            <Image src={doc.data.section_image.url} alt={doc.data.section_image.alt} roundedCircle />
          </Col>
        </Row>
      </Container>
    )
  }
}

ImageText.propTypes = {
  doc: PropTypes.object.isRequired,
}
