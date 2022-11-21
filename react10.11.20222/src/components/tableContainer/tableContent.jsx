import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./style.css";

export const TableContent = ({ moviesArr, handleLike, handleDelete }) => {
  return (
    <div className="container3">
      <table className="table size">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genere</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {moviesArr &&
            moviesArr.map((m) => {
              return (
                <tr>
                  <td>{m.title}</td>
                  <td>{m.genere}</td>
                  <td>{m.stock}</td>
                  <td>{m.rate}</td>
                  <td className="iconLove">
                    {m.isLike ? (
                      <div
                        onClick={() => {
                          handleLike(m.id, false);
                        }}
                      >
                        <FavoriteIcon />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          handleLike(m.id, true);
                        }}
                      >
                        <FavoriteBorderIcon />
                      </div>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(m.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
