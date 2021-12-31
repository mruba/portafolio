import * as React from "react";
import classNames from "classnames";
import timeLineItem from "./time-line-item";

export interface ITimeLineProps {}

const timeLine = [
  {
    id: "1",
    title: "First",
    description: "First description",
    tags: ["first", "first-tag", "first-tag-1", "first-tag-2"],
    workingPeriod: "2015 - 2017",
  },
  {
    id: "2",
    title: "Second",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    tags: ["first", "first-tag", "first-tag-1", "first-tag-2"],
    workingPeriod: "2015 - 2017",
  },
  {
    id: "3",
    title: "Third",
    description: "Third description",
    tags: ["first", "first-tag", "first-tag-1", "first-tag-2"],
    workingPeriod: "2015 - 2017",
  },
  {
    id: "4",
    title: "Fourth",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    tags: ["first", "first-tag", "first-tag-1", "first-tag-2"],
    workingPeriod: "2015 - 2017",
  },
  {
    id: "5",
    title: "Second",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    tags: ["first", "first-tag", "first-tag-1", "first-tag-2"],
    workingPeriod: "2015 - 2017",
  },
  {
    id: "6",
    title: "Second",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    tags: ["first", "first-tag", "first-tag-1", "first-tag-2"],
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
