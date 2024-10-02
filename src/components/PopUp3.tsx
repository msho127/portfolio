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
              <p>チーム制作(5人(リーダー)/企画、フロント画面（top、map）担当)</p>
            </div>
            <p>制作意図：旅行先の詳細と周辺の観光地など調べられたら便利じゃない？
            </p>
            <p>ターゲット:大学生、社会人のカップル</p>
            <br />
            <p>
            </p>
            <a href="#" className={styles.link}>サイトへ飛ぶ</a>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;