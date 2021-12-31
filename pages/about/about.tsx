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
          src={profilePic}
          width={150}
          height={150}
          className="rounded-full"
          alt="Picture of the author"
        />
      </div>
      <h1 className="text-white py-3">About Me</h1>
      <p className="text-pink leading-7 break-all">
        Lorem ipsum dolor sit amet, vel te sumo definitionem, incorrupte
        interesset in duo, facete voluptua appetere et mel. At mei apeirian
        eleifend. Fabulas elaboraret ea sed. Prodesset appellantur delicatissimi
        qui te, amet primis laboramus mel in. Eos ei eros nemore necessitatibus,
        amet forensibus instructior est no. Lorem ipsum dolor sit amet, vel te
        sumo definitionem, incorrupte interesset in duo, facete voluptua
        appetere et mel. At mei apeirian eleifend. Fabulas elaboraret ea sed.
        Prodesset appellantur delicatissimi qui te, amet primis laboramus mel
        in. Eos ei eros nemore necessitatibus, amet forensibus instructior est
        no.
      </p>
      <TimeLine />
      {/* current location button with google maps pin */}
    </div>
  );
};

export default About;
