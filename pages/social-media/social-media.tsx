import React from "react";
import classNames from "classnames";
import Link from "next/link";

type Props = {};

const configs = {
  theme: {
    label: "Theme",
    values: [
      {
        value: "dark",
        label: "Dark",
      },
      {
        value: "light",
        label: "Light",
      },
    ],
  },
  lenguaje: ["es-MX", "en-US"],
};

function SocialMedia({}: Props) {
  return (
    <div className="absolute top-[50%] right-[50%] translate-x-2/4">
      <ul>
        <li className="pb-3">
          <a
            href="https://www.linkedin.com/in/mrubalcava/"
            className="text-green-dark dark:text-white text-xl "
          >
            Linkedin
          </a>
        </li>
        <li className="pb-3">
          <a
            href="https://github.com/mruba"
            className="text-green-dark dark:text-white text-xl "
          >
            Github
          </a>
        </li>
        <li className="pb-3">
          <a
            href="https://twitter.com/mark_gram"
            className="text-green-dark dark:text-white text-xl "
          >
            Twitter
          </a>
        </li>
        <li className="pb-3">
          <a
            href="mailto:mruba.dev@gmail.com"
            className="text-green-dark dark:text-white text-xl "
          >
            Email
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
