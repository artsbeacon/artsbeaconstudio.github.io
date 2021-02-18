import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button, Card, Modal } from 'react-bootstrap'
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
    .h5 {
      color: #333;
      font-size: 1.65rem;
    }
    p {
      margin: 20px 0;
      opacity: 1;
      color: #333;
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

function ClassCard ({ children, ...props }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = (e) => { 
    setShow(true)
    e.preventDefault ? e.preventDefault() : e.returnValue = false
  }

  const openInNewWindow = (e) => {
    console.log('open this button link in a new window', buttonLink)
    window.open(
      buttonLink,
      '_blank'
    )
    e.preventDefault ? e.preventDefault() : e.returnValue = false
  }

  const { c, colSmSize, classTypeClassname } = props
  const buttonLink = c.link.url.indexOf('/') > 0 ? c.link.url : `#${c.link.url.substring(1)}`
  const r = Math.random() * 1000
  return (
    <Col className={classTypeClassname} sm={colSmSize} key={r}>
      <Card>
        <Card.Img variant="top" src={c.image.url} onClick={handleShow} />
        <Card.Body>
          <Card.Title onClick={handleShow}>{c.title.text}</Card.Title>
          <Card.Text>
            <p><b>{c.class_type}</b> | <i>{c.class_tags}</i></p>
            <p>{c.quick_description.text}</p>
            <p><b>Cost:</b> ${c.cost}</p>
            <p><a href="javascript:return false" onClick={handleShow}>See Full Details</a></p>
          </Card.Text>
          <Button href={buttonLink} size="lg" onClick={openInNewWindow}>
            {c.button_text.text}
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{c.title.text}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <span dangerouslySetInnerHTML={{ __html: c.description.html }} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button href={buttonLink} variant="primary" onClick={openInNewWindow}>
            {c.button_text.text}
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  )
}

export default ClassCard

ClassCard.propTypes = {
  c: PropTypes.object.isRequired,
  colSmSize: PropTypes.object.isRequired,
}
