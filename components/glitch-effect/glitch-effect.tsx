import React from "react";
import classnames from "classnames";
import styles from "./glitch-effect.module.css";

type Props = {
  text: string;
  className?: string;
};

const GlitchEffect = (props: Props) => {
  const { text, className } = props;
  const animationText = text.toUpperCase();
  return (
    <div className={classnames("group", className)}>
      <p
        data-animation-glitch={animationText}
        className={classnames(styles.glitch)}
      >
        {text}
      </p>
    </div>
  );
};

export default GlitchEffect;
