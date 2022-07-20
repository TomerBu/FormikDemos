import React from "react";
import CheckBoxes from "./CheckBoxes";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import TextArea from "./TextArea";

type FormikControlProps = {
  control: "input" | "textarea" | "select" | "radio" | "checkbox" | "date";
  children?: React.ReactNode;
  label: string;
  name: string;
  type?: string;
  style?: React.CSSProperties;
};
const FormikControl = ({ control, ...rest }: any) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBoxes {...rest} />;
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
