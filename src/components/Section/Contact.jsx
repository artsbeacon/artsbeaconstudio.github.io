import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from './ContactForm'
import InstagramEmbed from 'react-instagram-embed'

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
        <h2 className="text-center">Connect with us on social media</h2>
        <Row>
          <Col sm={{ span: 4, offset: 1 }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/Bwp4cljAvAs/"
              maxWidth={320}
              hideCaption={true}
              containerTagName="div"
              injectScript
              protocol=""
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Col>
          <Col sm={{ span: 4, offset: 2 }}>Facebook posts here</Col>
        </Row>
      </Container>
    )
  }
}

Contact.propTypes = {
  doc: PropTypes.object.isRequired,
}
