import * as React from "react";
import useTheme from "../useTheme";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = function (props) {
  useTheme();

  return (
    <div className="dark:bg-black  h-screen">
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
};

export default Layout;
