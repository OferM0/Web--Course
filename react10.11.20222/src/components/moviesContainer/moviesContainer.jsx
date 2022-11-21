import React, { useState } from "react";
import { TableContent } from "../tableContainer/tableContent";
import { compare } from "../../helpers/helper";
import { getMoviesFromServer } from "../../services/moviesServices";
import { Filter } from "../filterContainer/filter";
import "./style.css";

let moviesFromDb = getMoviesFromServer().sort((a, b) => compare(a, b));

let filterOptions = [
  {
    isActive: false,
    option: "All",
  },
  {
    isActive: false,
    option: "Action",
  },
  {
    isActive: false,
    option: "Drama",
  },
  {
    isActive: false,
    option: "Comedy",
  },
];
export const MoviesContainer = (props) => {
  const [movies, setMovies] = useState(moviesFromDb);
  const [filter, setFilter] = useState("All");
  const [options, setOptions] = useState(filterOptions);

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
  const handleFilter = (movieGenere) => {
    setFilter(movieGenere);
    if (movieGenere !== "All") {
      let filteredMovies = moviesFromDb.filter((m) => {
        return m.genere === movieGenere;
      });
      setMovies(filteredMovies);
    } else {
      setMovies(moviesFromDb);
    }
  };
  const handleOptionsChange = (selectedOption) => {
    let filteredArr = options.filter((o) => o.option !== selectedOption.option);
    filteredArr.map((o) => {
      o.isActive = false;
      return o;
    });
    selectedOption.isActive = true;
    let result = [...filteredArr, selectedOption];
    setOptions(result);
  };
  return (
    <div className="container">
      <h1>Showing {movies.length}</h1>
      <div className="container2">
        <Filter
          optionsArr={options}
          handleOptionsChange={handleOptionsChange}
        ></Filter>
        <TableContent
          moviesArr={movies}
          handleLike={handleIsLike}
          handleDelete={handleIsDelete}
          handleFilter={handleFilter}
          filter={filter}
        ></TableContent>
      </div>
    </div>
  );
};
