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
  }
  .navbar .nav-item a {
    color: #fff !important;
    padding: 20px 0.7rem;
  }
  .navbar .navbar-brand {
    color: #fff !important;
    font-size: 1rem;
    padding: 0;
  }
  .navbar-brand img {
    width: 110px;
    background: white;
    padding: 10px;
    margin-top: -15px;
    display: none;
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
`

class Header extends Component {
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
                  <Nav.Link href="/#studio">THE STUDIO</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/#classes">CURRENT CLASSES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/#about">ABOUT JENA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/#contact">CONTACT US</Nav.Link>
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
