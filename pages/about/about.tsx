import React from "react";
import type { NextPage } from "next";

interface IProps { }

const About: NextPage<IProps> = function (props) {
  return (
    <div>
      <p className="text-pink">this is about page</p>
    </div>
  );
}

export default About;
