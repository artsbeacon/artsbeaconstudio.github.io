import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import InstagramEmbed from 'react-instagram-embed'
import ContactForm from './ContactForm'

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
              maxWidth={350}
              hideCaption
              containerTagName="div"
              injectScript
              protocol=""
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Col>
          <Col sm={{ span: 4, offset: 2 }}>
            <iframe
              title="facebookPost"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fartsbeacon%2Fposts%2F3268785126680066&width=350"
              width="350"
              height="650"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

Contact.propTypes = {
  doc: PropTypes.object.isRequired,
}
