import type { NextPage } from "next";
import React, { useEffect } from "react";
import Menu from "@components/menu";
import MenuOption from "@components/menu-option";
import useTheme from "@components/useTheme";
import { IHomeProps } from "types";
import Astronaut from "@components/astronaut";
import PixelBox from "@components/pixel-box";

const Home: NextPage<IHomeProps> = function ({ options }) {
  const { theme: _theme, changeTheme } = useTheme();
  useEffect(() => {
    changeTheme("dark");
  });
  return (
    <div className="relative">
      {/* better to keep pixelbox decouple from container so I can pass down styles */}
      <div className="flex max-w-3xl text-center mx-auto mt-8 mb-16">
        <PixelBox id="heading" className="p-9">
          <p className="text-white text-xl">Hi, my name is</p>
          <p className="text-green-dark dark:text-white text-4xl ">Miguel</p>
        </PixelBox>
      </div>

      <Menu
        className="space-y-2"
        options={options}
        optionComponent={MenuOption}
      />

      <Astronaut className="hidden absolute bottom-0 left-2/4 -translate-x-full pr-28  h-72 w-auto sm:block" />
    </div>
  );
};

const options = [
  { id: 0, label: "About Me", href: "/about" },
  { id: 1, label: "Projects", href: "/who" },
  { id: 2, label: "Blog", href: "/posts" },
  { id: 3, label: "Configs", href: "/who" },
  { id: 4, label: "Social", href: "/who" },
];

Home.defaultProps = {
  options,
};

export default Home;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
