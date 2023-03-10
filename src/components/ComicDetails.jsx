import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchComic } from "../libs/utils";

export default function ComicDetails() {
  let { id } = useParams();

  const [comic, setComic] = useState();

  let title;
  let description;
  let thumbnailPath;
  let thumbnailExtension;
  let thumbnailUrl;
  let series;

  useEffect(() => {
    fetchComic(id)
      .then((data) => setComic(data))
      .catch((err) => console.error(err));
  }, []);

  if (comic) {
    title = comic.data.results[0].title;
    description = comic.data.results[0].description;
    thumbnailPath = comic.data.results[0].thumbnail.path;
    thumbnailExtension = comic.data.results[0].thumbnail.extension;
    thumbnailUrl = `${thumbnailPath}.${thumbnailExtension}`;
    series = comic.data.results[0].series.variants;
  }

  if (!comic) return;

  return (
    <div className="container large">
      <div className="hero__details-container">
        <img src={thumbnailUrl} alt="hero image full size" />
        <div className="hero__details text-center">
          <h4 className="font-sans font-bold text-lg m-auto">Name</h4>
          <p className="font-sans font-bold text-lg m-auto">{title}</p>
          <br></br>
          <br></br>
          <br></br>
          {description ? (
            <>
              <p className="font-sans m-auto">{description}</p>
            </>
          ) : null}
          <div className="hero__series">
            <h4>Series</h4>
            <ul>
              {series
                ? series.map((title) => (
                    <li key={Math.random() * 1000}>{title.name}</li>
                  ))
                : null}
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}
