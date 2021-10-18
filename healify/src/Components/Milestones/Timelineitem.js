import styles from "./Timeline.module.css";
const Timelineitem = ({ Data }) => (
    <div className={styles["timeline-item"]}>
        <div className={styles["timeline-item-content"]}>
            <span className={styles.tag} style={{ background: Data.category.color }}>
                {Data.category.tag}
            </span>
            <time>{Data.date}</time>
            <p>{Data.text}</p>
            {Data.link && (
                <a
                    href={Data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {Data.link.text}
                </a>
            )}
            <span className={styles.circle} />
        </div>
    </div>
);
export default Timelineitem;