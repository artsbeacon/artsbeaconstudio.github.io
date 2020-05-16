import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

// TODO fix the link

export default class Cards extends Component {
  render() {
    const { doc } = this.props
    const colSmSize = Math.floor(12 / doc.data.cards.length)
    return (
      <Container fluid>
        <Row>
          {doc.data.cards.map((c) => (
            <Col sm={colSmSize}>
              <Card>
                <Card.Img variant="top" src={c.image.url} />
                <Card.Body>
                  <Card.Title>{c.title.text}</Card.Title>
                  <Card.Text>{c.description.text}</Card.Text>
                  <Button href="#classes" size="lg">
                    {c.button_text.text}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

Cards.propTypes = {
  doc: PropTypes.object.isRequired,
}
