import { gql } from '@apollo/client'


export const ALL_POSTS_QUERY = gql`
  query{
    posts{
      content
      createdAt
      id
      published
      title
    }
  }
`

export const allPostsQueryVars = {
  skip: 0,
  first: 10,
}