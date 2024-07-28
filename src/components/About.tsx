import styles from "../styles/components/About.module.scss"
import "../styles/ggfont.scss";
// import ImageIcon from "../../public/vite.svg"
import { icons } from "../types/icon";

const About = () => {
  return (
    <div>
      <h1 className="ggfnt">About</h1>
      <div className={styles.AboutWrap}>
        <div className={styles.myIcon} />
        <section className="ProfileWrap">
          <h2 id={styles.Name}>森田 翔太郎</h2>
          <p className="ggfntjp">フロントエンジニア</p>
          <br />
          <p className="ggfntjp">ECCコンピュータ専門学校
          <br />
          マルチメディア研究学科 WEBデザインコース
          <br />
          25年3月卒
          </p>
        </section>
        <div className={styles.AboutTextWrap}>
          <p>aaaa</p>
        </div>
        <div className={styles.IconsWrap}>
          {icons.map((iconObj, index) => (
            <div key={index} className={styles.IconItem}>
              <iconObj.icon />
              <span id="ggfntjp" className={styles.label}>{iconObj.label}</span>
              <span id="ggfntjp" className={styles.year}>{iconObj.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;