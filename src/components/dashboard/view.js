import styles from "./styles.module.scss";

const DashboardView = ({posts}) => {
  return (
    <>
      <div className={styles.headContainer}>
        Hello Boopathiraja {`(VP Here - Guess who am I?)`}
      </div>
      <div className={styles.headContainer.user}>Logo</div>
    </>
  );
};

export default DashboardView;
