import React from 'react'
import PropTypes from 'prop-types'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Testimonial = ({ children, img, cite }) => (
  <Row>
    <Col sm={{ span: 2, offset: 2 }} className="d-xs-none">
      <Image src={img} className="float-left" roundedCircle />
    </Col>
    <Col sm={7}>
      <h4>
        <em>{children}</em>
        <br /><br />
        <span>{cite}</span>
      </h4>
    </Col>
  </Row>
)

export default Testimonial

Testimonial.propTypes = {
  children: PropTypes.node,
  img: PropTypes.string,
  cite: PropTypes.string,
}

Testimonial.defaultProps = {
  children: '',
  img: '',
  cite: '',
}
