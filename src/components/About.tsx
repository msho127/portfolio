import styles from "../styles/components/About.module.scss";
import "../styles/ggfont.scss";
import { aboutData } from "../types/AboutData";
import { icons } from "../types/icon";

const About = () => {
  return (
    <div>
      <h1 className="ggfnt">About</h1>
      <div className={styles.AboutWrap}>
        <div className={styles.myIcon} />
        {/* aboutData を map で動的にレンダリング */}
        {aboutData.map((AboutData, index) => (
          <section key={index} className="ProfileWrap">
            <h2 id={styles.Name}>{AboutData.name}</h2>
            <p className="ggfntjp">{AboutData.Occupation}</p>
            <br />
            <p className="ggfntjp">
              {AboutData.school}
              <br />
              {AboutData.class}
              <br />
              {AboutData.year}年{AboutData.month}月卒
            </p>
          </section>
          ))}
        {aboutData.map((AboutData, index) => (
          <div key={index} className={styles.AboutTextWrap}>
              {/* about のフィールドを dangerouslySetInnerHTML で表示 */}
              <p dangerouslySetInnerHTML={{ __html: AboutData.about }} />
          </div>
        ))}
        <div className={styles.IconsWrap}>
          {icons.map((iconObj, index) => (
            <div key={index} className={styles.IconItem}>
              <iconObj.icon />
              <span id="ggfntjp" className={styles.label}>
                {iconObj.label}
              </span>
              <span id="ggfntjp" className={styles.year}>
                {iconObj.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
