import { useState } from "react";

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

type Book = {
  id: string;
  title: string;
  author: string;
};

const newBook = [
  { id: "1", title: "Book #1", author: "Author A" },
  { id: "2", title: "Book #2", author: "Author B" },
];

type Movie = {
  id: string;
  title: string;
  releaseDate: string;
};

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
  const [book, setBook] = useState<Book | null>(null);
  const [movie, setMovie] = useState<Movie | null>(null);

  return (
    <>
      <GenericSelect<Book>
        options={newBook}
        onChange={(value) => setBook(value)}
      />

      <GenericSelect<Movie>
        options={newMovies}
        onChange={(value) => setMovie(value)}
      />

      <h2>selected Book :{book?.title}</h2>
      <h2>selected Movie :{movie?.title}</h2>
    </>
  );
};
