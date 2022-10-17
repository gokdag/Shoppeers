import React from "react";
import styles from "../../styles/signup.module.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.signUp}>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Lütfen bir isim giriniz.."),
            surname: Yup.string().required("Lütfen soyisim giriniz.."),
            email: Yup.string()
              .email()
              .required("Lütfen geçerli bir E - mail adresi giriniz.. "),
            password: Yup.string().required("Lütfen şifrenizi giriniz"),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
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
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3 className={styles.title}>Üye Ol</h3>
              <label htmlFor="name"></label>
              <input
                className={styles.inputs}
                id="name"
                type="text"
                placeholder="Lütfen Adınızı Giriniz.."
                value={values.name}
                onChange={handleChange}
              ></input>
              {errors.name && touched.name && (
                <div className={styles.errors}>{errors.name}</div>
              )}

              <label htmlFor="surname"></label>
              <input
                className={styles.inputs}
                id="surname"
                type="text"
                placeholder="Lütfen Soyadınızı Giriniz.."
                value={values.surname}
                onChange={handleChange}
              ></input>
              {errors.surname && touched.surname && (
                <div className={styles.errors}>{errors.surname}</div>
              )}
              <label htmlFor="email"></label>
              <input
                className={styles.inputs}
                id="email"
                type="email"
                placeholder="example@example.com"
                value={values.email}
                onChange={handleChange}
              ></input>
              {errors.email && touched.email && (
                <div className={styles.errors}>{errors.email}</div>
              )}
              <label htmlFor="password"></label>
              <input
                className={styles.inputs}
                id="password"
                type="password"
                placeholder="Lütfen şifrenizi giriniz.. "
                value={values.password}
                onChange={handleChange}
              ></input>
              {errors.password && touched.password && (
                <div className={styles.errors}>{errors.password}</div>
              )}
              <button
                className={styles.btn}
                type="submit"
                disabled={isSubmitting}
              >
                Üye Ol
              </button>
            </form>
          )}
        </Formik>
        <Link href="/"> 
        <div className={styles.cancel}>X</div>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

// Formik içine yazılırlar.
// initialValues => Form state'imizde tutmak istediğimiz alanlar olacaktır.
// validationSchema => Burada bir yup objesi tutuyoruz. Hangi state neye benzemeli burada onu yazacağız.
// required => Hata mesajımızı yazdırdığımız alandır.
// Label içindeki htmlFor ile id aynı olmak zorunda.
