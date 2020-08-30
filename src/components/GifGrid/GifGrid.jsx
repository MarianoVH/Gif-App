import React from "react";
import PropType from "prop-types";
import { useFetch } from "../../hooks";
import { GifItem } from "../GifItem";
import { Loading } from "../Loading";
import "./styles.css";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetch(category);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h3>{category} </h3>
          <div className="gif-grid animate__animated animate__fadeIn">
            {data.map(({ id, title, url }) => (
              <GifItem key={id} url={url} title={title} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

GifGrid.propType = {
  category: PropType.string.isRequired,
};
