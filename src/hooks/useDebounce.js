import { useEffect, useState } from "react";

export const useDebounce = (searchTerm) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [searchTerm]);

  return search;
};
