import { Typography, Box, styled } from "@mui/material";
import React, { useState, useEffect } from "react";

const Header = styled(Box)`
  padding: 16px 24px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
  color: gray;
`;

const Container = styled(Box)`
  padding: 16px 24px;
  background-color: white;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;
const Amount = styled(Box)`
  float: right;
`;

const Balance = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const totalAmount = () => {
    let price = 0,
      discount = 0;

    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  return (
    <Box>
      <Header>
        <Heading>Price Summary</Heading>
      </Header>
      <Container>
        <Typography>
          Total Price
          <Amount component="span">Rs. {price}</Amount>
        </Typography>
        <Typography>
          Discount
          <Amount component="span">-Rs. {discount}</Amount>
        </Typography>
        <Typography>
          Delivery charge
          <Amount component="span">Rs. 50</Amount>
        </Typography>
        <Typography variant="h5">
          Total Amount
          <Amount component="span">Rs. {price - discount + 50}</Amount>
        </Typography>
        <Typography style={{ color: "green", marginTop: 10 }}>
          You save Rs. {discount} on this order.
        </Typography>
      </Container>
    </Box>
  );
};

export default Balance;
