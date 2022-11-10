const moviesDB = [
  {
    id: 1,
    title: "SpiderMan",
    genere: "Action",
    stock: 5,
    rate: 10,
    isLike: false,
  },
  {
    id: 2,
    title: "BatMan",
    genere: "Action",
    stock: 10,
    rate: 6,
    isLike: false,
  },
  {
    id: 3,
    title: "IronMan",
    genere: "Action",
    stock: 4,
    rate: 5,
    isLike: false,
  },
  {
    id: 4,
    title: "HulkMan",
    genere: "Action",
    stock: 2,
    rate: 9,
    isLike: false,
  },
  {
    id: 5,
    title: "Titanic",
    genere: "Drama",
    stock: 4,
    rate: 10,
    isLike: false,
  },
  {
    id: 6,
    title: "50 Shades Of Gray",
    genere: "Drama",
    stock: 4,
    rate: 8,
    isLike: false,
  },
  {
    id: 7,
    title: "Simpsons",
    genere: "Comedy",
    stock: 4,
    rate: 3,
    isLike: false,
  },
];

export const getMoviesFromServer = () => {
  //get movies from server
  return moviesDB;
};
