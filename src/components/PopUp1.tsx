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
              <h2>コミュランド</h2>
              <p>チーム制作(4人/企画、フロント画面担当)</p>
            </div>
            <p>概要：小学校や中学校に在校中でいじめられた経験により不登校になってしまった学生を対象に高校進学をする上で対人関係を学ぶためにコミュニケーション能力の向上を目的としたサービス。</p>
            <p>ターゲット:中学生、高校生</p>
            <br />
            <p>詳細：様々なシチュエーションをテーマとして設定し、その中にさらに細かい項目を設けることで、日々の学習テーマを明確にし、目標達成に向けて取り組みやすくなります。これにより、コミュニケーションを取る機会も自然と増えると考えています。</p>
            <a href="https://commuland.vercel.app/" target="_blank" className={styles.link}>サイトへ飛ぶ</a>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;