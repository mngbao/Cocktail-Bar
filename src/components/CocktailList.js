import React, { useEffect } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import { Row, Layout } from "antd";
import Error from "../pages/Error";

const { Content } = Layout;
const CocktailList = () => {
  const { drinks, filterDrinks } = useGlobalContext();

  useEffect(() => {}, [filterDrinks]);
  return (
    <Layout style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 auto" }}>
      <Content>
        <Row gutter={[16, 16]}>
          {filterDrinks.length > 0 ? (
            filterDrinks.map((item) => {
              return <Cocktail key={item.idDrink} cocktail={item} />;
            })
          ) : (
            <Error />
          )}
          {/* {filterDrinks.length > 0
            ? filterDrinks.map((item) => {
                return <Cocktail key={item.idDrink} cocktail={item} />;
              })
            : drinks.map((item) => {
                return <Cocktail key={item.idDrink} cocktail={item} />;
              })} */}
        </Row>
      </Content>
    </Layout>
  );
};

export default CocktailList;
