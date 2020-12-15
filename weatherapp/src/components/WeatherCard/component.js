import React from "react";
import styled from "@emotion/styled";

import Loocation from './Location';
import Icon from "./Icon";

const WeatherCard = (props) => {
  const Card = styled.div`
    margin: 10 auto;
    background: linear-gradient(to bottom, blue, lightblue);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
  `

  return (
    <Card>
        <Loocation/>
        <Icon/>
        <h1 className="temp"> 20° </h1>
        <h3 className="condition"> Clouds </h3>
    </Card>
  );
};

export default WeatherCard;
