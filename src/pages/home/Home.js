import styles from "./Home.module.css";
import BlogList from "../../components/blogList/BlogList";
import Loader from "../../components/loader/Loader";
import useFetch from "../../useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className={styles.home}>
      {error && <div>❌{error.message}❌</div>}
      {isPending && (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
