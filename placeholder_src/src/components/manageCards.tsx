import addIcon from "../assets/app_icons/add_black_24dp.svg";
import styles from "./manageCards.module.css";
import ManageCardsEntry from "./manageCardsEntry";

const ManageCards: React.FC = () => {
  function addCard() {}
  const cards: string[] = ["London", "New York", "Tokyo"]; //placeholder, should use the actual list
  return (
    <div className={styles.bigWeatherCard}>
      <h2>Your cards</h2>

      <section className={styles.manageCards__List}>
        {cards.map((location, index) => (
          <ManageCardsEntry Location={cards[index]} />
        ))}
      </section>

      <section className={styles.mangageCards__addButtonDisplay}>
        <img src={addIcon} alt="Add card" onClick={addCard} />
      </section>
    </div>
  );
};
export default ManageCards;
