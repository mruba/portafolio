import React from "react";
import useTheme from "@components/useTheme";

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

function Config({}: Props) {
  const { theme: currentValue, changeTheme } = useTheme();

  const handleRadioChange = (e: any) => {
    changeTheme(e.target.value);
  };

  return (
    <div>
      <div className="absolute top-[50%] right-[50%] translate-x-2/4">
        {configs.theme.values.map((config) => (
          <div key={config.value}>
            <input
              className="hidden"
              type="radio"
              name="mode"
              id={config.value}
              value={config.value}
              checked={currentValue === config.value}
              onChange={handleRadioChange}
            />
            <label
              htmlFor={config.value}
              className={classNames("dark:text-indigo text-xl text-blue", {
                "dark:text-green text-red": currentValue === config.value,
              })}
            >
              {config.label}
            </label>
          </div>
        ))}
      </div>
      <Link href="/" passHref>
        <div className="cursor-pointer text-xl text-blue dark:text-indigo hover:text-red dark:hover:text-green">
          <p>Go Home</p>
        </div>
      </Link>
    </div>
  );
}

export default Config;
