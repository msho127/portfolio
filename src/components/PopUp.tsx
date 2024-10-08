import { useState } from "react";
import styles from "../styles/components/PopUp.module.scss";
import { PopUpData , popUpData } from "../types/data";

const PopUp = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [activePopUp, setActivePopUp] = useState<PopUpData | null>(null);

  const togglePopUp = (data: PopUpData | null) => {
    setPopUpVisible(!isPopUpVisible);
    setActivePopUp(data);
  };

  const handleChildClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {popUpData.map((data, index) => (
        <div key={index}>
          <input
            type="button"
            onClick={() => togglePopUp(data)}
            value="VIEW MORE→"
            className={styles.seeWork}
          />
        </div>
      ))}

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
            <p>{activePopUp.additionalInfo}</p>
            <a href={activePopUp.link} target="_blank" className={styles.link}>
              サイトへ飛ぶ
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
