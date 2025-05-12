import { ComponentProps } from "react";

type InputProps = {
  onChange: (value: string) => void;
} & Omit<ComponentProps<"input">, "onChange">;

const Input = ({ className, onChange, ...rest }: InputProps) => {
  return (
    <input
      className={`default-className`}
      {...rest}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const ParentInput = () => {
  return (
    <Input className="textFiled" onChange={(value) => console.log(value)} />
  );
};

export default ParentInput;
