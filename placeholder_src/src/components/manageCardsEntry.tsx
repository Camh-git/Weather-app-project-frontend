import styles from "./manageCards.module.css";
import deleteIcon from "../assets/app_icons/delete_black_24dp.svg";

type Location = {
  Location: string;
};

const ManageCardsEntry: React.FC<Location> = (props: Location) => {
  function deleteCard() {} //placeholder
  return (
    <div className={styles.manageCardsEntry__body}>
      <h4>{props.Location}</h4>
      <img src={deleteIcon} alt="Delete card" onClick={deleteCard} />
    </div>
  );
};
export default ManageCardsEntry;
