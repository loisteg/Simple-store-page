import { Link } from "react-router-dom";
import styles from "./AppHeader.module.scss";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h2 className={styles.headerTitle}>Shop</h2>
      </Link>
    </header>
  );
};

export default AppHeader;
