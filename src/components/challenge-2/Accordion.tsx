type CollapseType = {
  collapsed?: boolean;
  expanded?: true;
};

type ExpandedType = {
  expanded?: boolean;
  collapsed?: true;
};

type Props = CollapseType | ExpandedType;

const Accordion = ({}: Props) => {
  return <div>Accordion</div>;
};

const Parent = () => {
  return <Accordion collapsed={true} />;
};

export default Parent;

//? collapsed
//? expanded

// 1.  <Accordion />;
// 2.  <Accordion collapsed />;  OR   <Accordion expanded />;
// 3.  <Accordion  collapsed  expanded />;  => not true!
