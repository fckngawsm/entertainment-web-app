import React, { ReactNode } from "react";
import style from "./Auth.module.css";

interface AuthProps {
  children: ReactNode;
  title: string;
}

function Auth({ children, title }: AuthProps) {
  return (
    <section className={style.auth}>
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default Auth;
