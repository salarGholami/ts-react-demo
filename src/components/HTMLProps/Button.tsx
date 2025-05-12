import { ComponentProps } from "react";

type Props = {
  variant: "primary" | "sexondary";
} & ComponentProps<"button">;

const Button = ({ variant, children, ...rest }: Props) => {
  return (
    <button className={`default-className btn--${variant}`} {...rest}>
      {children}
    </button>
  );
};

const Parent = () => {
  return (
    <Button variant="primary" onClick={() => console.log("Clicked")}>
      click
    </Button>
  );
};

export default Parent;
