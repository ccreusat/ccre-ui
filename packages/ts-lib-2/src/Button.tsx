import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button>Button</button>;
};

export default Button;
