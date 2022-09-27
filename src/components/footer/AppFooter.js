import { Link } from "react-router-dom";
import styles from "./AppFooter.module.scss";

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <h2 className={styles.footerTitle}>Shop</h2>
      </Link>
    </footer>
  );
};

export default AppFooter;
