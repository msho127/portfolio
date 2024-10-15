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
              <h2>AIMA</h2>
              <p>チーム制作(5人(リーダー)/企画、フロント画面（top、map）担当)</p>
            </div>
            <p>概要：ショート動画で観光地を探すことができ、ルート検索でスムーズにデートできるサービス
            </p>
            <p>ターゲット:大学生、社会人のカップル</p>
            <br />
            <p>詳細：インスタグラムのリール動画でデートスポットを探す若者が多く、さらにルート検索でアプリを介さずスムーズにデートを楽しむことができるサービス
            </p>
            <br />
            <br />
            <p>展望：位置情報が登録されているショート動画を複数、保存したフォルダを選択、map反映で行きたいスポットが可視化されて更にプランを立てやすくすることができると考えています。
            </p>
            <a href="https://click.ecc.ac.jp/ecc/smorita/work/AIMA/top.html" target="_blank" className={styles.link}>サイトへ飛ぶ</a>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;