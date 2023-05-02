import React from "react";
import { useGlobalContext } from "../context";
import { Input } from "antd";

const { Search } = Input;

const SearchForm = () => {
  const { drinks, setFilterDrinks, setOnSearch, onSearch } = useGlobalContext();
  const onInput = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === "") setOnSearch(false);
    else setOnSearch(true);
    const filtered = drinks.filter((drink) =>
      drink.strDrink.toLowerCase().includes(searchTerm)
    );

    setFilterDrinks(filtered);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Search
        placeholder="input search text2"
        onInput={onInput}
        style={{ margin: "30px auto", width: "300px" }}
      />
    </div>
  );
};

export default SearchForm;
