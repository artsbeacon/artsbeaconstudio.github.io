import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Mailchimp from './Mailchimp'

export default class Signup extends Component {
  render() {
    const { doc } = this.props
    return (
      <Container id={doc.uid} fluid className="bg-grey">
        <Mailchimp>
          <h2>{doc.data.title.text}</h2>
          <div dangerouslySetInnerHTML={{ __html: doc.data.body.html }} />
        </Mailchimp>
      </Container>
    )
  }
}

Signup.propTypes = {
  doc: PropTypes.object.isRequired,
}
