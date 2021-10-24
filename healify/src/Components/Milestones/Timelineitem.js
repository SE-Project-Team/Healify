import styles from "./Timeline.module.css";
const Timelineitem = ({ Data }) => {
  return (
    <div className={styles["timeline-item"]}>
      <div className={styles["timeline-item-content"]}>
        <span className={styles.tag} style={{ background: "red" }}>
          {Data.title}
        </span>
        <time>{Data.targetDate}</time>
        <p>{Data.description}</p>
        {Data.link && (
          <a href={Data.link.url} target="_blank" rel="noopener noreferrer">
            {Data.link.text}
          </a>
        )}
        <span className={styles.circle} />
      </div>
    </div>
  );
};
export default Timelineitem;
