import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCellsLarge,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./SetListCell.module.scss";

const SetListCell = () => {
  const [cell, setCell] = useState(4);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let pathArray = pathname.split("/");

  useEffect(() => {
    if (pathname === "/") {
      navigate(`/${cell}`);
    }
  }, [pathname]);

  return (
    <div className={styles.listCells}>
      <Link to={pathArray[2] ? `/2/${pathArray[2]}` : `/2`}>
        <FontAwesomeIcon
          icon={faTableColumns}
          onClick={() => setCell(2)}
          className={styles.listCellsItem}
        />
      </Link>
      <Link to={pathArray[2] ? `/4/${pathArray[2]}` : `/4`}>
        <FontAwesomeIcon
          icon={faTableCellsLarge}
          onClick={() => setCell(4)}
          className={styles.listCellsItem}
        />
      </Link>
    </div>
  );
};

export default SetListCell;
