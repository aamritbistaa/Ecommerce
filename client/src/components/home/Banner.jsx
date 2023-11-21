import React from "react";
import Carousel from "react-multi-carousel";
import { bannerData } from "../../assets/constants";
import { styled } from "@mui/material";
import "react-multi-carousel/lib/styles.css";

const StyledImage = styled(`img`)(({ theme }) => ({
  width: "100%",
  height: "280px",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: "180px",
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  //   console.log(bannerData);
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container">
      {bannerData.map((data) => (
        <StyledImage src={data.url} alt="" srcset="" />
      ))}
    </Carousel>
  );
};

export default Banner;
