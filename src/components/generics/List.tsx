type ListProps<T> = {
  items: T[];
  onCLick: (value: T) => void;
};

function List<T extends { id: number }>({ items, onCLick }: ListProps<T>) {
  return (
    <div>
      <h2>list of items</h2>
      <div>
        {items.map((item) => {
          return (
            <div key={item.id} onClick={() => onCLick(item)}>
              {item.id}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
