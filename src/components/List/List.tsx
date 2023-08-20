import React, { ReactElement, ReactNode } from "react";
import style from "./List.module.css";

interface ListProps {
  children: ReactNode;
}

function List({ children }: ListProps) {
  return <div className={style.wrapper}>{children}</div>;
}

export default List;
