import { useState, useEffect, useRef, createRef } from "react";
import useTheme from "../useTheme";
import { useRouter } from "next/router";
import { CopyBlock } from "react-code-blocks";
import ToogleMode from "../color-mode-toggle";
import classNames from "classnames";
import debounce from "lodash/debounce";
import { Link } from "react-scroll";

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

const Navigation: React.FC = function (props) {
  const scrollPosition = useRef(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    // const currentScrollPosition = window.scrollY
    const currentScrollPosition = 0;
    setVisible(
      currentScrollPosition < scrollPosition.current ||
        currentScrollPosition < 100
    );
    console.log(currentScrollPosition, scrollPosition.current);
    scrollPosition.current = currentScrollPosition;
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100, { maxWait: 200 });
    window.addEventListener("scroll", debouncedHandleScroll, true);
    return () =>
      window.removeEventListener("scroll", debouncedHandleScroll, true);
  }, []);

  return (
    <ul
      className={classNames(
        "z-50 justify-end items-center text-xs flex text-white  h-14 sticky top-0 transition ease-in-out delay-150 duration-300",
        { "-translate-y-14": !visible }
      )}
    >
      <li className="px-4">
        <Link
          to="about"
          className="cursor-pointer"
          activeClass="text-pink"
          spy
          smooth
          duration={500}
        >
          About
        </Link>
      </li>
      <li className="px-4">
        <Link
          to="experience"
          className="cursor-pointer"
          activeClass="text-pink"
          spy
          smooth
          duration={500}
        >
          Experience
        </Link>
      </li>
      <li className="px-4">
        <Link
          to="work"
          className="cursor-pointer"
          activeClass="text-pink"
          spy
          smooth
          duration={500}
        >
          Work
        </Link>
      </li>
      <li className="px-4">
        <Link
          to="contact"
          className="cursor-pointer"
          activeClass="text-pink"
          spy
          smooth
          duration={500}
        >
          Contact
        </Link>
      </li>
      <li className="px-4">Resume</li>
    </ul>
  );
};

const Layout: React.FunctionComponent<ILayoutProps> = function (props) {
  useTheme();
  const router = useRouter();

  const isHomePage = router.pathname !== "/";

  return (
    <div className="dark:bg-black px-5 py-5">
      <Navigation />
      {/* TODO: refactor this into a function to make it clean */}
      <div className="container mx-auto 2xl:max-w-5xl">
        {/* <div className="relative h-12 text-pink text-xl dark:text-white cursor-pointer"> */}
        {/* {isHomePage && <GoBack />} */}
        {/* <ToogleMode className="absolute top-1/2 -translate-y-2/4 right-0" /> */}
        {/* </div> */}
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
