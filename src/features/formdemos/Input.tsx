import { ErrorMessage, Field} from "formik";
import React from "react";
import TextError from "./TextError";
type InputOwnProps = {
  children?: React.ReactNode;
  label: string;
  name: string;
};

 
type ReactInputProps = React.ComponentProps<"input">;

//take own props + non-colliding props from Reacts Input element
type InputProps = InputOwnProps & Omit<ReactInputProps, keyof InputOwnProps>;
const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <div className="form-control">
      <label htmlFor="name">{label}</label>
      <Field  id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
