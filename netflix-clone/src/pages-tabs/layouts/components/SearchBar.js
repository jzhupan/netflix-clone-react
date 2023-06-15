import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import IconButton from "@mui/material/IconButton";

export default function SearchBar() {
  return (
    <>
      <IconButton size="large" aria-label="search" color="inherit">
        <SearchIcon />
      </IconButton>
    </>
  );
}
