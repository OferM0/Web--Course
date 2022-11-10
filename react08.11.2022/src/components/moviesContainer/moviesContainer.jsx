import React, { useState } from "react";
import { TableContent } from "../tableContainer/tableContent";
import { compare } from "../../helpers/helper";
import { getMoviesFromServer } from "../../services/moviesServices";

let moviesFromDb = getMoviesFromServer().sort((a, b) => compare(a, b));

export const MoviesContainer = (props) => {
  const [movies, setMovies] = useState(moviesFromDb);

  const handleIsDelete = (id) => {
    let newData = movies.filter((m) => m.id !== id);
    newData = newData.sort((a, b) => compare(a, b));
    setMovies(newData);
  };

  const handleIsLike = (id, isLike) => {
    let movie = movies.find((m) => m.id === id);

    if (movie) {
      movie.isLike = isLike;
    }

    let moviesArrayWithoutTheEditedOne = movies.filter((m) => m.id !== id);

    let newData = [...moviesArrayWithoutTheEditedOne, movie].sort((a, b) =>
      compare(a, b)
    );

    setMovies(newData);
  };

  return (
    <div>
      <h1>Showing {movies.length}</h1>
      <TableContent
        moviesArr={movies}
        handleLike={handleIsLike}
        handleDelete={handleIsDelete}
      ></TableContent>
    </div>
  );
};
