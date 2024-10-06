import styles from "../styles/components/Top.module.scss"
import "../styles/ggfont.scss";

const NotFound = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className={styles.about}>About</li>
          <li className={styles.work}>Work</li>
          <li className={styles.contact}>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default NotFound;