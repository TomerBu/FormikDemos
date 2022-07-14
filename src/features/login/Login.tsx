import React from "react";
import styles from "./Login.module.scss";

interface LoginProps {
  name: string;
  children?: React.ReactNode;
}
const Login = (props: LoginProps) => {
  return (
    <form className={styles["login-form"]}>
      <section className={styles["form-group"]}>
        <label htmlFor="username">User Name</label>
        <input type="text" name="username" id="username" />
      </section>

      <section className={styles["form-group"]}>
        <label htmlFor="email">User Email</label>
        <input type="email" name="email" id="email" />
      </section>

      <section className={styles["form-group"]}>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </section>

      <input className={`${styles.btn} btn btn-lg btn-danger`} type="submit" />
    </form>
  );
};

export default Login;
