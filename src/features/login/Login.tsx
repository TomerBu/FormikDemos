import styles from "./Login.module.scss";
import { ErrorMessage, Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid Email"),
  password: Yup.string()
    .required("Required")
    .min(3, "Must contain at least 3 characters"),
  address: Yup.string().required("required"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
  address: "",
};

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const onSubmit = (values: FormValues) => {
  console.log(values);
};

const Login = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form className={styles["login-form"]}>
        <section className={styles["form-group"]}>
          <label htmlFor="username">User Name</label>
          <Field
            autoComplete="username"
            type="text"
            name="username"
            id="username"
          />

          <ErrorMessage name="username" />
        </section>

        <section className={styles["form-group"]}>
          <label htmlFor="email">User Email</label>
          <Field autoComplete="email" type="email" name="email" id="email" />
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
          <ErrorMessage name="password" />
        </section>

        <section className={styles["form-group"]}>
          <label htmlFor="address">Address</label>
          <Field name="address">
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

        <input
          className={`${styles.btn} btn btn-lg btn-danger`}
          type="submit"
        />
      </Form>
    </Formik>
  );
};

export default Login;
