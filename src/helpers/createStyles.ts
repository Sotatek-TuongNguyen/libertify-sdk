import { CSSProperties } from "react";

export const createStyles = <S>(styles: { [k in keyof S]: CSSProperties }) => {
  return styles;
};
