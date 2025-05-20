import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ListProps<TItem, As extends ElementType> = {
  items: TItem[];
  renderItem: (item: TItem) => ReactNode;
  as?: As;
};

export const List = <TItem extends { id: string }, As extends ElementType>({
  items,
  renderItem,
  as,
  ...rest
}: ListProps<TItem, As> &
  Omit<ComponentPropsWithoutRef<As>, keyof ListProps<TItem, As>>) => {
  const Component = as ?? "ul";
  return <Component {...rest}>{items.map(renderItem)}</Component>;
};

type Customer = {
  id: string;
  name: string;
  email: string;
};

const customers: Customer[] = [
  { id: "1", name: "John Smith", email: "john@example.com" },
  { id: "2", name: "Jane Doe", email: "jane@example.com" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com" },
];

type Order = {
  id: string;
  customer: string;
  items: string[];
  total: number;
};

const orders: Order[] = [
  {
    id: "1",
    customer: "John Smith",
    items: ["Item 1", "Item 2"],
    total: 29.99,
  },
  { id: "2", customer: "Jane Doe", items: ["Item 3", "Item 4"], total: 39.99 },
  {
    id: "3",
    customer: "Bob Johnson",
    items: ["Item 5", "Item 6"],
    total: 49.99,
  },
];

export const Parent = () => {
  const renderOrder = (order: Order) => {
    return (
      <li key={order.id}>
        <div>
          <h3>{order.customer}</h3>
          <ul>
            {order.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{order.total}</p>
        </div>
      </li>
    );
  };

  const renderCustomer = (customer: Customer) => {
    return (
      <li key={customer.id}>
        <div>
          <h3>{customer.name}</h3>
          <p>{customer.email}</p>
        </div>
      </li>
    );
  };

  return (
    <>
      <List items={orders} renderItem={renderOrder} as="div" />
      <List items={customers} renderItem={renderCustomer} />
      <List items={customers} renderItem={renderCustomer} as="a" hr />
    </>
  );
};
