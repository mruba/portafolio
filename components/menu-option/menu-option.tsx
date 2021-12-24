import * as React from "react";
import { ImenuOption } from "types";
import classnames from "classnames";
import Link from "next/link";

const Icon = function (props: any) {
  return (
    <svg
      data-testid="icon"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <path d="M79 54.004v10h10v-10H79zm-40 0v10h10v-10H39zm0 40h20v10H39v-10zm50 0v10H69v-10h20zm0-60v-10h10v10H89zm-50 0h10v10h30v-10h10v10h10v10h10v10h10v30h-10v-20H99v20H89v-10H39v10H29v-20H19v20H9v-30h10v-10h10v-10h10v-10zm-10-10h10v10H29v-10z" />
    </svg>
  );
}

const MenuOption: React.FunctionComponent<ImenuOption> = function (props) {
  return (
    <Link href={props.href} key={props.id} passHref>
      <div
        className={classnames(
          "group cursor-pointer p-2 text-2xl text-center space-x-3 text-blue dark:text-indigo hover:text-red hover:animate-ping dark:hover:text-green "
        )}
      >
        <p className="inline-block relative ">
          {props.label}
          <Icon className="group-hover:animate-bounce opacity-0 group-hover:opacity-100  fill-current h-12 w-12 absolute -top-3 -left-16" />
        </p>
      </div>
    </Link>
  );
}

export default MenuOption;
