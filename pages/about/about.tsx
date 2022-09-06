/* eslint-disable react/no-unescaped-entities */
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
        University in 2018 with a major in Computer Science. I'm passionate
        about web technologies, and I love to create beautiful, performant user
        interfaces with fantastic UX. I have mainly focused on e-commerce during
        my career, and I have used all the hats to build end-to-end experience
        commerce platforms.
      </p>
      <TimeLine />
      {/* current location button with google maps pin */}
    </div>
  );
};

export default About;
