import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export default function blogPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return <div>Blog</div>;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}
