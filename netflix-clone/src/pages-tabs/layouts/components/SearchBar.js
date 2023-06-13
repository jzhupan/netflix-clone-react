import React, { useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { useState, useCallback } from "react";
import { Icon } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const JustTheIcon = () => {
  return (
    <IconButton size="large" aria-label="search" color="inherit">
      <SearchIcon />
    </IconButton>
  );
};

const OpenSearchBar = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default function SearchBar() {
  const [isActive, setIsActive] = React.useState("icon");
  const modifyIsActive = useCallback(
    (newIsActive) => {
      setIsActive(newIsActive);
    },
    [setIsActive]
  );

  return (
    <>
      <IconButton
        size="large"
        aria-label="search"
        color="inherit"
        onClick={() => modifyIsActive("icon")}
      >
        {isActive === "icon" && <SearchIcon />}
      </IconButton>
      <IconButton onClick={() => modifyIsActive("open-search-bar")}>
        {isActive ==="open-search-bar" <OpenSearchBar />}
  
      </IconButton>
    </>
  );
}
