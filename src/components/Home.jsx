import React from "react";

import { useState } from "react";

import Container from "./Container";
// import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Card from "./Card";

import { fetchHeros,fetchComics } from "../libs/utils";
import ComicSearchBar from "./ComicSearch";

const IMG_FANTASTIC = "portrait_fantastic";

export default function Home() {
  const [error, setError] = useState();
  const [comics, setComics] = useState([]);

  let cards;

  const handleClick = async (e, args) => {
    e.preventDefault();
    if (args === "") return;

    try {
      return await fetchComics(args) || fetchHeros(args);
    } catch (err) {
      return err;
    }
  };

  if (comics) {
    cards = comics.map((comic) => (
      <Card
        title={comic.title}
        key={comic.id}
        id={comic.id}
        thumbnail={`${comic.thumbnail.path}/${IMG_FANTASTIC}.${comic.thumbnail.extension}`}
      />
    ));
  } 


  return (
    <Container>
      <ComicSearchBar
        handleClick={handleClick}
        setComics={setComics}
        setError={setError}
      />
      <Grid>{cards ? cards : null}</Grid>
    </Container>
  );
}