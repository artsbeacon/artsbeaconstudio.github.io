import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap'
import styled from '@emotion/styled'

const StyledCarousel = styled.div`
  .carousel-control-prev,
  .carousel-control-next {
    background-image: none;
    color: #d645d2;
  }
  .carousel-indicators li {
    border: 1px solid #d645d2;
    background-color: transparent;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    &.active {
      background-color: #d645d2;
    }
  }
`

// WANT: allow for carousel image captions

export default class ImageCarousel extends Component {
  render() {
    const { doc } = this.props
    const { items } = doc.data.body1[0]
    return (
      <Container id={doc.uid} fluid>
        <Row>
          <Col sm="7">
            <h2>{doc.data.title.text}</h2>
            <div dangerouslySetInnerHTML={{ __html: doc.data.body.html }} />
          </Col>
          <Col sm="5">
            <StyledCarousel>
              <Carousel>
                {items.map((item) => (
                  <Carousel.Item key={item.gallery_image.url}>
                    <Image src={item.gallery_image.url} alt={item.gallery_image.alt} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </StyledCarousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

ImageCarousel.propTypes = {
  doc: PropTypes.object.isRequired,
}
