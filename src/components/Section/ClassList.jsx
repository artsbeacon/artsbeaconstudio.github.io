import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Row } from 'react-bootstrap'
import ClassCard from './ClassCard'
import styled from '@emotion/styled'

const StyledCards = styled.div`

`

function ClassList ({ children, ...props }) {
    const { doc } = props
    const allClasses = doc.data.cards
    const colSmSize = allClasses.length > 4 ? 4 : Math.floor(12 / allClasses.length)
    // const classRows = allClasses
    // <p>filter: Kids Classes | Teens Classes | Adult Classes</p>
    return (
      <StyledCards>
        <Container fluid>
          <h3>Classes</h3>
          <Row>
            {doc.data.cards.map((c) => { 
              const classType = c.class_type !== null ? c.class_type : 'all' 
              const classTypeClassname = `type-` + classType
              return (
                <ClassCard c={c} colSmSize={colSmSize} classTypeClassname={classTypeClassname.toLowerCase()} />
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
