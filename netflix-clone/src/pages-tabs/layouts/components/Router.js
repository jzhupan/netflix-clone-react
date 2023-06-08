import React from "react";

export default function RouterPaths() {
  return (
    <div>
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/tv-shows" element={<TvShows />} />
      <Route path="/home/movies" element={<Movies />} />
      <Route path="/home/latest" element={<NewAndPopular />} />
    </div>
  );
}
