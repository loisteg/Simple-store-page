import styles from "./NavigationMenu.module.scss";
import { Link, useLocation } from "react-router-dom";

const NavigationMenu = ({ categories }) => {
  const { pathname } = useLocation();
  let pathArray = pathname.split("/");
  return (
    <ul className={styles.navigationMenu}>
      <Link to={`/${pathArray[1]}`}>
        <li
          className={`${styles.navigationMenuItem} ${styles.navigationMenuHeader}`}
        >
          Переглянути все
        </li>
      </Link>
      <Link to={`/${pathArray[1]}/sale`}>
        <li className={styles.navigationMenuItem}>Sale</li>
      </Link>
      <Link to={`/${pathArray[1]}/bestsellers`}>
        <li className={styles.navigationMenuItem}>Bestsellers</li>
      </Link>
      {categories.map((item, index) => {
        return (
          <Link to={`/${pathArray[1]}/${item.link}`} key={index}>
            <li className={styles.navigationMenuItem}>{item.title}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavigationMenu;
