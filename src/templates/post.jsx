import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from '../components'
import Categories from '../components/Listing/Categories'
import website from '../../config/website'

const Hero = styled.header`
  background-color: ${(props) => props.theme.colors.greyLight};
  padding-top: 1rem;
  padding-bottom: 4rem;
`

const Headline = styled.p`
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: ${(props) => props.theme.colors.grey};
  font-size: 1.25rem;
  a {
    font-style: normal;
    font-weight: normal;
  }
`

const PostWrapper = Wrapper.withComponent('main')

const Post = ({ data, location }) => {
  const prismicPost = data?.prismicPost
  const posts = data?.posts

  if (!prismicPost) {
    return (
      <Layout>
        <SEO title={`Post unavailable | ${website.titleAlt}`} pathname={location.pathname} />
        <Header />
        <PostWrapper id={website.skipNavId}>
          <Title style={{ marginTop: '4rem' }}>Post unavailable</Title>
        </PostWrapper>
      </Layout>
    )
  }

  const { data: postData } = prismicPost
  let categories = false
  if (postData.categories && postData.categories[0] && postData.categories[0].category) {
    categories = postData.categories.map((c) => c.category.document[0].data.name)
  }
  return (
    <Layout customSEO>
      <SEO
        title={`${postData.title.text} | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={postData.description}
        node={prismicPost}
        article
      />
      <Header />
      <Hero>
        <Wrapper>
          <Headline>
            {postData.date} — {categories && <Categories categories={categories} />}
          </Headline>
          <h1>{postData.title.text}</h1>
        </Wrapper>
      </Hero>
      <PostWrapper id={website.skipNavId}>
        <SliceZone allSlices={postData.body} />
        <Title style={{ marginTop: '4rem' }}>Recent posts</Title>
        <Listing posts={posts?.nodes || []} />
      </PostWrapper>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.object,
    posts: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
  location: PropTypes.object.isRequired,
}

Post.defaultProps = {
  data: null,
}
