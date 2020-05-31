import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import styled from '@emotion/styled'

const StyledCards = styled.div`
  .card {
    background-color: #ffffff;
    padding: 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
    &:hover {
      box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),
        0 8px 10px -5px rgba(0, 0, 0, 0.3);
      transition: all 0.5s;
      color: black;
    }
    h4 {
      margin: 20px;
    }
    p {
      margin: 20px 0;
      opacity: 0.65;
    }
    p:last-child {
      padding-bottom: 20px;
      opacity: 1;
    }
    img {
      width: 100%;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
`

export default class Cards extends Component {
  render() {
    const { doc } = this.props
    const colSmSize = Math.floor(12 / doc.data.cards.length)
    return (
      <StyledCards>
        <Container fluid>
          <Row>
            {doc.data.cards.map((c) => {
              const buttonLink = c.link.url.indexOf('/') > 0 ? c.link.url : `#${c.link.url.substring(1)}`
              const r = Math.random() * 1000
              return (
                <Col sm={colSmSize} key={r}>
                  <Card>
                    <Card.Img variant="top" src={c.image.url} />
                    <Card.Body>
                      <Card.Title>{c.title.text}</Card.Title>
                      <Card.Text>
                        <span dangerouslySetInnerHTML={{ __html: c.description.html }} />
                      </Card.Text>
                      <Button href={buttonLink} size="lg">
                        {c.button_text.text}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </StyledCards>
    )
  }
}

Cards.propTypes = {
  doc: PropTypes.object.isRequired,
}
