import React, { Component } from 'react'
import styled from '@emotion/styled'

import { Button, Container } from 'react-bootstrap'
import { Layout, Header } from '../components'

const JumboStyled = styled.div`
  .jumbotron {
    padding: 150px 25px;
    padding-bottom: 10px;
    padding-bottom: 200px;
    background-color: #fff;
    color: #000;
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

class FourOhFour extends Component {
  render() {
    const bgImgUrl =
      'https://images.prismic.io/artsbeacon/3d8bda49-2dea-47c5-b365-5857dd4018bf_IMG_20190311_090336.jpg?auto=compress,format'
    return (
      <Layout>
        <Header />
        <Container id="fourOhFour" style={{ backgroundColor: `#efefef` }}>
          <h1>Page Not Found</h1>
          <div className="info">
            <p>The page you requested could not be found.</p>
          </div>
          <div className="button">
            <Button size="lg" href="/">
              Try the homepage?
            </Button>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default FourOhFour
