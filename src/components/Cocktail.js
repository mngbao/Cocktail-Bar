import React from 'react'
import { Link } from 'react-router-dom'
import Card from "antd/es/card/Card";
import { Col } from "antd";

const Cocktail = (item) => {
  const { idDrink, strDrink, strDrinkThumb, strAlcoholic } = item.cocktail;
  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <Link to={`/cocktail/${idDrink}`}>
        <Card hoverable cover={<img src={strDrinkThumb} alt={strDrink} />}>
          <Card.Meta title={strDrink} description={strAlcoholic} />
        </Card>
      </Link>
    </Col>
  );
};

export default Cocktail
