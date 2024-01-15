import styles from './style.module.scss'
import LandingPageCard from './view'
const Cards = ({ data = [] }) => {
  return (
    <div className={styles.cardContainer}>
      {data.map((cardDetail) => {
        const { title = "", description = "", id = "" } = cardDetail || {};
        return (
          <LandingPageCard
            cardTitle={title}
            cardDescription={description}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default Cards