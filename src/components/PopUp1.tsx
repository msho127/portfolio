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
            <p>概要：不登校児の社会復帰を手助け</p>
            <p>ターゲット:中学生、高校生</p>
            <br />
            <p>三年生前期に作成した作品です。</p>
            <p></p>
            <a href="https://commuland.vercel.app/" target="_blank" className={styles.link}>サイトへ飛ぶ</a>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;