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
            <p>ターゲット:中崎町済美まつり</p>
            <br />
            <p>工夫点：
            </p>
            <a href="#" className={styles.link}>サイトへ飛ぶ</a>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;