import type { NextPage } from "next";
import React from "react";

import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { initializeApollo } from "../../apollo/client";

interface Iprops {
  posts: any[];
}

const Posts: NextPage<Iprops> = function (props) {
  // const {
  //   data,
  // } = useQuery(AllPostQuery)
  // console.log(data)
  // const { theme, changeTheme } = useTheme();
  return (
    <div className="px-5 py-5">
      <div className="space-y-3 bg-blue-light dark:bg-green-light text-center space-y-2 p-6 border-solid border-8 border-white mb-16">
        <p className="text-white text-xl">hi, my name is</p>
        <p className="text-green-dark dark:text-pink text-4xl ">Miguel</p>

        {/* <div className="h-40 w-40 m-auto">
          <Image src={profilePic} alt="Picture of the Miguel Rubalcava" />
        </div> */}
      </div>
      {props.posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id} passHref>
          <p className="text-green-dark"> {post.title}</p>
        </Link>
      ))}
      {/* <button onClick={() => {
        if (theme === 'dark') {
          changeTheme('light')
        } else {
          changeTheme('dark')
        }

      }}>Click me</button> */}
    </div>
  );
};

export async function getServerSideProps() {
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
      posts: data.posts,
      initialApolloState: client.cache.extract(),
    },
  };
}

export default Posts;
