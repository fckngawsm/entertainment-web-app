import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../redux-hooks";
import { User } from "../type/User";
import Auth from "../features/auth/Auth/Auth";
import style from "../features/auth/Auth/Auth.module.css";
import { registerUser } from "../features/auth/auth-slice";
function RegisterPage() {
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors , isValid },
    getValues,
  } = useForm<User>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<User> = (data) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <Auth title="Sign Up">
      <form className={style.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset className={style.information}>
          <div className={style.input__wrapper}>
            <input
              className={style.input}
              type="email"
              placeholder="Email adress"
              {...register("email", {
                required: { value: true, message: "Can’t be empty" },
                minLength: { value: 5, message: "Too short mail" },
                maxLength: { value: 40, message: "Too long mail" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className={style.span__error}>{errors.email.message}</span>
            )}
          </div>
          <div className={style.input__wrapper}>
            <input
              className={style.input}
              type="password"
              placeholder="Password"
              {...register("password", {
                required: { value: true, message: "Can’t be empty" },
                minLength: { value: 5, message: "Too short password" },
              })}
            />
            {errors.email && (
              <span className={style.span__error}>
                {errors.password?.message}
              </span>
            )}
          </div>
          <div className={style.input__wrapper}>
            <input
              className={style.input}
              type="password"
              placeholder="Repeat password"
              {...register("repeatPassword", {
                required: { value: true, message: "Can’t be empty" },
                validate: (value) => value === getValues("password"),
              })}
            />
            {errors.repeatPassword &&
              errors.repeatPassword.type === "validate" && (
                <span className={style.span__error}>
                  Passwords do not match
                </span>
              )}
          </div>
          <button disabled={isValid ? false : true} className={style.button}>
            Create an account
          </button>
        </fieldset>
        {error && <h3 className={style.error__submit}>{error}</h3>}
        <div className={style.wrapper__redirect}>
          <p className={style.text}>Already have an account?</p>
          <Link className={style.link} to="/login">
            <span className={style.span}>Login</span>
          </Link>
        </div>
      </form>
    </Auth>
  );
}

export default RegisterPage;
