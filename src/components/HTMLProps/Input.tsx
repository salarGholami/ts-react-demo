import { ComponentProps } from "react";

const Input = ({ className, ...rest }: ComponentProps<"input">) => {
  return <input className={`defult-className`} {...rest} />;
};

const ParentInput = () => {
  return (
    <Input
      className="textFiled"
      onChange={(e) => console.log(e.target.value)}
    />
  );
};

export default ParentInput;
