import { gql } from "apollo-server-micro";

// A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.

// scalar DateTime

export const typeDefs = gql`
  type Mutation {
    createDraft(authorEmail: String!, data: PostCreateInput!): Post
    deletePost(id: Int!): Post
    incrementPostViewCount(id: Int!): Post
    signupUser(data: UserCreateInput!): User!
    togglePublishPost(id: Int!): Post
  }

  type Post {
    author: User
    content: String
    createdAt: String!
    updatedAt: DateTime!
    id: Int!
    published: Boolean!
    title: String!
  }

  input PostCreateInput {
    content: String
    title: String!
  }

  input PostOrderByUpdatedAtInput {
    updatedAt: SortOrder!
  }

  type Query {
    allUsers: [User!]!
    draftsByUser(userUniqueInput: UserUniqueInput!): [Post]
    posts: [Post!]!
    feed(
      orderBy: PostOrderByUpdatedAtInput
      searchString: String
      skip: Int
      take: Int
    ): [Post!]!
    postById(id: Int): Post
  }

  enum SortOrder {
    asc
    desc
  }

  type User {
    email: String!
    id: Int!
    name: String
    posts: [Post!]!
  }

  input UserCreateInput {
    email: String!
    name: String
    posts: [PostCreateInput!]
  }

  input UserUniqueInput {
    email: String
    id: Int
  }

  scalar DateTime
`;
