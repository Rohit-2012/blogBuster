import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Create.module.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      }).then(() => {
        setIsPending(false);
        navigate("/");
      });
    }, 800);
  };

  return (
    <div className={styles.create}>
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="body">Content: </label>
        <textarea
          type="text"
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <label htmlFor="author">Author: </label>
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        {!isPending && <button className={styles.addBtn}>Add Blog</button>}
        {isPending && <button className={styles.addBtn}>Adding...</button>}
      </form>
    </div>
  );
};

export default Create;
