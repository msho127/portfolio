import styles from "../styles/components/Work.module.scss"
import "../styles/ggfont.scss";
import workImg1 from "../../public/sakuhin1.png"
import workImg2 from "../../public/Candle.png"
import workImg3_1 from "../../public/lendme1.png"
import workImg3_2 from "../../public/lendme2.png"
import workImg4_1 from "../../public/kidsset1.png"
import workImg4_2 from "../../public/kidsset2.png"
import workImg5_1 from "../../public/AIMA1.png"
import workImg5_2 from "../../public/AIMA2.png"
import workImg6_1 from "../../public/CommuLand1.png"
import workImg6_2 from "../../public/CommuLand2.png"

import PopUp1 from "./PopUp1";
import PopUp2 from "./PopUp2";
import PopUp3 from "./PopUp3";
import PopUp4 from "./PopUp4";
import PopUp5 from "./PopUp5";
import PopUp6 from "./PopUp6";

const Works = () =>  {
  return (
    <div>
      <ul className={styles.revers}>
        <li className={styles.flexBox}>
          <section className={styles.textBox}>
            <h2 className="ggfnt">Individual Production<br/>001</h2>
            <section className={styles.worlTitle}>
              <h2 id={styles.title} className="ggfntjp">NatureBlend</h2>
              <p className={styles.bd}>自作喫茶店</p>
              <p className={styles.bd}>制作学年 : 1年</p>
              <p className={styles.bd}>code : html css</p>
            </section>
              <PopUp6 />
            </section>
          <div className={styles.workBox}>
            <img src={workImg1} alt="作品1" className={styles.workImg1}></img>
          </div>
        </li>
        <li className={styles.flexBox}>
          <section className={styles.textBox}>
            <h2 className="ggfnt">Individual Production<br/>002</h2>
            <section className={styles.worlTitle}>
              <h2 id={styles.title} className="ggfntjp">キャンドルナイト</h2>
              <p className={styles.bd}>受賞作品</p>
              <p className={styles.bd}>制作学年 : 1年</p>
              <p className={styles.bd}>ポスター</p>
            </section>
              <PopUp5 />
            </section>
          <div className={styles.workBox}>
            <img src={workImg2} alt="作品2" className={styles.workImg2}></img>
          </div>
        </li>
        <li className={styles.flexBox}>
          <section className={styles.textBox}>
            <h2 className="ggfnt">Team Production<br/>003</h2>
            <section className={styles.worlTitle}>
              <h2 id={styles.title} className="ggfntjp">Lend me</h2>
              <p className={styles.bd}> 年中行事用品のレンタルサービス</p>
              <p className={styles.bd}>制作学年 : 2年</p>
              <p className={styles.bd}>code : html css js</p>
              <p className={styles.bd}>Library : pug sass</p>
            </section>
              <PopUp4 />
            </section>
          <div className={styles.workBox}>
            <img src={workImg3_1} alt="作品3_1" className={styles.workImg3}></img>
            <img src={workImg3_2} alt="作品3_2" className={styles.workImg3}></img>
          </div>
        </li>
        <li className={styles.flexBox}>
          <section className={styles.textBox}>
            <h2 className="ggfnt">Team Production<br/>004</h2>
            <section className={styles.worlTitle}>
              <h2 id={styles.title} className="ggfntjp">KIDS SET</h2>
              <p className={styles.bd}> 文房具販売サービス</p>
              <p className={styles.bd}>制作学年 : 2年</p>
              <p className={styles.bd}>code : html css js</p>
              <p className={styles.bd}>Library : pug sass</p>
            </section>
              <PopUp3 />
            </section>
          <div className={styles.workBox}>
            <img src={workImg4_1} alt="作品4_1" className={styles.workImg3}></img>
            <img src={workImg4_2} alt="作品4_2" className={styles.workImg3}></img>
          </div>
        </li>
        <li className={styles.flexBox}>
          <section className={styles.textBox}>
            <h2 className="ggfnt">Team Production<br/>005</h2>
            <section className={styles.worlTitle}>
              <h2 id={styles.title} className="ggfntjp">AIMA</h2>
              <p className={styles.bd}>恋人が使うデートスポット検索</p>
              <p className={styles.bd}>制作学年 : 2年</p>
              <p className={styles.bd}>code : html css js</p>
            </section>
              <PopUp2 />
            </section>
          <div className={styles.workBox}>
            <img src={workImg5_1} alt="作品5_1" className={styles.workImg3}></img>
            <img src={workImg5_2} alt="作品5_2" className={styles.workImg3}></img>
          </div>
        </li>
        <li className={styles.flexBox}>
          <section className={styles.textBox}>
            <h2 className="ggfnt">Team Production<br/>006</h2>
            <section className={styles.worlTitle}>
              <h2 id={styles.title} className="ggfntjp">コミュランド</h2>
              <p className={styles.bd}>学生のコミュ力向上サービス</p>
              <p className={styles.bd}>制作学年 : 3年</p>
              <p className={styles.bd}>code : html css typescript</p>
              <p className={styles.bd}>Library : Next.js</p>
            </section>
              <PopUp1 />
            </section>
          <div className={styles.workBox}>
            <img src={workImg6_1} alt="作品6_1" className={styles.workImg3}></img>
            <img src={workImg6_2} alt="作品6_2" className={styles.workImg3}></img>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Works;