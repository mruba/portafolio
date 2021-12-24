import {  gql } from '@apollo/client'

export const getPosts = gql`  
query{
  posts{
    content
    createdAt
    id
    published
    title
  }
}`