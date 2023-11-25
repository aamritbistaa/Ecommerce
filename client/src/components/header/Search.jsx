import styled from "@emotion/styled";
import { InputBase, Box, List, ListItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";
const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;
const Search = () => {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getInputContent = (a) => {
    setText(a);
  };
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for items"
        onChange={(e) => getInputContent(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((item) => (
              <ListItem>
                <Link
                  to={`/product/${item.id}`}
                  onClick={() => setText("")}
                  style={{ textDecoration: "none", color: "inherit" }}>
                  {item.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
