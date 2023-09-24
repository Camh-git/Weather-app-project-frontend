import styles from "./addCard.module.css";
import settingsIcon from "../assets/app_icons/settings_black_24dp.svg";
import addIcon from "../assets/app_icons/add_black_24dp.svg";

const AddCard: React.FC = () => {
  function openSettings() {}
  function addCard() {}
  return (
    <div className={styles.bigWeatherCard}>
      <h2 className={styles.addCard__h2}>End of list</h2>

      <section className={styles.addCard__buttonDisplay}>
        <img src={addIcon} alt="Add card" onClick={addCard} />
        <h2 className={styles.addCard__h2}>Add card</h2>
      </section>

      <span className={styles.addCard__settingsBar}>
        <a className={styles.addCard_link} href="">
          Manage cards
        </a>{" "}
        {/*Replace with navlink/ open the manage cards page*/}
        <img src={settingsIcon} alt="Open settings" onClick={openSettings} />
      </span>
    </div>
  );
};
export default AddCard;
