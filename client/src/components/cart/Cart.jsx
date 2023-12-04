import { Typography, Grid, Box, styled, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Balance from "./Balance";
import Empty from "./Empty";

const Conainer = styled(Grid)(({ theme }) => ({
  padding: "30px 130px",
  display: "flex",
  justifyContent: "space-around",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0",
  },
}));
const Header = styled(Box)`
  padding: 16px 26px;
  background-color: white;
`;
const ButtonWrapper = styled(Box)`
  padding: 15px 24px;
  background-color: white;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 /10%);
`;
const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background-color: orangered;
  color: white;
  width: 200px;
  :hover {
    color: orangered;
    background-color: white;
  }
`;
const LeftContainer = styled(Grid)`
  /* padding: "10 0px"; */
`;
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length ? (
        <Conainer container>
          <LeftContainer item lg={9} md={12} xs={12}>
            <Header>
              <Typography>Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem product={item} />
            ))}
            <ButtonWrapper>
              <StyledButton>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftContainer>

          <Grid item lg={2} md={12} xs={12}>
            <Balance cartItems={cartItems} />
          </Grid>
        </Conainer>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Cart;
