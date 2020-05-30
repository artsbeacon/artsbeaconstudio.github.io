import React from 'react'
import { Nav } from 'bootstrap'

const scrollTo = (targetY, hash) => {
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

const hashClick = (e) => {
  if (e.target.hash !== '') {
    const el = document.querySelector(e.target.hash)
    if (el) {
      e.preventDefault()
      scrollTo(el.offsetTop, e.target.hash)
    }
  }
}

const ScrollingNavLink = (props) => (
  <Nav.Link {...props} onClick={hashClick}>
    {props.children}
  </Nav.Link>
)

export default ScrollingNavLink

ScrollingNavLink.propTypes = {
  children: PropTypes.node
}
