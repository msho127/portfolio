import { useState } from "react";
import styles from "../styles/components/PopUp.module.scss";
import { PopUpData, popUpData } from "../types/PopUpData";

interface PopUpProps {
  workNumber: number;
}

const PopUp: React.FC<PopUpProps> = ({ workNumber }) => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [activePopUp, setActivePopUp] = useState<PopUpData | null>(null);

  const togglePopUp = (data: PopUpData | null) => {
    setPopUpVisible(!isPopUpVisible);
    setActivePopUp(data);
  };

  const handleChildClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  // workNumberをインデックスとして対応するポップアップデータを取得
  const popUpContent = popUpData[workNumber - 1]; // 配列のインデックスに合わせるために-1

  return (
    <>
      {popUpContent && (
        <div>
          <input
            type="button"
            onClick={() => togglePopUp(popUpContent)}
            value="VIEW MORE→"
            className={styles.seeWork}
          />
        </div>
      )}

      {isPopUpVisible && activePopUp && (
        <div className={styles.bg} onClick={() => togglePopUp(null)}>
          <div className={styles.PopUp} onClick={handleChildClick}>
            <div className={styles.title}>
              <h2>{activePopUp.title}</h2>
              <p>{activePopUp.teamInfo}</p>
            </div>
            <p>{activePopUp.description}</p>
            <p>{activePopUp.targetAudience}</p>
            <br />
            <p dangerouslySetInnerHTML={{ __html: activePopUp.additionalInfo }} />            <a href={activePopUp.link} target="_blank" className={styles.link}>
              サイトへ飛ぶ
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
