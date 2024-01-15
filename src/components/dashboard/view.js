import styles from "./styles.module.scss";

import JobCard from "./job-card";

const DashboardView = ({ posts, logoutClickHandler }) => {
  return (
    <div className={styles.container} >
      <div className={styles.header}>
        <h1>
          <span>My</span>
          <span className={styles.blueText}>Jobs</span>
        </h1>

        <button className={styles.logoutButton} onClick={logoutClickHandler} >Logout</button>
      </div>

      <div className={styles.jobCardContainer} >
        {
          posts.map((post, index) => (
            <JobCard key={index} post={post} />
          ))
        }
      </div>
    </div>
  );
};

export default DashboardView;
