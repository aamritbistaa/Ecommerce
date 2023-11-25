import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { Typography, Box, styled, Grid } from "@mui/material";
import ActionItems from "./ActionItems";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding-left: 20px;
  & > p {
    margin-top: 10px;
  }
`;

const Detailview = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);
  useEffect(() => {
    if (product && id != product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loading]);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={8}>
            <ActionItems product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={8}>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default Detailview;
