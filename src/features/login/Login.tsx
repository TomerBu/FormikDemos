import styles from "./Login.module.scss";
import { useFormik } from "formik";
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
    <form onSubmit={formik.handleSubmit} className={styles["login-form"]}>
      <section className={styles["form-group"]}>
        <label htmlFor="username">User Name</label>
        <input
          autoComplete="username"
          {...formik.getFieldProps("username")}
          type="text"
          name="username"
          id="username"
        />

        {formik.touched.username && formik.errors.username && (
          <div>{formik.errors.username}</div>
        )}
      </section>

      <section className={styles["form-group"]}>
        <label htmlFor="email">User Email</label>
        <input
          autoComplete="email"
          {...formik.getFieldProps("email")}
          type="email"
          name="email"
          id="email"
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}.</div>
        )}
      </section>

      <section className={styles["form-group"]}>
        <label htmlFor="password">Password</label>
        <input
          autoComplete="current-password"
          {...formik.getFieldProps("password")}
          type="password"
          name="password"
          id="password"
        />
        {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}
      </section>

      <input className={`${styles.btn} btn btn-lg btn-danger`} type="submit" />
    </form>
  );
};

export default Login;
