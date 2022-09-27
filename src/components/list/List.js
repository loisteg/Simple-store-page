import { useParams } from "react-router-dom";
import Card from "../card/Card";
import styles from "./List.module.scss";

const List = ({ data, onLike }) => {
  const { cell } = useParams();
  let content =
    data.length > 0 ? (
      data.map((item) => <Card item={item} key={item.id} onLike={onLike} />)
    ) : (
      <h2 className={styles.listNoItems}>Товарів не має</h2>
    );
  return (
    <div
      className={`${styles.list} ${cell === "4" ? styles.list4 : styles.list2}`}
    >
      {content}
    </div>
  );
};

export default List;
