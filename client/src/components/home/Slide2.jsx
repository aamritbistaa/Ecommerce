import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Slide from "./Slide";
import styled from "@emotion/styled";

const Component = styled(Box)`
  display: flex;
`;

const Left = styled("div")`
  width: 84%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 601px) and (max-width: 960px) {
    width: 100%;
  }
`;
const Right = styled.div`
  background-color: white;
  margin: 10px auto 0;
  display: flex;
  align-items: center;
  border-radius: 3px;
  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 601px) and (max-width: 960px) {
    display: none;
  }
`;

const Slide2 = ({ title, timer, products }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <Component>
      <Left>
        <Slide products={products} title={title} timer={timer} />
      </Left>

      <Right>
        <img
          src={adURL}
          alt=""
          style={{ width: "220px", height: "98%", padding: 5 }}
        />
      </Right>
    </Component>
  );
};

export default Slide2;
