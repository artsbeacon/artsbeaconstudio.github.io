import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styled from '@emotion/styled'

// TODO put all content in cms
// TODO collapsible announcement
/*
// TODO fix this to use state correctly
// const [open, setOpen] = useState(false)
let open = false
const setOpen = () => {
  open = !open
}
*/
const Announcement = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  margin-bottom: 40px;
  p {
    margin: 0 0 30px;
    line-height: 1.5em;
    font-size: 22px;
  }
`

export default class Classes extends Component {
  render() {
    const { doc } = this.props
    return (
      <Container id={doc.uid} fluid className="bg-grey">
        <h2 className="text-center">{doc.data.title.text}</h2>
        <Announcement dangerouslySetInnerHTML={{ __html: doc.data.body.html }} />
        <Row className="text-center">
          <Col sm="6">
            <h3>Arts Beacon Summer 2020</h3>
            <p>
              Summer classes — June 1st - August 1st
              <br />
              Semester breaks — June 28 - July 5<br />
              <i>More details coming soon</i>
            </p>
            <Button
              size="lg"
              variant="danger"
              href="https://artsbeacon.setmore.com/resourcebookingpage/r8899c4376729f6544bf3053fbcdaf0ab8fe2a103/class"
            >
              Register and see full details on our Booking website
            </Button>
          </Col>
          <Col sm="6">
            <h4>Kids and teen classes</h4>
            <p>Wednesday, Friday and Saturday options</p>
            <h4>Adult classes</h4>
            <p>Wednesday, Saturday and Sunday options</p>
            <h4>Private lessons and commissions</h4>
            <p>Be creative. Book a private group or family lesson!</p>
            <Button
              size="lg"
              variant="danger"
              href="https://artsbeacon.setmore.com/resourcebookingpage/r8899c4376729f6544bf3053fbcdaf0ab8fe2a103/services"
            >
              Book Services and private lessons on our Booking website
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

Classes.propTypes = {
  doc: PropTypes.object.isRequired,
}
