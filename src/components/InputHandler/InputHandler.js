import React from "react";

import styles from "../Styles/InputHandler.module.css"

function InputHandler({ label, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputHandler;
