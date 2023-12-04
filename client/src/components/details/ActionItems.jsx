import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
const LefftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
`;
const Image = styled(`img`)({
  width: "95%",
  padding: "15px",
});
const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: "50px",
  marginTop: "10px",
  borderRadius: "5px",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));
const ActionItems = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const { id } = product;
  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    // navigate("/cart");
  };
  return (
    <>
      <LefftContainer>
        <Box
          style={{
            padding: "15px 20px",
            border: "1px solid lightgray",
          }}>
          <Image src={product.detailUrl} alt="product" />
        </Box>
        <StyledButton
          variant="contained"
          style={{ backgroundColor: "orange", marginRight: 10 }}
          onClick={() => addItemToCart()}>
          <ShoppingCartIcon />
          Add to cart
        </StyledButton>
        <StyledButton variant="contained" style={{ backgroundColor: "red" }}>
          <BoltIcon />
          Buy Now
        </StyledButton>
      </LefftContainer>
    </>
  );
};

export default ActionItems;
