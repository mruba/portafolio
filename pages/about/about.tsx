import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import profilePic from "../../public/images/profile.png";

interface IProps {}

const About: NextPage<IProps> = function (props) {
  return (
    <div>
      <Image
        src={profilePic}
        width={150}
        height={150}
        className="rounded-full"
        alt="Picture of the author"
      />
      <p className="text-pink">this is about page</p>
    </div>
  );
};

export default About;
