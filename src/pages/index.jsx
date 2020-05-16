import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import { Layout, Header, Listing, Wrapper, Title, Section } from '../components'
import website from '../../config/website'

const ProjectListing = styled.ul`
  list-style-type: none;
  margin-left: 0;
  margin-top: 4rem;
  li {
    margin-bottom: 1.45rem;
    a {
      font-size: 2.369rem;
      font-style: normal;
      color: ${(props) => props.theme.colors.black};
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        font-size: 1.777rem;
      }
    }
  }
`

const IndexWrapper = Wrapper.withComponent('main')

// TODO allPrismicLayeredPage ? or prismicLayeredPage slug = homepage

class Index extends Component {
  render() {
    const {
      data: { posts, projects, layeredHome },
    } = this.props
    return (
      <Layout>
        <Header />
        <Section sections={layeredHome.nodes[0].data.page_sections} />
        <IndexWrapper id={website.skipNavId} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Title style={{ marginTop: '4rem' }}>Recent posts</Title>
          <Listing posts={posts.nodes} />
          <Title style={{ marginTop: '8rem' }}>Recent projects</Title>
          <ProjectListing>
            {projects.nodes.map((project) => (
              <li key={project.primary.label.text}>
                <a href={project.primary.link.url}>{project.primary.label.text}</a>
              </li>
            ))}
          </ProjectListing>
        </IndexWrapper>
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    layeredHome: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    projects: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    layeredHome: allPrismicLayeredPage(filter: { uid: { eq: "homepage" } }) {
      nodes {
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
                        text
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
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      nodes {
        uid
        data {
          title {
            text
          }
          date(formatString: "DD.MM.YYYY")
          categories {
            category {
              document {
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
    projects: allPrismicProjectsBodyLinkItem {
      nodes {
        primary {
          label {
            text
          }
          link {
            url
          }
        }
      }
    }
  }
`
