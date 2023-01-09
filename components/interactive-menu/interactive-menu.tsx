import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import debounce from "lodash/debounce";
import { Link } from "react-scroll";

type Props = {
  hideOnScroll?: boolean;
};

const Navigation: React.FC<Props> = function (props) {
  const { hideOnScroll } = props;
  const scrollPosition = useRef(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setVisible(
      currentScrollPosition < scrollPosition.current ||
        currentScrollPosition < 100
    );
    scrollPosition.current = currentScrollPosition;
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100, { maxWait: 200 });
    if (hideOnScroll) {
      window.addEventListener("scroll", debouncedHandleScroll, true);
    }
    return () => {
      if (hideOnScroll) {
        window.removeEventListener("scroll", debouncedHandleScroll, true);
      }
    };
  }, []);

  const sections = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Work", id: "work" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <ul
      className={classNames(
        "text-[0.65rem] md:text-xs z-50 justify-end items-center  flex text-white  h-14 sticky top-0 transition ease-in-out delay-150 duration-300 backdrop-blur-sm bg-black bg-opacity-50 shadow-md",
        { "-translate-y-14": !visible }
      )}
    >
      {sections.map((section) => (
        <li className="" key={section.id}>
          <Link
            to={section.id}
            className="cursor-pointer p-2 md:p-4"
            activeClass="text-pink"
            spy
            smooth
            duration={500}
          >
            {section.name}
          </Link>
        </li>
      ))}
      <li className="hidden md:block px-4">Resume</li>
    </ul>
  );
};

Navigation.defaultProps = {
  hideOnScroll: false,
};

export default Navigation;
