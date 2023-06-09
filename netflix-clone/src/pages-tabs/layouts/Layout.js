import * as React from "react";
import Home from "../home-page/HomePage";
import TVShows from "../tv-shows-page/TVShows";
import Movies from "../movies-page/Movies";
import NewAndPopular from "../new-and-popular-page/NewAndPopular";
import ResponsiveAppBar from "./components/NavBar";
import { Route, Routes } from "react-router";

export default function LayoutPage() {
  let component;
  switch (window.location.pathname) {
    case "/home":
      component = <Home />;
      break;
    case "/tv-shows":
      component = <TVShows />;
      break;
    case "/movies":
      component = <Movies />;
      break;
    case "/new-and-popular":
      component = <NewAndPopular />;
      break;
  }
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="TVShows" element={<TVShows />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="New & Popular" element={<NewAndPopular />} />
      </Routes>
      <div className="container">{component}</div>
    </>
  );
}
