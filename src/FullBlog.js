import { useLocation } from "react-router-dom";

const FullBlog = () => {
  const location = useLocation();
  const article = location.state?.article;

  if (!article) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="FullBlog">
      <h2 className="FullBlog-title">{article.title}</h2>
      <img src={article.urlToImage} alt="Blog" className="FullBlog-image" />
      <p className="FullBlog-text">{article.description}</p>
      <a href={article.url} target="_blank" rel="noreferrer" className="FullBlog-link">Read original ⇲</a>
    </div>
  );
};

export default FullBlog;
