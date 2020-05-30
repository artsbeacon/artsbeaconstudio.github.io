import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, Header, Section } from '../components'

class Index extends Component {
  render() {
    const {
      data: { homepage },
    } = this.props
    return (
      <Layout>
        <Header />
        <Section sections={homepage.data.page_sections} />
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      data: PropTypes.shape({
        page_sections: PropTypes.shape({
          text: PropTypes.array.isRequired,
        }),
      }),
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicLayeredPage(uid: { eq: "homepage" }) {
      uid
      data {
        title {
          text
        }
        date(formatString: "MM.DD.YYYY")
        description
        page_sections {
          page_section {
            uid
            document {
              ... on PrismicPageSection {
                data {
                  title {
                    text
                  }
                  section_type
                  body {
                    html
                  }
                  section_image {
                    url
                    alt
                  }
                  body1 {
                    items {
                      gallery_image {
                        url
                        alt
                      }
                      image_captions {
                        text
                      }
                    }
                  }
                }
                uid
              }
              ... on PrismicCardSection {
                uid
                data {
                  title {
                    text
                  }
                  cards {
                    title {
                      text
                    }
                    image {
                      url
                      alt
                    }
                    description {
                      html
                    }
                    button_text {
                      text
                    }
                    link {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
