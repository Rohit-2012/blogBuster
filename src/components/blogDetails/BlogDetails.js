import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../../useFetch'
import Loader from "../../components/loader/Loader";
import styles from './BlogDetails.module.css'

const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
  const navigate = useNavigate()
  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div className={styles.blogDetails}>
      {isPending && (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      )}
      {error && <div>❌{error.message}❌</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <span>Written by { blog.author}</span>
          <div className={styles.content}>{ blog.body}</div>
          <button onClick={handleDelete} className={styles.deleteBtn}>Delete</button>
        </article>
      )

      }
    </div>
  )
}

export default BlogDetails
