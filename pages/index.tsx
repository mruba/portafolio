import type { NextPage } from "next";
import React from "react";
import { IHomeProps } from "types";
import PixelBox from "@components/pixel-box";
import GlitchEffect from "@components/glitch-effect";
import Head from "next/head";
import { Element } from "react-scroll";
import { ParallaxBanner } from "react-scroll-parallax";
import InteractiveResume from "@components/interactive-resume/interactive-resume";
import Image from "next/image";

const Home: NextPage<IHomeProps> = function () {
  return (
    <div className="relative">
      <Head>
        <title>Miguel Rubalcava Software Engineer</title>
      </Head>

      <section className="mx-auto md:h-screen min-h-screen flex justify-center flex-col items-start">
        <p className="text-sm md:text-base text-indigo ">
          Hey there! My name is
        </p>
        <GlitchEffect
          text="Miguel Rubalcava."
          className="text-2xl md:text-4xl text-pink  pt-5 leading-normal"
        />

        <p className="text-sm md:text-4xl text-grey-light  pt-5 leading-normal">
          I build stuff for the world wide web.
        </p>
        <p className="text-sm md:text-sm text-grey-light  pt-5 leading-normal">
          I'm a digital wizard! I wave my magic coding wand and poof a website
          appears. Okay, maybe it's not quite that easy, but I do have a knack
          for turning a bunch of random code into something beautiful and
          functional.
        </p>
        <PixelBox id="heading" className="mt-6 w-auto mt-12">
          <p className="p-2">Let's talk!</p>
        </PixelBox>
      </section>

      <Element
        name="about"
        className="element mx-auto md:h-screen min-h-screen flex justify-center flex-col items-start"
      >
        <h3 className="text-pink-light text-xl pb-8">About Me</h3>
        <div className="flex flex-col md:flex-row-reverse">
          <Image
            src="https://res.cloudinary.com/mruba-media/image/upload/c_crop,h_1000,w_1000,x_100,y_80/v1673202673/Miguel-47_mr5hcx.jpg"
            width={256}
            height={256}
            className="rounded-full m-8 md:w-64 md:h-64 md:ml-5"
            alt="Miguel Rubalcava Avatar"
          />

          <p className="text-grey-light text-sm leading-8 break-words">
            Hi there! My name is Miguel, and I am a skilled Software Engineer
            with a strong foundation in computer science.
            <br />
            After graduating in 2018, I have been passionate about using{" "}
            <span className="text-blue-light">web technologies</span> and{" "}
            <span className="text-blue-light">backend systems</span> to create
            high-quality platforms that prioritize{" "}
            <span className="text-blue-light">performance</span> and{" "}
            <span className="text-blue-light">user experience</span>.
            <br />
            <br />I have a lot of experience working on e-commerce projects,
            where I have developed a wide range of skills and have had the
            opportunity to work on all aspects of these platforms,{" "}
            <span className="text-blue-light">from design to deployment</span>.
            I am always looking for new challenges and opportunities to expand
            my expertise and grow as a SE.
          </p>
        </div>
      </Element>

      <Element
        name="experience"
        className="pt-24 md:pt-0 mx-auto md:h-screen min-h-screen flex justify-center flex-col items-start "
      >
        <h3 className="text-pink-light text-xl pb-12">Experience</h3>
        <InteractiveResume />
      </Element>

      <Element
        name="work"
        className="element mx-auto md:h-screen min-h-screen flex justify-center flex-col items-start"
      >
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
                  <h1 className="text-8xl text-white font-thin">WIP!</h1>
                </div>
              ),
            },
          ]}
          className="aspect-[2/1]"
        />
      </Element>

      <Element
        name="contact"
        className="element mx-auto  md:h-screen min-h-screen flex justify-center flex-col items-start"
      >
        <h3 className="text-pink-light text-xl pb-8">Contact</h3>
        <p className="text-grey-light text-sm leading-8 break-words">
          At this time, I'm not actively seeking new job opportunities but I'm
          always happy to help out where I can. If you're seeking career advice
          or have questions about the industry, feel free to reach out. I'll do
          my best to provide useful resources or insights.
        </p>
        <PixelBox
          id="heading"
          className="mt-6 w-auto mt-12"
          wrapperClassName="p-2"
        >
          <a
            href="mailto:mruba.dev@gmail.com"
            className="p-4"
            rel="noopener noreferrer"
            target="_blank"
          >
            Let's talk!
          </a>
        </PixelBox>
      </Element>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
