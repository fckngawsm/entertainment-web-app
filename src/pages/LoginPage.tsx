import React, { useState } from "react";
import Auth from "../features/auth/Auth/Auth";
import style from "../features/auth/Auth/Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../redux-hooks";
import { User } from "../type/User";
import { loginUser } from "../features/auth/auth-slice";
function LoginPage() {
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<User> = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <Auth title="Login">
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
          <button className={style.button}>Login to your account</button>
        </fieldset>
        {error && <h3 className={style.error__submit}>{error}</h3>}
        <div className={style.wrapper__redirect}>
          <p className={style.text}>Don’t have an account?</p>
          <Link className={style.link} to="/register">
            <span className={style.span}>Sign Up</span>
          </Link>
        </div>
      </form>
    </Auth>
  );
}

export default LoginPage;
