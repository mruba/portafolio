import * as React from "react";
import useTheme from "../useTheme";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = function (props) {
  useTheme();
  const router = useRouter();

  return (
    <div className="dark:bg-black h-screen px-5 py-5 overflow-auto">
      {/* TODO: refactor this into a function to make it clean */}
      {router.pathname !== "/" && (
        <div
          className="text-pink text-xl flex items-center dark:text-white cursor-pointer"
          onClick={() => router.back()}
        >
          <span className="h-10">◀︎</span>
          <p className="pl-4">Go back</p>
        </div>
      )}
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
};

export default Layout;
