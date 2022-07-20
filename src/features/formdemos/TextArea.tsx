import React from "react";
import TextError from "./TextError";
import { Field, ErrorMessage } from "formik";
type TextAreaOwnProps = {
  label: string;
  name: string;
  children?: React.ReactNode;
};
type ReactTextAreaProps = React.ComponentProps<"textarea">;

type TextAreaProps = TextAreaOwnProps &
  Omit<ReactTextAreaProps, keyof TextAreaOwnProps>;

const TextArea = ({ label, name, ...rest }: TextAreaProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
