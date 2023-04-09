import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Navbar, Nav, Container } from 'react-bootstrap'

const StyledHeader = styled.nav`
  .navbar {
    margin-bottom: 0;
    background-color: #d645d2;
    z-index: 9999;
    border: 0;
    font-size: 12px !important;
    line-height: 1.42857143 !important;
    letter-spacing: 4px;
    border-radius: 0;
    font-family: Montserrat, sans-serif;
    padding-top: 0;
    padding-bottom: 0;
    .nav-item a {
      color: #fff !important;
      padding: 20px 0.7rem;
    }
    .navbar-brand {
      color: #fff !important;
      font-size: 1rem;
      padding: 0;
      img {
        width: 110px;
        background: white;
        padding: 10px;
        margin-top: -15px;
        display: none;
      }
    }
  }
  .nav-pills > li.active > a,
  .nav-pills > li.active > a:focus,
  .nav-pills > li.active > a:hover {
    background-color: #d645d2;
  }
  .navbar-nav .nav-item a:hover,
  .navbar-nav .nav-item a.active {
    color: #d645d2 !important;
    background-color: #fff !important;
  }
  .navbar-default .navbar-toggle {
    border-color: transparent;
    color: #fff !important;
    background: #000;
  }
  @media screen and (max-width: 480px) {
    .logo {
      font-size: 150px;
    }
  }
`

class Header extends Component {
  scrollTo = (targetY, hash) => {
    const scrollToward = (to, duration) => {
      if (duration <= 0) {
        window.location.hash = hash
        return
      }
      const difference = to - window.scrollY
      const perTick = (difference / (duration * .3)) * 10
      const y = window.scrollY + perTick
      window.scrollTo(0, y)
      setTimeout(function () {
        scrollToward(to, duration - 10)
      }, 10)
    }
    scrollToward(targetY, 600)
  }

  scrollClick = (e) => {
    if (e.target.hash !== '') {
      const el = document.querySelector(e.target.hash)
      if (el) {
        e.preventDefault()
        this.scrollTo(el.offsetTop, e.target.hash)
      }
    }
  }

  render() {
    const { invert } = this.props
    return (
      <StyledHeader invert={invert}>
        <Navbar fixed="top" expand="lg">
          <Container>
            <Navbar.Brand href="/#homePage">Arts Beacon</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Item>
                  <Nav.Link href="/#studio" eventKey={1} onClick={this.scrollClick}>
                    THE STUDIO
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/#gallery" eventKey={2} onClick={this.scrollClick}>
                    THE GALLERY
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/#artists" eventKey={3} onClick={this.scrollClick}>
                    RESIDENT ARTISTS
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/classes" eventKey={4} onClick={this.scrollClick}>
                    CLASSES
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#contact" eventKey={5} onClick={this.scrollClick}>
                    CONTACT US
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </StyledHeader>
    )
  }
}

export default Header

Header.propTypes = {
  invert: PropTypes.bool,
}

Header.defaultProps = {
  invert: false,
}
