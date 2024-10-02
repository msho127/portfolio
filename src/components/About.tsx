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
          <p>こんにちは、森田翔太郎です。
            <br />私は高校生のときにおきたパンデミック、コロナの長期休暇で将来を見つめ直し、この業界で働きたいと思い、現在ECCコンピュータ専門学校で学んでいます。
            <br />
            <br />なぜweb業界を選んだか。
            <br />子どもの頃から作業ゲームや動画制作などの細々とした作業が好きだったので、この集中力とスキルを活かすことができ、さらに工夫をすることで人を楽しい思いにさせれる職業につきたいと思ったからです。
            <br />学校では新しい言語や難しい動きを挑戦しては挫折してを繰り返しています。
            </p>
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