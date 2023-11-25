import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { logoURL, subURL } from "../../assets/constants";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
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
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const handleClick = () => {};

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const list = () => (
    <Box style={{ width: "100%" }} onClick={handleClose}>
      <List>
        <ListItem button>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        {/* Menu  */}
        <MenuButton onClick={handleOpen}>
          <MenuIcon />
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
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
        </Link>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
