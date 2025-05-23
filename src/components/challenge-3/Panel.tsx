type Props =
  | {
      collapseable: true;
      defaultCollapsed?: true;
    }
  | {
      collapseable: never;
      defaultCollapsed?: never;
    };

const Panel = ({}: Props) => {
  return <div>Panel</div>;
};

const Parent = () => {
  return <Panel collapseable />;
};

export default Parent;

// 1.   <Panel /> ✅
// 2.   <Panel collapseable={true} defaultCollapsed={true} /> ✅
// 3.   <Panel collapseable={true} /> ✅
// 4.   <Panel  defaultCollapsed={true} /> ❌
