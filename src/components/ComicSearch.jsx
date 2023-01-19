import React, { useRef } from "react";

import Button from "./Button";

export default function ComicSearchBar({ handleClick, setComics, setError }) {
  let input = useRef();
  return (
    <form>
      <input type="text" placeholder="Search comic..." ref={input} />
      <Button
        text={"Search"}
        handleClick={(e) => {
          handleClick(e, input.current.value)
            .then((data) => setComics(data.data.results))
            .catch((err) => setError(err));
        }}
      />
    </form>
  );
}
