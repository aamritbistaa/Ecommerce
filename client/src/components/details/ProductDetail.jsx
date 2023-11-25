import React from "react";
import {
  Typography,
  Box,
  styled,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const OfferBox = styled(Box)`
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const Badge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: lightgreen;
  font-size: 16px;
`;
const ColText = styled(TableRow)`
  font-size: 14px;
  margin-top: 5px;
  & > td {
    font-size: 14px;
    border: none;
  }
`;
const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography
        style={{ marginTop: 5, color: "lightgray", fontSize: "14px" }}>
        20 rating & 2 Review
        <Box component="span">
          <img
            src={fassured}
            alt="assured"
            style={{ width: "70px", marginLeft: 20 }}
          />
        </Box>
      </Typography>
      <Typography>
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
      <Typography>Available Offers</Typography>
      <OfferBox>
        <Typography>
          <Badge />
          Get extra 10%off upto Rs.500 on 1 item(s) T&C
        </Typography>
        <Typography>
          <Badge />
          Get extra 12%off (price inclusive of discount) T&C
        </Typography>
        <Typography>
          <Badge />
          Sign up and get Gift Card worth Rs.100 T&C
        </Typography>
        <Typography>
          <Badge />
          Buy 2 items save 5%; Buy 3 or more save 10%
        </Typography>
        <Typography>
          <Badge />
          5% of on Nabil Bank Card T&C
        </Typography>
        <Typography>
          <Badge />
          No Cost EMI on product worth more than Rs. 50,000 T&C
        </Typography>
      </OfferBox>
      <Table>
        <TableBody>
          <ColText>
            <TableCell style={{ color: "lightgray" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery By {date.toDateString()} | Rs. 200
            </TableCell>
          </ColText>
          <ColText>
            <TableCell style={{ color: "lightgray" }}>Warranty</TableCell>
            <TableCell>6 month </TableCell>
          </ColText>
          <ColText>
            <TableCell style={{ color: "lightgray" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "blue" }}>
                SuperComNet
              </Box>
              <Typography>3 days return policy</Typography>
              <Typography>
                Viewmore sellers starting from {product.price.mrp}
              </Typography>
            </TableCell>
          </ColText>
          <ColText>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: 390 }} alt="points" />
            </TableCell>
          </ColText>
          <ColText>
            <TableCell style={{ color: "lightgray" }}>Description</TableCell>
            <TableCell>{product.description} </TableCell>
          </ColText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
