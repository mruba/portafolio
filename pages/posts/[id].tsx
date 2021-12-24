import type { NextPage } from "next";
import React from "react";

import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { initializeApollo } from "../../apollo/client";

interface Iprops {}

const Posts: NextPage<Iprops> = function (props) {
  // const {
  //   data,
  // } = useQuery(AllPostQuery)
  // console.log(data)
  // const { theme, changeTheme } = useTheme();
  return (
    <div className="px-5 py-5">
      <p className="text-green-dark dark:text-pink text-4xl ">
        Posts Number {props.postId}
      </p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const client = initializeApollo();

  const { data } = await client.query({
    query: gql`
      query {
        posts {
          content
          createdAt
          id
          published
          title
        }
      }
    `,
  });

  console.log(data);
  return {
    props: {
      postId: params.id,
      initialApolloState: client.cache.extract(),
    },
  };
}

export default Posts;
