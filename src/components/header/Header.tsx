import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.header_title}>
            <h1 className={styles.header_title_text}>MixMaster</h1>
        </div>
        <nav className={styles.header_nav}>
            <ul className={styles.header_nav_ul}>
                <li className={styles.header_nav_ul_list}><a className={styles.header_nav_ul_link} href="">Home</a></li>
                <li className={styles.header_nav_ul_list}><a className={styles.header_nav_ul_link} href="">About</a></li>
                <li className={styles.header_nav_ul_list}><a className={styles.header_nav_ul_link} href="">Newsletter</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header