import { Card, Image, Typography } from "antd";
import { Layout } from "antd";
import React, { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import Cocktail from "../components/Cocktail";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

const { Title, Text } = Typography;
const { Content } = Layout;

const SingleCocktail = () => {
  const { cockTail, setCockTail, loading, setLoading } = useGlobalContext();
  let { id } = useParams();
  console.log(cockTail);
  useEffect(() => {
    setLoading(true);

    axios
      .get(url, {
        params: {
          i: id,
        },
      })
      .then((response) => {
        setCockTail(response.data.drinks[0]);
        setLoading(false);
      });
  }, []);

  const {
    idDrink,
    strDrink,
    strDrinkThumb,
    strGlass,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = cockTail;
  const strIngredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];

  return (
    <Layout
      style={{ maxWidth: "1200px", margin: "10px auto", padding: "0 auto" }}
    >
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Card style={{ maxWidth: "500px" }}>
            <Image src={strDrinkThumb} />
            <Title level={3}>{strDrink}</Title>
            <Text strong>Shot Glass Type: </Text>
            <Text>{strGlass}</Text>
            <br />
            <Text strong>Instructions: </Text>
            <Text>{strInstructions}</Text>
          </Card>
        )}
      </Content>
    </Layout>
  );
};

export default SingleCocktail;
