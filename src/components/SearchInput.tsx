import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

export interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void;
}

const SearchInput = (props: ISearchInputProps) => {
  const { setSearchQuery } = props;
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 250);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  return (
    <div>
      <label htmlFor="search" className="'mt-3">
        Search engine
      </label>
      <input onChange={(e) => setQuery(e.target.value)}></input>
    </div>
  );
};

export default SearchInput;
