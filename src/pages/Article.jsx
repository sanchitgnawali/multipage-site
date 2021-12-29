import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  const params = useParams();
  const { id } = params;
  const url = "http://localhost:3000/articles/" + id;
  const navigate = useNavigate();
  const { data: article, isPending, error } = useFetch(url);

  useEffect(() => {
    if (error) {
      setTimeout(() => navigate("/"), 2000);
    }
  }, [error]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>
            <b>by {article.author}</b>
          </p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
