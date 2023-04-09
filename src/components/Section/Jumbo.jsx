import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Button } from 'react-bootstrap'

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
      color: #fff;
      font-size: 63px;
      padding: 2px 15px;
      background-color: rgba(222, 2, 216, 0.8);
      display: inline-block;
      padding: 2px 15px;
    }
    .info {
      margin-top: 20px;
    }
    .info p {
      color: #fff;
      font-size: 26px;
      font-weight: 400;
      margin: 0 auto 40px auto;
      background-color: rgba(222, 2, 216, 0.8);
      display: inline;
      padding: 7px 10px;
    }
    .button {
      margin-top: 60px;
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
    const altText = doc.data.section_image.alt
    const hasAltText = altText !== ''
    return (
      <JumboStyled>
        <div className="jumbotron" id="homePage" style={{ backgroundImage: `url(${doc.data.section_image.url})` }}>
          <h1>{doc.data.title.text}</h1>
          <div className="info">
            <JumboInfo dangerouslySetInnerHTML={{ __html: doc.data.body.html }} />
          </div>
          {hasAltText && (
            <div className="button">
              <Button size="lg" href="/classes">
                {altText}
              </Button>
            </div>
          )}
        </div>
      </JumboStyled>
    )
  }
}

Jumbo.propTypes = {
  doc: PropTypes.object.isRequired,
}
