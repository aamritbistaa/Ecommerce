import styled from "@emotion/styled";
import { InputBase, Box } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background-color: white;
  width: 40%;
  border-radius: 5px;
  margin-left: 5px;
  display: flex;
  align-items: center;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
`;
const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 3px 5px;
  display: flex;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for items" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
