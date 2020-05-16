import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Carousel } from 'react-bootstrap'
import styled from '@emotion/styled'
import Testimonial from './Testimonial'

const StyledCarousel = styled.div`
  h2 {
    text-align: center;
  }
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
  .carousel-item {
    h4 {
      font-size: 22px;
      line-height: 1.375em;
      font-weight: 400;
      font-style: italic;
      margin: 30px 0 90px 0;
    }
    span {
      font-style: normal;
    }
  }
`

// WANT: make a better path to the items

export default class Testimonials extends Component {
  render() {
    const { doc } = this.props
    const { items } = doc.data.body1[0]
    return (
      <StyledCarousel>
        <Container id={doc.uid} fluid className="bg-grey">
          <h2>{doc.data.title.text}</h2>
          <div dangerouslySetInnerHTML={{ __html: doc.data.body.html }} />
          <Carousel>
            {items.map((item) => (
              <Carousel.Item key={item.gallery_image.alt}>
                <Testimonial img={item.gallery_image.url} cite={item.gallery_image.alt}>
                  {item.image_captions.text}
                </Testimonial>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </StyledCarousel>
    )
  }
}

Testimonials.propTypes = {
  doc: PropTypes.object.isRequired,
}
