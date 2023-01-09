import React, { ReactElement } from "react";
import classnames from "classnames";
import styles from "./pixel-box.module.css";

interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
  wrapperClassName?: string;
  id?: string;
}

export default function pixelateContainer({
  className,
  wrapperClassName,
  children,
  id,
}: Props): ReactElement {
  return (
    <div id={id} className={classnames(styles.container, className)}>
      <div className={classnames(styles.wrapper, wrapperClassName)}>
        {children}
      </div>
    </div>
  );
}
