import { Typography, Box, styled } from "@mui/material";
import React from "react";

const emptyCart =
  "https://allindiabazaarmall.com/static/emptyCart-322f30b71957d0decbe33b34643e6d77.png";

const Wrapper = styled(Box)`
  height: 80vh;
  width: 80%;
  background-color: white;
  margin: 80px 120px;
`;
const Container = styled(Box)`
  text-align: center;
  padding: 70px;
`;

const Empty = () => {
  return (
    <Wrapper>
      <Container>
        <img src={emptyCart} alt="emptyimage" style={{ width: "50%" }} />
        <Typography>Cart is empty</Typography>
        <Typography>Add items</Typography>
      </Container>
    </Wrapper>
  );
};

export default Empty;
