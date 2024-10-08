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
              <h2>キャンドルナイト</h2>
              <p>個人制作</p>
            </div>
            <p>概要：中崎町のイベントポスター</p>
            <p>ターゲット:中崎町住民</p>
            <br />
            <p>工夫点：<br />
            背景写真の選択、タイトルの配置、インフォメーションの文字配置、そしてその他の装飾という順で作成しましたが、特にこだわり、時間がかかったのはインフォメーションの文字配置です。<br />
              はじめてのポスター制作でなかなかしっくりくる配置が見つからず、フォント、配置、大きさを決めるのに5時間試行錯誤したのを覚えています。
            </p>
            <a href="https://click.ecc.ac.jp/ecc/smorita/work/candlenight.pdf" target="_blank" className={styles.link}>ポスターを表示</a>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;