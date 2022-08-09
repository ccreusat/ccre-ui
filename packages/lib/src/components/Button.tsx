import { forwardRef } from "react";
import clsx from "clsx";

type ButtonType = "button" | "submit" | "reset" | undefined;
type Ref = HTMLButtonElement;

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className: string;
  variant: string;
  type: ButtonType;
  children?: React.ReactNode;
  size: string;
}

export const Button = forwardRef<Ref, ButtonProps>(
  ({ className, variant, type, children, size, ...rest }, ref) => {
    const classNames = clsx(
      {
        button: true,
      },
      className,
      `button-${variant}`,
      `button-${size}`
    );

    return (
      <button ref={ref} type={type} className={classNames} {...rest}>
        {children}
      </button>
    );
  }
);
