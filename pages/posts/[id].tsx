import type { NextPage } from "next";
import React from "react";

import { gql } from "@apollo/client";
// import Link from "next/link";
import { initializeApollo } from "../../apollo/client";

interface Iprops {
  postId: string;
}

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

export async function getServerSideProps({ params }: any) {
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

  return {
    props: {
      postId: params.id,
      initialApolloState: client.cache.extract(),
    },
  };
}

export default Posts;
