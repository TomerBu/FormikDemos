import React from "react";
import styles from "./Login.module.scss";

interface LoginProps {
  name: string;
  children?: React.ReactNode;
}
const Login = (props: LoginProps) => {
  return (
    <div className={styles.login}>
      {props.children ?? props.children}
      {!props.children && "Login"}
    </div>
  );
};

export default Login;
