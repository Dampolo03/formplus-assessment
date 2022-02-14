import React from "react";

interface SearchbarProps {
  searchWords?: string;
  onChange?: (e: any) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({
  searchWords,
  onChange,
}) => {
  return (
    <div>
      <form className="search-form">
        <input
          type="search"
          placeholder="Search Templates"
          value={searchWords}
          onChange={onChange}
        />
        <span className="search-span">Search</span>
      </form>
    </div>
  );
};
