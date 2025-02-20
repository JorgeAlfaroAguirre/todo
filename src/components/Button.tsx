import React from "react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "warning" | "danger";
};

const Button = ({ children, variant = "primary" }: Props) => {
  return <button className={`btn btn-${variant}`}>{children}</button>;
};

export default Button;
