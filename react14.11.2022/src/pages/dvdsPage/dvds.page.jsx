import React, { useEffect, useState } from "react";
import { FilterComponent, MovieComponent } from "../../components";
import "./style.css";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3db126ccffmsh13966be8ded2b92p11f537jsnb730456116f4",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};

export const DvdsPage = (props) => {
  const [movies, setMovies] = useState([]);
  const [FilterMovies, setFilterMovies] = useState([]);

  const getMoviesFromServer = async () => {
    let result = await fetch(
      "https://movies-app1.p.rapidapi.com/api/movies",
      options
    );
    let jsonData = await result.json();
    let moviesArr = jsonData.results;
    setMovies(moviesArr);
    setFilterMovies(moviesArr);
  };

  const handleFilter = (onChangeEvent) => {
    let freeText = onChangeEvent.target.value;
    if (freeText) {
      let filteredArr = movies.filter((m) =>
        m.titleOriginal.includes(freeText)
      );
      setFilterMovies(filteredArr);
    } else {
      setFilterMovies(movies);
    }
  };

  useEffect(() => {
    getMoviesFromServer();
  }, []);

  return getList(movies, FilterMovies, handleFilter);
};

const getList = (movies, FilterMovies, handleChange) => {
  if (movies.length === 0) {
    return <h1>If loading please wait...</h1>;
  } else {
    return (
      <div className="page">
        <FilterComponent handleChange={handleChange}></FilterComponent>
        <div className="container">
          {FilterMovies.map((m) => {
            return (
              <MovieComponent
                title={m.titleOriginal}
                description={m.description}
                imageUrl={m.image}
                linkVid={m.embedUrls[0].url}
                key={m.title}
              ></MovieComponent>
            );
          })}
        </div>
      </div>
    );
  }
};
