import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

type SelectOwnProps = {
  children?: React.ReactNode;
  label: string;
  name: string;
  //   array of key value pairs:
  options: { key: string; value: string }[];
};
type ReactSelectProps = React.ComponentProps<"select">;

type SelectProps = SelectOwnProps &
  Omit<ReactSelectProps, keyof SelectOwnProps>;

const Select = ({ name, label, options, ...rest }: SelectProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} as="select" {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
