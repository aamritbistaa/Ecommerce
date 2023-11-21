import React from "react";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import { logoURL, subURL } from "../../assets/constants";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const StyledBox = styled(Box)`
  margin-left: 25px;
  line-height: 0px;
`;
const SubHeading = styled(Typography)`
  font-style: italic;
  font-size: 10px;
`;
const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 5,
});
const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <StyledBox>
          <img src={logoURL} alt="flipkart" srcset="" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore
              <Box component="span" style={{ color: `yellow` }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="suburl" srcset="" />
          </Box>
        </StyledBox>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
