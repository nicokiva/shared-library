import React from "react";
import "./Grid.css";

type GridProps = {
  list: Array<{
    url: string;
    image: string;
    name: string;
    originalPrice?: number;
    currentPrice: number;
    tags: Array<string>
  }>
};

const Grid: React.FC<GridProps> = ({ list }) => (
  <div className="grid-product-container">
    {list.map(
      ({ url, image, name, originalPrice, currentPrice, tags }) => (
          <article className="product-container">
            <a href={url}>
              <img src={image} />

              {originalPrice ? <p className="product-original-price">${originalPrice}</p> : <></>}
              <p>${currentPrice}</p>
              {tags ? <ul className="product-tag-container">{tags.map(tag => <li className="product-tag">{tag}</li>)}</ul> : <></>}
            </a>
          </article>
      )
    )}   
  </div>
);

export default Grid;