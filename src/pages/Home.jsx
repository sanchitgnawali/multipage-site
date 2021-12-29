import { Link } from "react-router-dom";
import { useFetch } from "./../hooks/useFetch";
import "./Home.css";

export default function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");
  return (
    <div className="home">
      <h2>Articles</h2>

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles &&
        articles.map((article) => {
          return (
            <div key={article.id} className="card">
              <h3>{article.title}</h3>
              <h3>{article.author}</h3>
              <Link to={`/articles/${article.id}`}>Read more..</Link>
            </div>
          );
        })}
    </div>
  );
}
