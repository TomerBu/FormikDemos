import { Formik, Form, FormikHelpers, FormikProps } from "formik";
import { type } from "os";
import * as Yup from "yup";
import CheckBoxes from "./CheckBoxes";
import "./FormContainer.scss";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import TextArea from "./TextArea";
type FContainerValues = {
  email: string;
  comments: string;
  toppics: string;
  radioOption: string;
  checkboxOption: string[];
};
const initialValues = {
  email: "",
  comments: "",
  toppics: "",
  radioOption: "",
  checkboxOption: Array<string>(),
};
const schema = Yup.object({
  email: Yup.string().required("Required").email("Email must be valid"),
  comments: Yup.string().required("Required").min(3, "at least 3"),
  toppics: Yup.string().required("Required"),
  radioOption: Yup.string().required("Required"),
  checkboxOption: Yup.array()
    .of(Yup.string())
    .min(1, "at least 1")
    .required("Required"),
});

const selectOptions = [
  {
    key: "Select an option",
    value: "",
  },
  {
    key: "HTML",
    value: "html",
  },
  {
    key: "Css",
    value: "css",
  },
  {
    key: "Js",
    value: "js",
  },
];

const radioOptions = [
  {
    key: "HTML",
    value: "html",
  },
  {
    key: "Css",
    value: "css",
  },
  {
    key: "Js",
    value: "js",
  },
];

const checkboxOptions = [
  {
    key: "HTML",
    value: "html",
  },
  {
    key: "Css",
    value: "css",
  },
  {
    key: "Js",
    value: "js",
  },
];
const onSubmit = (
  values: FContainerValues,
  props: FormikHelpers<FContainerValues>
) => {
  console.log(values);
};

const FormContainer = () => {
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={schema}
      initialValues={initialValues}
    >
      {(props: FormikProps<FContainerValues>) => (
        <Form>
          <Input
            name="email"
            label="email"
            type="email"
            style={{ color: "orange" }}
          />
          <Select name="toppics" label="Toppics" options={selectOptions} />
          <TextArea label="Comments" name="comments" rows={10}></TextArea>

          <RadioButtons
            style={{ boxShadow: "1px 1px 8px 8px red" }}
            label="Radio Options"
            name="radioOption"
            options={radioOptions}
          />
          <CheckBoxes
            label="Checkbox Options"
            name="checkboxOption"
            options={checkboxOptions}
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
