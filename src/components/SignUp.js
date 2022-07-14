import React, { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from "./SignUp.module.scss";
import { validate } from "./validate";
import { notify } from "./toast"

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
    // console.log(errors)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    // console.log(data);
  };

  const touchHandeler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify("Form submited Successfuly", "success")
      console.log(data);
    } else {
      notify("An error occured", "error")
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>Sign Up</h2>
        <div className={styles.formFeild}>
          <label>Name: </label>
          <input
            type="text"
            value={data.name}
            name="name"
            onChange={changeHandler}
            onFocus={touchHandeler}
          />
          {touched.name && errors.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.formFeild}>
          <label>Email: </label>
          <input
            type="email"
            value={data.email}
            name="email"
            onChange={changeHandler}
            onFocus={touchHandeler}
          />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formFeild}>
          <label>Password: </label>
          <input
            type="password"
            value={data.password}
            name="password"
            onChange={changeHandler}
            onFocus={touchHandeler}
          />
          {touched.password && errors.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formFeild}>
          <label>Confirm Password: </label>
          <input
            type="password"
            value={data.confirmPassword}
            name="confirmPassword"
            onChange={changeHandler}
            onFocus={touchHandeler}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formFeild}>
          <label>accept term of privacy policy</label>
          <input
            type="checkbox"
            value={data.isAccepted}
            name="isAccepted"
            onChange={changeHandler}
            onFocus={touchHandeler}
          />
          {touched.isAccepted && errors.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>

        <a href=".">Login</a>
        <button type="submit">submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
