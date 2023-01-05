import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useState, useEffect, Fragment } from "react";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import path from "path";
import { promises as fs } from "fs";
import { CopyBlock, dracula } from "react-code-blocks";
import Children from "react-children-utilities";

export default function Page({
  code,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [mdxModule, setMdxModule] = useState<any>();
  const Content = mdxModule ? mdxModule.default : Fragment;
  useEffect(() => {
    (async () => {
      setMdxModule(await run(code, runtime));
    })();
  }, [code]);

  const components = {
    h1: (props: any) => <h1 className="text-4xl text-black" {...props} />,
    // pre: ({ children }: any) => {
    //   const code = Children.onlyText(children);
    //   return (
    //     <CopyBlock
    //       text={code}
    //       language="typescript"
    //       showLineNumbers
    //       startingLineNumber
    //       theme={dracula}
    //       codeBlock
    //     />
    //   );
    // },
  };
  return (
    <div className="space-y-6">
      <Content />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { id } = ctx.query;

  const dir = `lib/md-docs/${id}.md`.toString();
  const postsDirectory = path.join(process.cwd(), dir);

  try {
    const fileContents = await fs.readFile(postsDirectory, "utf8");
    const code = String(
      await compile(fileContents, {
        outputFormat: "function-body" /* …otherOptions */,
        development: false,
      })
    );
    return { props: { code } };
  } catch (err) {
    throw new Error("Error during mdx compile");
  }
}
