import React from "react";

interface TextProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function Text({ children, style = {} }: TextProps) {
  return <span style={{ display: "inline", ...style }}>{children}</span>;
}
