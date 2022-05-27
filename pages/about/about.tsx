import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import TimeLine from "@components/time-line";
import profilePic from "../../public/images/profile.png";

interface IProps {}

const About: NextPage<IProps> = function (props) {
  return (
    <div>
      <div className="float-left pr-6 py-4">
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
        University in 2018 with a major in Computer Science. My interests are in
        web technologies and engineering, and I love to create beautiful,
        performant products with fantastic user experiences. I have been mainly
        focusing on e-commerce during my career, and I have used all the hats in
        order to build an end to end experience commerce platform.
      </p>
      <TimeLine />
      {/* current location button with google maps pin */}
    </div>
  );
};

export default About;
