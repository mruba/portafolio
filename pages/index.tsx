import type { NextPage } from "next";
import React, { useEffect } from "react";
import Menu from "@components/menu";
import MenuOption from "@components/menu-option";
import { IHomeProps } from "types";
import Astronaut from "@components/astronaut";
import PixelBox from "@components/pixel-box";
import GlitchEffect from "@components/glitch-effect";
import Head from "next/head";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const Home: NextPage<IHomeProps> = function ({ options }) {
  return (
    <div className="relative">
      <Head>
        <title>Miguel Rubalcava Software Engineer</title>
      </Head>
      {/* better to keep pixelbox decouple from container so I can pass down styles */}
      {/* mt-8 mb-16 */}
      <section className="mx-auto  h-screen min-h-screen flex justify-center flex-col items-start">
        <p className="text-indigo text-base">Hey there! My name is</p>

        {/* <div className="flex"> */}
        {/* hidden absolute bottom-0 left-1/3 -translate-x-1/2   h-72 w-auto sm:block */}
        {/* <Astronaut className=" h-72 shrink-0  w-32" /> */}

        {/* <div> */}
        <GlitchEffect
          text="Miguel Rubalcava."
          className="text-pink text-4xl pt-5 leading-normal"
        />

        {/* <p className="text-white text-4xl pt-5 leading-normal">Miguel Rubalcava.</p> */}
        <p className="text-grey-light text-4xl pt-5 leading-normal">
          I build stuff for the world wide web.
        </p>
        <p className="text-grey-light text-sm pt-5 leading-normal">
          I&apos;m a digital wizard! I wave my magic coding wand and poof a
          website appears. Okay, maybe it&apos;s not quite that easy, but I do
          have a knack for turning a bunch of random code into something
          beautiful and functional.
        </p>
        <PixelBox id="heading" className="mt-6 w-auto mt-12">
          <p className="p-2">Let&apos;s talk!</p>
        </PixelBox>
        {/* </div> */}

        {/* </div> */}

        {/* <PixelBox id="heading" className="p-6 space-y-2"> */}

        {/* </PixelBox> */}
      </section>

      <Element
        name="about"
        className="element mx-auto  h-screen min-h-screen flex justify-center flex-col items-start"
      >
        <p className="text-white">About</p>
      </Element>

      <Element
        name="experience"
        className="element mx-auto  h-screen min-h-screen flex justify-center flex-col items-start"
      >
        <p className="text-white">Experience</p>
      </Element>

      <Element
        name="work"
        className="element mx-auto  h-screen min-h-screen flex justify-center flex-col items-start"
      >
        {/* <ParallaxBanner
          layers={[
            { image: 'https://res.cloudinary.com/mruba-media/image/upload/v1672994806/bg-parallax_ormper.jpg', speed: -20 },
            { image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png', speed: -10 },
          ]}
          className="aspect-[2/1]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">Hello World!</h1>
          </div>
        </ParallaxBanner> */}

        <ParallaxBanner
          layers={[
            {
              image:
                "https://res.cloudinary.com/mruba-media/image/upload/v1672994806/bg-parallax_ormper.jpg",
              speed: -20,
            },
            {
              speed: -15,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-8xl text-white font-thin">
                    Hello World!
                  </h1>
                </div>
              ),
            },
            // { image: '/static/banner-foreground.png', speed: -10 },
          ]}
          className="aspect-[2/1]"
        />
      </Element>

      <Element
        name="contact"
        className="element mx-auto  h-screen min-h-screen flex justify-center flex-col items-start"
      >
        <p className="text-white">Contact</p>
      </Element>

      <Menu
        className="space-y-2"
        options={options}
        optionComponent={MenuOption}
      />

      <p>
        {/* big loremp ipsum */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        nunc euismod, aliquam nisl nec, aliquam nisl. Nulla facilisi. Sed
        tincidunt, nunc ut aliquam aliquam, nunc nisl aliquam nisl, nec
        consectetur nunc nisl nec nunc. Nulla facilisi. Sed tincidunt, nunc ut
        aliquam aliquam, nunc nisl aliquam nisl, nec consectetur nunc nisl nec
        nunc. Nulla facilisi. Sed tincidunt, nunc ut aliquam aliquam, nunc nisl
        aliquam nisl, nec consectetur nunc nisl nec nunc. Nulla facilisi. Sed
        tincidunt, nunc ut aliquam aliquam, nunc nisl aliquam nisl, nec
        consectetur nunc nisl nec nunc. Nulla facilisi. Sed tincidunt, nunc ut
        aliquam aliquam, nunc nisl aliquam nisl, nec consectetur nunc nisl nec
        nunc. Nulla facilisi. Sed tincidunt, nunc ut aliquam aliquam, nunc nisl
        aliquam nisl, nec consectetur nunc nisl nec nunc. Nulla facilisi. Sed
        tincidunt, nunc ut aliquam aliquam, nunc nisl aliquam nisl, nec
        consectetur nunc nisl nec nunc. Nulla facilisi. Sed tincidunt, nunc ut
        aliquam aliquam, nunc nisl aliquam nisl, nec consectetur nunc nisl nec
        nunc. Nulla facilisi. Sed tincidunt, nunc ut aliquam aliquam, nunc nisl
        aliquam nisl, nec consectetur nunc nisl nec nunc. Nulla facilisi. Sed
        tincidunt, nunc ut aliquam aliquam, nunc nisl aliquam nisl, nec
        consectetur nunc nisl nec nunc. Nulla facilisi. Sed tincidunt, nunc ut
      </p>
    </div>
  );
};

const options = [
  { id: 0, label: "About Me", href: "/about" },
  { id: 3, label: "Configs", href: "/config" },
  { id: 4, label: "Social", href: "/social-media" },
];

Home.defaultProps = {
  options,
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
