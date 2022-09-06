import * as React from "react";
import useTheme from "../useTheme";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: React.ReactNode;
}

const GoBack = () => {
  const router = useRouter();
  return (
    <div
      className="p-2 absolute top-0 left-0 text-pink text-xl flex items-center dark:text-white cursor-pointer"
      onClick={() => router.back()}
    >
      <span>◀︎</span>
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
      {isHomePage && <GoBack />}
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
};

export default Layout;
