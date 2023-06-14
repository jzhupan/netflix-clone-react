import React, { useEffect } from "react";
import axios from "axios";

export const HomeRandomPreview = () => {
  const fetchTrailers = async () => {
    const data = await axios.get(url(""));
  };

  return <div className="home-random-preview"></div>;
};
