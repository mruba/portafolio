import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import TimeLine from "@components/time-line";
import profilePic from "../../public/images/profile.png";

interface IProps {}

const About: NextPage<IProps> = function (props) {
  return (
    <div>
      <div className="float-left px-6 py-4">
        <Image
          src="/v1641355639/mike-avatar_ho5f3k.png"
          width={150}
          height={150}
          className="rounded-full"
          alt="Picture of the author"
        />
      </div>
      <h1 className="text-white py-3">About Me</h1>
      <p className="text-pink leading-7 break-words">
        Hello, my name is Miguel, and I am a software engineer. I graduated from
        UP CDMX 2018 with a degree in Computer Science. My interests are in web
        technologies and engineering, and I love to create beautiful, performant
        products with fantastic user experiences. I previously worked at a
        well-established E-commerce company where I led the early stages and
        maturity of the platform. I build the project with another four
        engineers over nine months on a Angular and RoR stack.
      </p>
      <TimeLine />
      {/* current location button with google maps pin */}
    </div>
  );
};

export default About;
