type Props<T> = T extends number | string
  ? {
      data: string[] | number[];
      labelProp?: never;
      valueProp?: never;
    }
  : {
      data: T[];
      labelProp: keyof T;
      valueProp: keyof T;
    };

// function DropDown<T>({}: Props<T>) {
//   return <div>DropDown</div>;
// }

// const DropDown = <T,>({}: Props<T>) => {
//   return <div>DropDown</div>;
// };

const DropDown = <T extends {}>({}: Props<T>) => {
  return <div>DropDown</div>;
};

const Parent = () => {
  return <DropDown data={["A", "B"]} />;
};

export default Parent;
