import LandingPageCard from "./cards/view";
import styles from "./style.module.scss";

export const cardData = [
  {
    id: 1,
    title: "Get more visibility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    id: 2,
    title: "Organize your candidates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    id: 3,
    title: "Verify their abilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
];

export const Cards = ({ data = [] }) => {
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
