import React, { ReactElement } from "react";

interface IProps {
  searchInput: string;
  searchHandler: (e: any) => void;
}
const SearchBox: React.FC<IProps> = (props): ReactElement => {
  const { searchInput, searchHandler } = props;

  return (
    <input
      id="search-box"
      className="search-box"
      type="text"
      placeholder="Search"
      value={searchInput}
      onChange={searchHandler}
    />
  );
};

export default React.memo(SearchBox);
