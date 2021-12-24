import gql from "graphql-tag"

export const AllPostQuery = gql`
  query AllPostQuery{
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