import { ErrorMessage, Field, FieldProps } from "formik";
import React from "react";
import TextError from "./TextError";

type RadioButtonsOwnProps = {
  label: string;
  name: string;
  options: { key: string; value: string }[];
  children?: React.ReactNode;
};

type ReactInputProps = React.ComponentProps<"input">;

type RadioButtonsProps = RadioButtonsOwnProps &
  Omit<ReactInputProps, keyof RadioButtonsOwnProps>;
const RadioButtons = ({ name, label, options, ...rest }: RadioButtonsProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form, meta }: FieldProps<string>) => {
          return options.map((option) => (
            <React.Fragment key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                {...rest}
                // after the spread gives a value-> override it
                value={option.value}
                checked={field.value === option.value}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default RadioButtons;