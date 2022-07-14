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
    validate: (values) => {
      let errors = { email: "", username: "", password: "" };
      // if (values.email.length === 0) {
      //   errors.email = "Required";
      // }
      // if (values.password.length === 0) {
      //   errors.password = "Required";
      // }

      for (let key in errors) {
        let keyConst = key as keyof typeof values;
        if (values[keyConst].length === 0) {
          errors[keyConst] = "Required";
        }
      }
      return errors;
    },
  });

  //take note of the values:
  console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit} className={styles["login-form"]}>
      <section className={styles["form-group"]}>
        <label htmlFor="username">User Name</label>
        <input
          autoComplete="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          type="text"
          name="username"
          id="username"
        />
        
        {formik.errors.username &&  <div>Please select a valid username.</div>}
      </section>

      <section className={styles["form-group"]}>
        <label htmlFor="email">User Email</label>
        <input
          autoComplete="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
          name="email"
          id="email"
        />
        {formik.errors.email && <div>Please select a valid Email.</div>}
      </section>

      <section className={styles["form-group"]}>
        <label htmlFor="password">Password</label>
        <input
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          name="password"
          id="password"
        />
        {formik.errors.password && <div>Please select a valid password.</div>}
      </section>

      <input className={`${styles.btn} btn btn-lg btn-danger`} type="submit" />
    </form>
  );
};

export default Login;
