import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Button, Jumbotron } from 'react-bootstrap'

const JumboStyled = styled.div`
  .jumbotron {
    padding: 150px 25px;
    padding-bottom: 10px;
    padding-bottom: 200px;
    background-color: #fff;
    color: #000;
    background-image: url(img/hands.jpg);
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    h1 {
      font-size: 63px;
      padding: 2px 15px;
      color: #000;
    }
    p {
      font-size: 26px;
      font-weight: 400;
      margin: 0 auto 40px auto;
    }
    img {
      display: none;
    }
  }
  @media screen and (max-width: 480px) {
    .jumbotron h1 {
      font-size: 54px;
    }
  }
`

const JumboInfo = styled.div`
  display: inline;
  padding: 7px 10px;
`

export default class Jumbo extends Component {
  render() {
    const { doc } = this.props
    const linkText = doc.data.section_image.alt !== '' ? doc.data.section_image.alt : 'See Our Classes'
    return (
      <JumboStyled>
        <Jumbotron id="homePage" style={{ backgroundImage: `url(${doc.data.section_image.url})` }}>
          <h1>{doc.data.title.text}</h1>
          <JumboInfo dangerouslySetInnerHTML={{ __html: doc.data.body.html }} />
          <Button size="lg" href="#classes">
            {linkText}
          </Button>
        </Jumbotron>
      </JumboStyled>
    )
  }
}

Jumbo.propTypes = {
  doc: PropTypes.object.isRequired,
}
