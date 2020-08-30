import React from "react";
import PropType from "prop-types";
import "./styles.css";

export const GifItem = ({ title, url }) => (
  <div className="card">
    <span className="card-title">{title}</span>
    <div className="img-container">
      <img alt={title} src={url} />
    </div>
  </div>
);

GifItem.propType = {
  title: PropType.string.isRequired,
  url: PropType.string.isRequired,
};
