import React from "react";
import "./card.css";

function Card({ article, id }) {
  //   console.log(article.id);
  const str = article.primary_category.description;
  //   const excerpt = str.split(3, str.length - 4);
  return (
    <div className="card">
      <img src={article.jetpack_featured_media_url} />
      <div id="article-heading">{article.title.rendered}</div>
      <div className="excerpt">{str}</div>
    </div>
  );
}

export default Card;
