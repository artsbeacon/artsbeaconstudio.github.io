import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button, Card, Modal } from 'react-bootstrap'
import ClassCard from './ClassCard'
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

function ClassList ({ children, ...props }) {
  // function ClassList ({ children, ...props }) {
// export default class ClassList extends Component {
  // render() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const { doc } = props
    const colSmSize = doc.data.cards.length > 4 ? 4 : Math.floor(12 / doc.data.cards.length)
    console.log('class list!', doc.data.cards)
    return (
      <StyledCards>
        <Container fluid>
          <Row>
            {doc.data.cards.map((c) => {
              const buttonLink = c.link.url.indexOf('/') > 0 ? c.link.url : `#${c.link.url.substring(1)}`
              const r = Math.random() * 1000
              return (
                <ClassCard c={c} colSmSize={colSmSize} />
              )
            })}
          </Row>
        </Container>
      </StyledCards>
    )
}

export default ClassList

ClassList.propTypes = {
  doc: PropTypes.object.isRequired,
}
