import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

export const AddCategory = ({ setCategories }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 2) {
      setValue(""); 
      setCategories(categories => [value, ...categories]);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
