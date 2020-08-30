import React, { useState } from "react";
import { AddCategory } from "../AddCategory";
import { GifGrid } from "../GifGrid";

export const GifExperteApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <AddCategory setCategories={setCategories} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
