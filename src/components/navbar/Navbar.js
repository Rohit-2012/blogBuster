import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to='/' className={styles.logoLink}><h1 className={styles.logo}>BlogBuster.</h1></Link>
      
      <div className={styles.links}>
        <Link to="/">HOME</Link>
        <Link to="/create" className={styles.button}>NEW BLOG</Link>
      </div>
    </nav>
  )
}

export default Navbar
