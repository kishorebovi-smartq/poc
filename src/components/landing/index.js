import {useNavigate} from 'react-router-dom'
import styles from "./style.module.scss";

import LandingPageView from "./view";

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


const LandingPage = () => {
  const navigate = useNavigate()

  const loginClickHandler = () => {
    navigate('/login')
  }
  return (
    <div className={styles.landing}>
      <LandingPageView cardData={cardData} loginClickHandler={loginClickHandler} />
    </div>
  );
}

export default LandingPage

