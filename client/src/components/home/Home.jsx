import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Box, styled } from "@mui/material";
import Banner from "./Banner";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import Slide2 from "./Slide2";
import MidSection from "./MidSection";
const Component = styled(Box)`
  padding: 15px 10px;
  background-color: #eae5e5;
`;
const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <Slide2 products={products} title="Dealof the day" timer={true} />

        <Slide products={products} title="Discounts for you" timer={false} />
        <MidSection />
        <Slide products={products} title="suggested item" timer={false} />
        <Slide products={products} title="Top selection" timer={false} />
        <Slide products={products} title="Trending item" timer={false} />
        <Slide products={products} title="Top pick" timer={false} />
        <Slide products={products} title="Recommended" timer={false} />
        <Slide
          products={products}
          title="Top Deal on acessories"
          timer={false}
        />
      </Component>
    </>
  );
};

export default Home;
