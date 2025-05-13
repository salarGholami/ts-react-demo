type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Square = {
  shape: "square";
  baseLength: number;
};

type Props = Circle | Rectangle | Square;

const Draw = (props: Props) => {
  return <div>{JSON.stringify(props)}</div>;
};

const Parent = () => {
  return <Draw shape="circle" radius={12} />;
};

export default Parent;
