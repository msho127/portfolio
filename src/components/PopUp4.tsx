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
              <h2>Lend me</h2>
              <p>チーム制作(3人/企画、フロント画面担当)</p>
            </div>
            <p>概要：家に眠っている年中行事の道具をレンタル、出品できるサービス
            </p>
            <p>ターゲット:お子様がいる家族、お子様が大人になった家族</p>
            <br />
            <p>詳細：<br />
            タンスの肥やしになっている行事用具をお金に変えれないか、会社など一時のイベントでしか使わないので購入は勿体ないという方に向けたサービスです。<br />
            このサービスでは宅配サービスも提供しており、高齢者や体の不自由な方、忙しい方でも安心してご利用いただけます。また、インターネットから簡単にご注文いただけるため、時間のない方にも便利です。
            </p>
            <a href="https://click.ecc.ac.jp/ecc/smorita/work/lend%20me/" target="_blank" className={styles.link}>サイトへ飛ぶ</a>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;