import React from "react";
import Auth from "../components/Auth/Auth";
import style from "../components/Auth/Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "../type/User";
import { useAppDispatch } from "../redux-hooks";
import { registerUser } from "../features/auth/auth-slice";
function RegisterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (data) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        navigate("/login");
      });
  };
  return (
    <Auth title="Sign Up">
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={style.information}>
          <input
            className={style.input}
            type="email"
            placeholder="Email adress"
            {...register("email", {
              required: { value: true, message: "Can’t be empty" },
              minLength: { value: 2, message: "Too short mail" },
              maxLength: { value: 40, message: "Too long mail" },
            })}
          />
          <input
            className={style.input}
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Can’t be empty" },
              minLength: { value: 5, message: "Too short password" },
            })}
          />
          <input
            className={style.input}
            type="password"
            placeholder="Repeat password"
            {...register("repeatPassword", {
              required: { value: true, message: "Can’t be empty" },
            })}
          />
          {watch("repeatPassword") !== watch("password") &&
          getValues("repeatPassword") ? (
            <p>password not match</p>
          ) : null}
          <button className={style.button}>Create an account</button>
        </fieldset>
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
