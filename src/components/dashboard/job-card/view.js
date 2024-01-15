import styles from "./styles.module.scss";
const JobCardView = ({ post }) => {
  return <div className={styles.jobCard} >
    <div className={styles.name} >{post.name}</div>
    <div className={styles.jobRole} >{post.jobRole}</div>
    <div className={styles.description} >{post.description}</div>
    <div className={styles.location} >{post.location}</div>
  </div>;
};

export default JobCardView;
