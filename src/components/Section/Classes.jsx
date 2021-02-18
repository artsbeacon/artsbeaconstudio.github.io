import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import styled from '@emotion/styled'

const Announcement = styled.div`
  padding: 15px;
  margin-bottom: 40px;
  p {
    margin: 0 0 30px;
    line-height: 1.5em;
    font-size: 22px;
  }
`

export default class Classes extends Component {
  render() {
    const { doc } = this.props
    return (
      <Container id={doc.uid} fluid className="bg-grey">
        <h2 className="text-center">{doc.data.title.text}</h2>
        <Announcement dangerouslySetInnerHTML={{ __html: doc.data.body.html }} />
      </Container>
    )
  }
}

Classes.propTypes = {
  doc: PropTypes.object.isRequired,
}
