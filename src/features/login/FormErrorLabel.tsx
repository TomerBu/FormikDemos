import React from "react";
import styles from "./FormErrorLabel.module.scss";

type FormErrorLabelProps = {
  children?: React.ReactNode;
};

const FormErrorLabel = (props: FormErrorLabelProps) => {
  return <div className={styles.error}>{props.children}</div>;
};

export default FormErrorLabel;
