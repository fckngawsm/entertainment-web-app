import React, { ReactNode } from "react";
import style from "./Auth.module.css";

interface AuthProps {
  children: ReactNode;
  title:string;
}

function Auth({ children , title }: AuthProps) {
  return (
    <section className={style.auth}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.content}>
        {/* <form className={style.form}>
                <fieldset className={style.information}>
                    <input className={style.input} type="email" placeholder='Email adress'/>
                    <input className={style.input} type="text" placeholder='Password'/>
                </fieldset>
            </form> */}
        {children}
      </div>
    </section>
  );
}

export default Auth;
