import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Testimonial = ({ children }) => (
  <>
    {children}
    <form action="https://formspree.io/contact+forms@artsbeacon.com" method="POST">
      <Row>
        <Col sm="6" className="form-group">
          <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
        </Col>
        <Col sm="6" className="form-group">
          <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
        </Col>
      </Row>
      <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5" />
      <br />
      <Row>
        <Col sm="12" className="form-group">
          <Button variant="primary" className="float-right" type="submit">
            Send
          </Button>
        </Col>
      </Row>
    </form>
  </>
)

export default Testimonial

Testimonial.propTypes = {
  children: PropTypes.node,
}

Testimonial.defaultProps = {
  children: '',
}
