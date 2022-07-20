import React from "react";

type TextErrorProps = {
  children?: React.ReactNode;
};

const TextError = (props: TextErrorProps) => {
  return <div className="error">{props.children}</div>;
};

export default TextError;
