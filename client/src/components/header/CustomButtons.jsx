import { Badge, Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  align-items: center;

  & > button,
  div,
  p {
    margin-right: 40px;
    font-size: 14px;
    align-items: center;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;
const CartContainer = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
`;
const LoginButton = styled(Button)`
  color: #2847f0;
  background: #fafafa;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: bold;
  height: 32px;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => setOpen(true)}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 3, width: 130 }}>
        Become a Seller
      </Typography>
      <Typography>More</Typography>
      <CartContainer to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: "7px" }}>Cart</Typography>
      </CartContainer>
      <LoginDialog />
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
