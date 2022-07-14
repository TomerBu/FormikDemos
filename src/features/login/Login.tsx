import styles from "./Login.module.scss";
import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //take note of the values:
  console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit} className={styles["login-form"]}>
      <section className={styles["form-group"]}>
        <label htmlFor="username">User Name</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.username}
          type="text"
          name="username"
          id="username"
        />
      </section>

      <section className={styles["form-group"]}>
        <label htmlFor="email">User Email</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
          name="email"
          id="email"
        />
      </section>

      <section className={styles["form-group"]}>
        <label htmlFor="password">Password</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          name="password"
          id="password"
        />
      </section>

      <input className={`${styles.btn} btn btn-lg btn-danger`} type="submit" />
    </form>
  );
};

export default Login;