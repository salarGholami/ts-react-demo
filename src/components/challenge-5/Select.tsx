type SelectProps = {
  options: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
};

export const Select = ({ options, onChange }: SelectProps) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

type Book = {
  id: string;
  title: string;
  author: string;
};

type Movie = {
  id: string;
  title: string;
  releasDate: string;
};

type GenericSelectProps<T> = {
  options: T[];
  onChange: (value: T) => void;
};

type Base = {
  id: string;
  title: string;
};

export const GenericSelect = <T extends Base>({
  options,
  onChange,
}: GenericSelectProps<T>) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = options.find((opt) => opt.id === e.target.value);

    if (val) onChange(val);
  };

  return (
    <select onChange={handleSelect}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

const books = [
  {
    value: "1",
    label: "Book #1",
  },
  {
    value: "2",
    label: "Book #2",
  },
];

const movies = [
  {
    value: "1",
    label: "Movie #1",
  },
  {
    value: "2",
    label: "Movie #2",
  },
];

const newBook = [
  { id: "1", title: "Book #1", author: "Author A" },
  { id: "2", title: "Book #2", author: "Author B" },
];

const newMovies = [
  {
    id: "1",
    title: "Movie #1",
    releaseDate: "2023",
  },
  {
    id: "2",
    title: "Movie #2",
    releaseDate: "2025",
  },
];

export const Parent = () => {
  const doSomethingWithBookId = (value: string) => {};

  const doSomethingWithMovieId = (value: string) => {};

  return (
    <>
      <Select options={books} onChange={doSomethingWithBookId} />
      <Select options={movies} onChange={doSomethingWithMovieId} />

      <GenericSelect
        options={newBook}
        onChange={(value) => console.log(value.author)}
      />

      <GenericSelect
        options={newMovies}
        onChange={(value) => console.log(value.)}
      />
    </>
  );
};
