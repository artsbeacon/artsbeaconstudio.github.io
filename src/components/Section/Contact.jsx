import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from './ContactForm'

// TODO social feeds

export default class Contact extends Component {
  render() {
    const { doc } = this.props
    return (
      <Container id={doc.uid} fluid className="bg-grey">
        <h2 className="text-center">{doc.data.title.text}</h2>
        <Row>
          <Col sm="5">
            <div dangerouslySetInnerHTML={{ __html: doc.data.body.html }} />
          </Col>
          <Col sm="7">
            <ContactForm />
          </Col>
        </Row>
        <h2 className="text-center">CONNECT WITH US ON SOCIAL MEDIA</h2>
        <Row>
          <Col sm={{ span: 4, offset: 1 }}>Instagram posts here</Col>
          <Col sm={{ span: 4, offset: 2 }}>Facebook posts here</Col>
        </Row>
      </Container>
    )
  }
}

Contact.propTypes = {
  doc: PropTypes.object.isRequired,
}
