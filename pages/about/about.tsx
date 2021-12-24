import type { NextPage } from "next";
import React from "react";

interface IProps {}

const About: NextPage<IProps> = (props) => {
  return (
    <div>
      <p className="text-pink">this is about page</p>
    </div>
  );
};

export default About;
