import { ErrorMessage, Field, FieldProps } from "formik";
import React from "react";
import TextError from "./TextError";

type CheckBoxesOwnProps = {
  label: string;
  name: string;
  options: { key: string; value: string }[];
  children?: React.ReactNode;
};

type ReactInputProps = React.ComponentProps<"input">;

type CheckBoxesProps = CheckBoxesOwnProps &
  Omit<ReactInputProps, keyof CheckBoxesOwnProps>;
const CheckBoxes = ({ name, label, options, ...rest }: CheckBoxesProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form, meta }: FieldProps<string[]>) => {
          return options.map((option) => (
            <React.Fragment key={option.key}>
              <input
                type="checkbox"
                id={option.value}
                {...field}
                {...rest}
                // after the spread gives a value-> override it
                value={option.value}
                checked={field.value.includes(option.value)}
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

export default CheckBoxes;
