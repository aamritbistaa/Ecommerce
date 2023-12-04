import { Typography, Box, styled, Button } from "@mui/material";
import React from "react";
import { addEllipsis } from "../../utils/common";
import Buttonqunatity from "./Buttonqunatity";
import { removeFromCart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";

const Wrapper = styled(Box)`
  border-top: 1px solid lightgray;
  display: flex;
  background-color: white;
`;
const Left = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const StyledButton = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  width: 160px;
`;
const verifiedUrl = "https://cdn-icons-png.flaticon.com/512/6364/6364343.png";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Wrapper>
      <Left>
        <img
          src={product.url}
          alt="image"
          style={{ width: 100, height: 100, objectFit: "fill" }}
        />
        <Buttonqunatity />
      </Left>
      <Box style={{ margin: 15 }}>
        <Typography>{addEllipsis(product.title.longTitle)}</Typography>
        <Typography style={{ color: "#766969ff", marginTop: 5 }}>
          Seller: alibaba
          <Box component="span">
            <img
              src={verifiedUrl}
              alt="verified"
              style={{ width: "20px", marginLeft: 10 }}
            />
          </Box>
        </Typography>
        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" style={{ fontSize: 24, marginRight: 5 }}>
            Rs. {product.price.cost}
          </Box>
          <Box component="span" style={{ color: "lightgray", marginRight: 5 }}>
            <strike>{product.price.mrp}</strike>
          </Box>
          <Box component="span" style={{ color: "lightgreen" }}>
            {product.price.discount}
          </Box>
        </Typography>
        <StyledButton onClick={() => removeItemFromCart(product.id)}>
          Remove
        </StyledButton>
      </Box>
    </Wrapper>
  );
};

export default CartItem;
