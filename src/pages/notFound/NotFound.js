import { Link } from "react-router-dom"
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h2>Sorry</h2>
      <p>Page can not be found</p>
      <Link to='/'>Go back to homepage...</Link>
    </div>
  )
}

export default NotFound
