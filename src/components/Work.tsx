import styles from "../styles/components/Work.module.scss";
import "../styles/ggfont.scss";
import { workData } from "../types/WorkData";
import PopUp from "./PopUp";

const Works = () => {
  return (
    <>
      <div>
        <ul className={styles.revers}>
          {workData.map((work) => (
            <li key={work.number} className={styles.gridBox}>
              <section className={styles.textBox}>
                <h2 className="ggfnt">
                  {work.method} <br />
                  {work.number.toString().padStart(3, "0")}
                </h2>
              </section>
              <div className={styles.workBox}>
                {work.thumbnail1 && (
                  <img
                    src={`/${work.thumbnail1}.png`}
                    alt={work.title}
                    className={styles.workImg1}
                  />
                )}
                {work.thumbnail2 && (
                  <img
                    src={`/${work.thumbnail2}.png`}
                    alt={work.title}
                    className={styles.workImg1}
                  />
                )}
              </div>
              <section className={styles.workTitle}>
                <h2 id={styles.title} className="ggfntjp">{work.title}</h2>
                <p className={styles.bd}>{work.overview}</p>
                <p className={styles.bd}>制作学年: {work.year}年</p>
                <p className={styles.bd}>code: {work.code}</p>
                {work.framework && <p className={styles.bd}>framework: {work.framework}</p>}
                <PopUp workNumber={work.number} />
              </section>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Works;
