import styles from "./BlogList.module.css";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className={styles.blogList}>
      <h2 className={styles.title}>{title}</h2>
      {blogs.map((blog) => (
        <div className={styles.blogPreview} key={blog.id}>
          <Link to={`/blogs/${blog.id}`} className={styles.detailsLink}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
