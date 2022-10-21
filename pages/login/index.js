import React from "react";
import styles from "../../styles/login.module.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
        <div className={styles.signIn}>
            <Formik 
            initialValues={{
                email:"",
                password:""
            }}
            validationSchema = {Yup.object({
                email: Yup.string().email().required("Lütfen geçerli bir E - mail adresi giriniz.. "),
                password: Yup.string().required("Lütfen şifrenizi giriniz"),
            })}
            onSubmit={(values, { resetForm, setSubmitting }) => {
                // console.log(values);
                setTimeout(() => {
                  resetForm();
                  setSubmitting(false);
                }, 1000);
              }}
            >
            {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleReset,
            isSubmitting,
            touched,
          }) => (
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h3 className={styles.loginTitle}>Oturum Açın</h3>
                <label htmlFor="email"></label>
              <input
                className={styles.loginInputs}
                id="email"
                type="email"
                placeholder="example@example.com"
                value={values.email}
                onChange={handleChange}
              ></input>
              {errors.email && touched.email && (
                <div className={styles.loginErrors}>{errors.email}</div>
              )}
              <label htmlFor="password"></label>
              <input
                className={styles.loginInputs}
                id="password"
                type="password"
                placeholder="Lütfen şifrenizi giriniz.. "
                value={values.password}
                onChange={handleChange}
              ></input>
              {errors.password && touched.password && (
                <div className={styles.loginErrors}>{errors.password}</div>
              )}
                <button
                className={styles.loginBtn}
                type="submit"
                disabled={isSubmitting}
              >
              GİRİŞ YAP
              </button>
            </form>
          )}
            </Formik>
            <Link href="/"> 
        <div className={styles.loginCancel}>X</div>
        </Link>
        </div>
    </div>
  )
}

export default Login

