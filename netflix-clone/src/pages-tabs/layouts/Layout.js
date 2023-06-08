import * as React from "react";
import NavTabs from "./components/NavBar";
import Home from "../home-page/HomePage";
import TVShows from "../tv-shows-page/TVShows";
import Movies from "../movies-page/Movies";
import NewAndPopular from "../new-and-popular-page/NewAndPopular";

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
    case "/latest":
      component = <NewAndPopular />;
      break;
  }
  return (
    <>
      <NavTabs />
      <div className="container">{component}</div>
    </>
  );
}
