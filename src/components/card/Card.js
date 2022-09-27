import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Pants from "../../assets/pants.png";
import Dress from "../../assets/dress.png";
import Top from "../../assets/top.png";
import Shirt from "../../assets/shirts.png";

import styles from "./Card.module.scss";

const Card = ({ item, onLike }) => {
  const likeButtonStyle = item.liked ? "#FF0000" : "#000";
  const choosePhoto = () => {
    switch (item.imageAlt) {
      case "Pants":
        return Pants;
      case "Dress":
        return Dress;
      case "Top":
        return Top;
      case "Shirt":
        return Shirt;
    }
  };
  return (
    <div className={styles.card}>
      <img
        src={choosePhoto()}
        alt={item.imageAlt}
        className={styles.cardImage}
      />
      <div className={styles.cardHeaderWrapper}>
        <h4 className={styles.cardTitle}>{item.title}</h4>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: likeButtonStyle, cursor: "pointer" }}
          onClick={() => {
            onLike(item.id);
          }}
        />
      </div>
      <p className={styles.cardPrice}>{item.price} грн</p>
    </div>
  );
};

export default Card;
