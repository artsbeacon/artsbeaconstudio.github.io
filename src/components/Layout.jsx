/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import '@reach/skip-nav/styles.css'

import Footer from './Footer'
import SEO from './SEO'
import SkipNavLink from './SkipNavLink'
import { theme, artsbeacon } from '../styles'

// import 'typeface-lora'
// import 'typeface-source-sans-pro'

import 'bootstrap/dist/css/bootstrap.min.css'

const globalStyle = css`
  ${artsbeacon}
`

const PureLayout = ({ children, data, customSEO }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyle} />
      <SkipNavLink />
      {!customSEO && <SEO />}
      {children}
      <Footer>
        <div dangerouslySetInnerHTML={{ __html: data.prismicHomepage.data.footer.html }} />
      </Footer>
    </>
  </ThemeProvider>
)

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            prismicHomepage {
              data {
                footer {
                  html
                }
              }
            }
          }
        `}
        render={(data) => (
          <PureLayout {...this.props} data={data}>
            {this.props.children}
          </PureLayout>
        )}
      />
    )
  }
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  data: PropTypes.object.isRequired,
  customSEO: PropTypes.bool,
}

PureLayout.defaultProps = {
  customSEO: false,
}
