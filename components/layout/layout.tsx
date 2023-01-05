import * as React from "react";
import useTheme from "../useTheme";
import { useRouter } from "next/router";
import { CopyBlock } from "react-code-blocks";
import ToogleMode from "../color-mode-toggle";
interface ILayoutProps {
  children: React.ReactNode;
}

const GoBack = () => {
  const router = useRouter();
  return (
    <div
      className="sticky top-0 z-10 flex items-center"
      onClick={() => router.back()}
    >
      <div className="relative">
        <span>◀︎</span>
      </div>
      <p className="pl-4">Go back</p>
    </div>
  );
};

const Layout: React.FunctionComponent<ILayoutProps> = function (props) {
  useTheme();
  const router = useRouter();

  const isHomePage = router.pathname !== "/";

  return (
    <div className="dark:bg-black h-screen px-5 py-5 overflow-auto">
      {/* TODO: refactor this into a function to make it clean */}
      <div className="container mx-auto">
        <div className="relative h-12 text-pink text-xl dark:text-white cursor-pointer">
          {isHomePage && <GoBack />}
          {/* <ToogleMode className="absolute top-1/2 -translate-y-2/4 right-0" /> */}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
