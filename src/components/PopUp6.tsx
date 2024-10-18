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
              <h2>NatureBlend</h2>
              <p>個人</p>
            </div>
            <p>概要：自然を楽しみながら、優雅に過ごせる喫茶店&キャンプ場</p>
            <p>ターゲット:大人、家族</p>
            <br />
            <p>私が学校に入ってから一番はじめに作った作品です。</p>
            <p></p>
            <a href="https://click.ecc.ac.jp/ecc/smorita/work/%e4%b8%80%e5%b9%b4%e5%96%ab%e8%8c%b6%e5%ba%97/cafe.html" target="_blank" className={styles.link}>サイトへ飛ぶ</a>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;