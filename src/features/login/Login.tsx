import styles from "./Login.module.scss";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid Email"),
  password: Yup.string()
    .required("Required")
    .min(3, "Must contain at least 3 characters"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
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
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

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

        <input
          className={`${styles.btn} btn btn-lg btn-danger`}
          type="submit"
        />
      </Form>
    </Formik>
  );
};

export default Login;
