import { FunctionComponent } from "react";
import { ImenuOption } from "types";
import classnames from "classnames";
import Link from "next/link";
import styles from "./menu-option.module.css";

const MenuOption: FunctionComponent<ImenuOption> = function ({
  label,
  id,
  href,
}) {
  const animationText = label.toUpperCase();
  return (
    <Link href={href} key={id} passHref>
      <div
        className={classnames(
          "relative group cursor-pointer p-2 text-2xl text-center space-x-3 text-blue dark:text-indigo hover:text-red dark:hover:text-green"
        )}
      >
        <p
          data-animation-glitch={animationText}
          className={classnames(styles.glitch, "inline-block relative")}
        >
          {label}
        </p>
      </div>
    </Link>
  );
};

export default MenuOption;
