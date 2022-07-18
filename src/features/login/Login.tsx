import styles from "./Login.module.scss";
import {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  FieldArrayRenderProps,
  FieldProps,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
  FormikState,
} from "formik";
import * as Yup from "yup";
import FormErrorLabel from "./FormErrorLabel";
import { useEffect, useState } from "react";

interface FormValues {
  username: string;
  email: string;
  password: string;
  address: string;
  social: {
    facebook: string;
    twitter: string;
  };
  phoneNumbers: Array<string>;
}

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid Email"),
  password: Yup.string()
    .required("Required")
    .min(3, "Must contain at least 3 characters"),
});

const onSubmit = (values: FormValues, props: FormikHelpers<FormValues>) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done submitting");
    }, 1000);
  }).then(() => {
    props.setSubmitting(false);
    props.resetForm();
  });
};

const initialValues = {
  username: "",
  email: "",
  password: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: new Array<string>(""),
};





const validateAddress = (value: string) => {
  let error;
  if (value.length === 0) {
    error = "required";
  } else if (value.length < 2) {
    error = "address must contain at least 2 characters";
  }
  return error;
};

const savedData = {
  username: "TomerBu",
  email: "TomerBu@gmail.com",
  password: "123456789",
  address: "abc street",
  social: {
    facebook: "fb",
    twitter: "tw",
  },
  phoneNumbers: new Array<string>("0505050500"),
};

const Login = () => {
  const [savedState, setSavedState] = useState<FormValues | undefined>(undefined);

  useEffect(() => {
    const handle = setTimeout(() => {
      setSavedState(savedData);
    }, 1000);
    return () => {
      clearTimeout(handle);
    };
  }, []);
  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      //validate
      initialValues={savedState || initialValues}
      onSubmit={onSubmit}
    >
      {(props: FormikProps<FormValues>) => {
        return (
          <Form className={styles["login-form"]}>
            <section className={styles["form-group"]}>
              <label htmlFor="username">User Name</label>
              <Field
                autoComplete="username"
                type="text"
                name="username"
                id="username"
              />

              <ErrorMessage name="username">
                {(msg) => <div className={styles.error}>{msg}</div>}
              </ErrorMessage>
            </section>

            <section className={styles["form-group"]}>
              <label htmlFor="email">User Email</label>
              <Field
                autoComplete="email"
                type="email"
                name="email"
                id="email"
              />
              <ErrorMessage name="email" />
            </section>

            <section className={styles["form-group"]}>
              <label htmlFor="password">Password</label>
              <Field
                autoComplete="current-password"
                type="password"
                name="password"
                id="password"
              />
              <ErrorMessage name="password" component={FormErrorLabel} />
            </section>

            <section className={styles["form-group"]}>
              <label htmlFor="address">Address</label>
              <Field name="address" validate={validateAddress}>
                {(props: FieldProps) => {
                  const {
                    field /* { name, value, onChange, onBlur }*/,
                    form /*{ touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc. */,
                    meta /*value error touched initialValue */,
                  } = props;
                  return (
                    <div>
                      <input id="address" {...field} />
                      {meta.touched && meta.error && <div>{meta.error}</div>}
                    </div>
                  );
                }}
              </Field>
            </section>

            <section className={styles["form-group"]}>
              <label htmlFor="facebook">Facebook</label>
              <Field type="text" name="social.facebook" id="facebook" />
            </section>

            <section className={styles["form-group"]}>
              <label htmlFor="twitter">Twitter</label>
              <Field type="text" name="social.twitter" id="twitter" />
            </section>

            <section className={styles["form-group"]}>
              <label>Phone Numbers List</label>
              <FieldArray name="phoneNumbers">
                {({
                  form: {
                    values: { phoneNumbers },
                  },
                  remove,
                  push,
                }: FieldArrayRenderProps) => {
                  //typescript: cast phoneNumber to string[]
                  let numbers = phoneNumbers as string[];
                  //objective: iterate over the phoneNumbers Array
                  // and render a Field component for Each phoneNumber
                  return numbers.map((number, index) => (
                    <div key={index}>
                      <Field name={`phoneNumbers[${index}]`} />
                      {index > 0 && (
                        <button type="button" onClick={() => remove(index)}>
                          {" "}
                          -{" "}
                        </button>
                      )}
                      <button type="button" onClick={() => push("")}>
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  ));
                }}
              </FieldArray>
            </section>
            <button
              type="button"
              onClick={() => {
                props.setTouched({
                  email: true,
                  username: true,
                  password: true,
                  address: true,
                  social: { facebook: true, twitter: true },
                  phoneNumbers: true,
                });
                props.validateForm();
              }}
            >
              validate the entire form
            </button>

            <button
              type="button"
              onClick={() => {
                props.setFieldTouched("email");
                props.validateField("email");
              }}
            >
              validate the email field
            </button>
            <button type="reset">Reset</button>
            <input
              className={`${styles.btn} btn btn-lg btn-danger`}
              type="submit"
              disabled={!(props.isValid) || props.isSubmitting}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
