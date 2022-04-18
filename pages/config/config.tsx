import React from "react";
import useTheme from "@components/useTheme";

import classNames from "classnames";

type Props = {};

const options = {
  theme: [
    {
      value: "dark",
      label: "Dark",
    },
    {
      value: "light",
      label: "Light",
    },
  ],
  lenguaje: ["es-MX", "en-US"],
};

function Config({}: Props) {
  const { theme: currentValue, changeTheme } = useTheme();

  const handleRadioChange = (e: any) => {
    changeTheme(e.target.value);
  };

  return (
    <div>
      {options.theme.map((option) => (
        <div key={option.value}>
          <input
            className="hidden"
            type="radio"
            name="mode"
            id={option.value}
            value={option.value}
            checked={currentValue === option.value}
            onChange={handleRadioChange}
          />
          <label
            htmlFor={option.value}
            className={classNames("dark:text-indigo text-blue", {
              "dark:text-green text-red": currentValue === option.value,
            })}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Config;
