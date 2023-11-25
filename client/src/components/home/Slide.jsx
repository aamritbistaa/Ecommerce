import { Box, Button, Divider, Typography, styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background-color: #fff;
  border-radius: 5px;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <Typography style={{ fontSize: "20px", fontWeight: 500 }}>
          {title}
        </Typography>
        {timer && (
          <Box style={{ display: "flex", alignItems: "center", color: "gray" }}>
            <img src={timerURL} alt="" srcset="" />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Box>
        )}
        <Button
          variant="contained"
          style={{ marginLeft: "auto", borderRadius: "5px" }}>
          View All
        </Button>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container">
        {products.map((item) => (
          <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={item.url} alt="product" srcset="" />
              <Text style={{ fontWeight: 600 }}>{item.title.shortTitle}</Text>
              <Text style={{ color: "green" }}>{item.discount}</Text>
              <Text style={{ color: "lightgray" }}>{item.tagline}</Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
