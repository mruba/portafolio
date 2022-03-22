import * as React from "react";
import classNames from "classnames";
import timeLineItem from "./time-line-item";

export interface ITimeLineProps {}

const timeLine = [
  {
    id: "1",
    title: "Web Developer",
    description:
      "I started my career as a web developer in the early days of my university career. I worked on a variety of projects, from small to large, and I learned a lot about the different types of development I could do.",
    tags: ["php", "MySQL", "javascrip", "c#", "jquery"],
    workingPeriod: "2013 - 2014",
  },
  {
    id: "2",
    title: "Web Developer",
    description:
      "I worked on a variety of projects but mainly focused on E-commerce frontend.",
    tags: [
      "Ruby on Rails",
      "Angular",
      "Ionic",
      "MongoDB",
      "Capistrano",
      "Solr",
      "Nginx",
      "Chef",
    ],
    workingPeriod: "2015 - 2016",
  },
  {
    id: "3",
    title: "Web Developer",
    description:
      "Still working on E-commerce, but I am now focusing on services and API's.",
    tags: ["Nodejs", "RoR", "AWS", "Jenkins", "Redis"],
    workingPeriod: "2016 - 2017",
  },
  {
    id: "4",
    title: "React Native Developer",
    description:
      "Working on a React Native project for the same E-commerce company, I was able to learn a lot about React.",
    tags: ["react", "web-pack", "rabitMQ", "redux", "redux-saga"],
    workingPeriod: "2015 - 2017",
  },
  {
    id: "5",
    title: "Software Engineer",
    description:
      "Leading a team of developers on a project for a new company, I was able to learn a lot about the different types of development I could do.",
    tags: ["React"],
    workingPeriod: "2015 - 2017",
  },
];

interface Props {}

export default function TimeLine(props: ITimeLineProps) {
  return (
    <div className="py-12 sm:mx-auto">
      <div className="relative text-gray-800 text-sm font-semibold space-y-16 sm:space-y-12">
        <div className="hidden sm:block w-3 bg-blue absolute h-full left-1/2 transform -translate-x-1/2"></div>
        {timeLine.map(timeLineItem)}
      </div>
    </div>
  );
}
