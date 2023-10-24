import React from "react";
import { createStyles } from "../helpers/createStyles";

interface ButtonProps {
  style?: React.CSSProperties;
  title?: string;
}

export default function Button({ title, style = {} }: ButtonProps) {
  return <div style={{ ...styles.container, ...style }}>{title}</div>;
}

const styles = createStyles({
  container: {
    background: "#e80089",
    color: "#fff",
    height: 40,
    padding: '0 15px',
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    cursor: 'pointer'
  },
});
