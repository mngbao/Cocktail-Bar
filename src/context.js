import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// const fetchDrinks = () => {
//   try {
//     const response = axios.get(url);
//     setDrinks(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// fetchDrinks();

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [cockTail, setCockTail] = useState([]);
  const [filterDrinks, setFilterDrinks] = useState([]);
  const [onSearch, setOnSearch] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchDrinks = async () => {
    try {
      const response = await axios.get(url);
      setDrinks(response.data.drinks);
      setFilterDrinks(response.data.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <AppContext.Provider
      value={{
        drinks,
        cockTail,
        setCockTail,
        filterDrinks,
        setFilterDrinks,
        onSearch,
        setOnSearch,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
