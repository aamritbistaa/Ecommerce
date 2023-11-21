import React from "react";
import { navData } from "../../assets/constants";
import { Box, Typography, styled } from "@mui/material";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "overlay",
  justifyContent: "space-between",
  margin: "55px 130px 0 130px",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const StyledItemContainer = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  font-family: inherit;
`;
const NavBar = () => {
  navData;
  return (
    <Wrapper>
      {navData.map((data) => (
        <StyledItemContainer>
          <img src={data.url} alt={data.text} srcset="" style={{ width: 64 }} />
          <Text>{data.text}</Text>
        </StyledItemContainer>
      ))}
    </Wrapper>
  );
};

export default NavBar;
