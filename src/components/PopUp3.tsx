import { useState } from "react";
import styles from "../styles/components/PopUp.module.scss";

const PopUp = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  const handleChildClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <input type="button" onClick={togglePopUp} value="VIEW MORE→" className={styles.seeWork} />
      {isPopUpVisible && (
        <div className={styles.bg} onClick={togglePopUp}>
          <div className={styles.PopUp} onClick={handleChildClick}>
            <div className={styles.title}>
              <h2>KIDS SET</h2>
              <p>チーム制作(4人/企画、フロント画面担当)</p>
            </div>
            <p>概要：文房具限定の販売サイト
            </p>
            <p>ターゲット：学生、お子様がいる家族、文具にこだわりがある方</p>
            <br />
            <p>詳細：文房具限定のネット販売があまりなく、文具にこだわりがある方やこれから学校に入学するような方が利用するサービス。
            </p>
            <a href="https://click.ecc.ac.jp/ecc/smorita/work/KIDS%20SET/" target="_blank" className={styles.link}>サイトへ飛ぶ</a>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;