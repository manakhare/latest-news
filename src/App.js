import "./App.css";
import axios from "axios";
import { React, useState, useEffect } from "react";
import Card from "./components/Card/Card";

const baseUrl =
  "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setArticles(response.data);
    });
  }, []);

  // console.log(articles);

  return (
    <div className="App">
      <div className="main-container">
        <h1>Latest news!</h1>
        <div className="container">
          {articles.map((article, id) => {
            // console.log(article);
            return (
              <a href={article.link} target="_blank">
                <div className="card-main">
                  <Card article={article} key={article.id} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
