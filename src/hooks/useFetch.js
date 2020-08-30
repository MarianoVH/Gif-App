import { useEffect, useState } from "react";
import PropType from "prop-types";
import { getGifs } from "../utils";

export const useFetch = (category) => {
  const [state, setState] = useState({ data: [], loading: true });
  useEffect(() => {
    getGifs(category).then((imgs) =>
      setTimeout(setState({ data: imgs, loading: false }), 500)
    );
  }, [category]);

  return state;
};

useFetch.propType = {
  category: PropType.string.isRequired,
};
