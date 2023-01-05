import React from "react";
import clsx from "classnames";
import IconLightMode from "../Icon/LightMode";
import IconDarkMode from "../Icon/DarkMode";
import useTheme, { ThemeType } from "@components/useTheme";

import styles from "./styles.module.css";

type Props = {
  className?: string;
};

function ColorModeToggle({ className }: Props): JSX.Element {
  const { theme: currentValue, changeTheme } = useTheme();

  const onChangeTheme = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    changeTheme(currentValue === "dark" ? "light" : "dark");
  };

  return (
    <div className={clsx(className)}>
      <button
        className={clsx(styles.toggleButton, "p-2")}
        type="button"
        onClick={(e) => onChangeTheme(e)}
        title={""}
        aria-label={""}
        aria-live="polite"
      >
        <p className="hidden text-white dark:block">Light Mode</p>
        <p className="dark:hidden">Dark Mode</p>
      </button>
    </div>
  );
}

export default React.memo(ColorModeToggle);
