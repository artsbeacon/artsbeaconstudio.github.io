import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

import { Layout, Header, Listing, Wrapper, Title } from '../components'
import website from '../../config/website'

const Social = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  li {
    display: inline;
    &:not([data-name='social-entry-0']) {
      margin-left: 2.5rem;
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        margin-left: 1.75rem;
      }
    }
    a {
      font-style: normal;
      color: ${(props) => props.theme.colors.greyDark};
      font-size: 1.333rem;
      font-weight: 600;
      &:hover,
      &:focus {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: none;
      }
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        font-size: 1.2rem;
      }
    }
  }
`

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

const JumboTitle = styled.h1`
  font-size: 63px;
`

const IndexWrapper = Wrapper.withComponent('main')

// TODO break this all out into components
// TODO dynamic data!
// TODO mailchimp form
// TODO CONNECT WITH US ON SOCIAL MEDIA
// TODO instagram and facebook social media

class Index extends Component {
  render() {
    const {
      data: { homepage, social, posts, projects },
    } = this.props
    return (
      <Layout>
        <Header />
        <Jumbotron id="homePage" className="fuji text-center">
          <JumboTitle>{homepage.data.title.text}</JumboTitle>
          <div className="info" dangerouslySetInnerHTML={{ __html: homepage.data.content.html }} />
          <p>
            <Button size="lg" href="#classes">
              ONLINE SUMMER CLASSES
            </Button>
          </p>
        </Jumbotron>
        <Container fluid>
          <Row>
            <Col sm="4">
              <Card>
                <Card.Img variant="top" src="img/paints-card.jpg" />
                <Card.Body>
                  <Card.Title>Kids and teen classes</Card.Title>
                  <Card.Text>Monday, Wednesday and Friday options</Card.Text>
                  <Button href="#classes" size="lg">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <Card.Img variant="top" src="img/events-card.jpg" />
                <Card.Body>
                  <Card.Title>Adult events and classes</Card.Title>
                  <Card.Text>Weekly classes and party booking</Card.Text>
                  <Button href="#classes" size="lg">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <Card.Img variant="top" src="img/buddas-card.jpg" />
                <Card.Body>
                  <Card.Title>Private lessons and commissions</Card.Title>
                  <Card.Text>Be creative. Jena will work with you!</Card.Text>
                  <Button href="#classes" size="lg">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container fluid className="bg-grey">
          <h2>Stay informed about studio events or class changes!</h2>
          <p>Sign up for our mailing list.</p>
          <h2>TODO add mailchimp react safe version</h2>
        </Container>
        <Container id="studio" fluid>
          <Row>
            <Col sm="7">
              <h2>The Studio</h2>
              <h4>What makes our classes different?</h4>
              <p>
                Arts beacon is my working artist studio. Students will get to see my work in progress and preparations
                for exhibitions. Our classes are offered by the semester, 4 week series, workshops and drop in. My
                teaching philosophy is to encourage creative thinking and problem solving while teaching students to
                develop a rich visual aesthetic. I design projects for kids and adults with an observational and process
                based approach to art making. Classes will be divided by age and material and students will be offered
                age appropriate materials and tools. I have a variety of materials available to my students like clay,
                acrylic and watercolor painting, fabric, woodworking tools and supplies, plaster, collage, and mixed
                media sculpture supplies. All of my students will have access to the studio tools, supplies and
                materials so they may gravitate to the medium that works best for their personal projects and goals.
                Students will be encouraged to draw from observation to learn how to see and develop a strong visual
                vocabulary and at the same time take a process based approach with materials to expand the possibilities
                of their art making.
              </p>
            </Col>
            <Col sm="5">
              <Carousel>
                <Carousel.Item>
                  <img src="img/painting.jpg" alt="Arts Beacon in action" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="img/kids.jpg" alt="Arts Beacon in action" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="img/teens.jpg" alt="Arts Beacon in action" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="img/events.jpg" alt="Arts Beacon in action" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="img/drawing.jpg" alt="Arts Beacon in action" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
        <Container id="classes" fluid className="bg-grey">
          <h2 className="text-center">Summer 2020 Classes - Registration is Open Now</h2>
          <div className="announcement">
            <p>
              <em>About this summer session</em>
            </p>
            <div className="well">
              <p>
                Arts Beacon has developed an online class schedule to keep the blue’s and blah’s away during this global
                pandemic.
              </p>
              <p>
                We will be holding two sessions of online classes using Zoom. Session 1 is from June 1st to June 28th.
                Session 2 is from July 6th-July 31st. If a class time doesn't work for you we can record the classes and
                send you the information to access the classes on your time schedule.
              </p>
              <div className="collapse" id="summerExtended">
                <p>
                  We have designed our classes to work with one media type to simplify the supply list and keep the cost
                  low.
                </p>
                <p>
                  In addition, we will be providing free art making videos on Facebook and Instagram for anyone who
                  needs a little distraction for the kids or a dose of inspiration for themselves. Our goal for this
                  summer is to help you all find meaningful activities to connect to yourself, your family and your
                  environment.
                </p>
                <p>
                  Art making is tactile and grounds you in the moment and provides a working meditation that can really
                  lift your spirit. We believe that anyone and everyone has the ability to draw and to make great art no
                  matter your age or training. Our teaching philosophy is to encourage creative thinking and problem
                  solving while teaching students to develop a rich visual aesthetic.
                </p>
                <p>
                  We design projects for kids and adults with an observational and process based approach to art making.
                  Students will be encouraged to draw from observation to learn how to see and develop a strong visual
                  vocabulary and at the same time take a process based approach with materials to expand the
                  possibilities of their art making.
                </p>
                <p>Be well, stay safe and make art!</p>
                <p className="cite">— Jena and the Arts Beacon team</p>
              </div>
              <a
                className="btn btn-small btn-primary"
                role="button"
                data-toggle="collapse"
                href="#summerExtended"
                aria-expanded="false"
                aria-controls="summerExtended"
              >
                Read more
              </a>
            </div>
          </div>
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
        <Container id="testimonials" fluid className="bg-grey">
          <h2 className="text-center">TESTIMONIALS</h2>
          <Carousel>
            <Carousel.Item>
              <Image src="img/testimonial-adamh.jpg" className="pull-left" roundedCircle />
              <h4>
                <em>
                  "I think I have found my inner artist using charcoal...
                  <br />
                  <br />I would have never known if it hadn't been for Jena."
                </em>
                <span>Adam Hawkins</span>
              </h4>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="img/testimonial-cat.jpg" className="pull-left" roundedCircle />
              <h4>
                <em>
                  "I ❤️ Arts Beacon. I don’t consider myself ‘arty’ but Jena made it awesome - her vibe of relaxed,
                  cheerful guidance encouraged me to have a wonderful time."
                </em>
                <span>Cat Jaffin</span>
              </h4>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="img/testimonial-kate.jpg" className="pull-left" roundedCircle />
              <h4>
                <em>
                  "I absolutely recommend Arts Beacon. Jena is wonderful with children, and I will not hesitate to send
                  my own children and clients to her!"
                </em>
                <span>Kate Drummond, OTR/L</span>
              </h4>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="img/testimonial-stacey.jpg" className="pull-left" roundedCircle />
              <h4>
                <em>
                  "My 50th birthday party at Arts Beacon was the best! Jena’s easygoing style of teaching made everyone
                  feel comfortable right from the start."
                </em>
                <span>Stacey Beth Shulman</span>
              </h4>
            </Carousel.Item>
          </Carousel>
        </Container>
        <Container id="about" fluid>
          <Row>
            <Col sm="7">
              <h2>About Jena</h2>
              <p>
                Jena Dost is a working artist with 16 years of teaching experience. She holds a BFA from the Atlanta
                College of Art (Now SCAD) and an MFA from Queens College CUNY with majors in Sculpture and Drawing. She
                also completed the 2 year ceramics assistant program at Callanwolde Arts Center. She was an associate
                professor Brenau University and Oglethorpe University holding classes in Sculpture, Drawing, Painting,
                3-D Design and Art Appreciation . She has taught classes, workshops and camps for preschool aged
                children through adult students at Callanwolde, Eyedrum, The Friends School, The Ormewood School and
                Grant Park Co-op.
              </p>
              <p>
                <a href="http://jenadost.com/">See Jena's work at jenadost.com</a>.
              </p>
            </Col>
            <Col sm={{ span: 3, offset: 1 }}>
              <Image src="img/jenaheadshot0.5x.jpg" alt="Jena Jones" roundedCircle />
            </Col>
          </Row>
        </Container>
        <Container id="contact" fluid className="bg-grey">
          <h2 className="text-center">CONTACT</h2>
          <Row>
            <Col sm="5">
              <p>Contact us for more information or if you have questions.</p>
              <address>
                <p>
                  <span className="glyphicon glyphicon-map-marker" /> 1039 Grant Street SE A-34 Atlanta, GA 30315
                </p>
                <p>
                  <span className="glyphicon glyphicon-envelope" />{' '}
                  <a href="mailto:contact@artsbeacon.com">contact@artsbeacon.com</a>
                </p>
                <p>
                  <i className="fa fa-facebook" />{' '}
                  <a href="https://www.facebook.com/artsbeacon">facebook.com/artsbeacon</a>
                </p>
                <p>
                  <i className="fa fa-instagram" />{' '}
                  <a href="https://www.instagram.com/artsbeacon">instagram.com/artsbeacon</a>
                </p>
              </address>
            </Col>
            <Col sm="7">
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
                    <button className="btn btn-default pull-right" type="submit">
                      Send
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
          <h2 className="text-center">CONNECT WITH US ON SOCIAL MEDIA</h2>
          <Row>
            <Col sm={{ span: 4, offset: 1 }}>Instagram posts here</Col>
            <Col sm={{ span: 4, offset: 2 }}>Facebook posts here</Col>
          </Row>
          <Row>
            <Social>
              {social.nodes.map((s, index) => (
                <Col data-name={`social-entry-${index}`} key={s.primary.label.text}>
                  <a href={s.primary.link.url}>{s.primary.label.text}</a>
                </Col>
              ))}
            </Social>
          </Row>
        </Container>

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
    homepage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        content: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
      }),
    }),
    social: PropTypes.shape({
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
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
    social: allPrismicHeroLinksBodyLinkItem {
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
