// PopUpdata.ts

export interface PopUpData {
  title: string;
  description: string;
  teamInfo: string;
  targetAudience: string;
  additionalInfo: string;
  outlook : string;
  link: string;
}

export const popUpData: PopUpData[] = [
  {
    title: "NatureBlend",
    description: "概要：自然を楽しみながら、優雅に過ごせる喫茶店&キャンプ場",
    teamInfo: "個人制作",
    targetAudience: "ターゲット:大人、家族",
    additionalInfo: "私が学校に入ってから一番はじめに作った作品です。画像がズームする動きの実装だけでとても嬉しかったです。",
    outlook : "",
    link: "https://click.ecc.ac.jp/ecc/smorita/work/%e4%b8%80%e5%b9%b4%e5%96%ab%e8%8c%b6%e5%ba%97/cafe.html",
  },
  {
    title: "キャンドルナイト",
    description: "概要：中崎町のイベントポスター",
    teamInfo: "個人制作",
    targetAudience: "ターゲット:中崎町住民",
    additionalInfo: "工夫点：背景写真の選択、タイトルの配置、インフォメーションの文字配置、そしてその他の装飾という順で作成しましたが、特にこだわり、時間がかかったのはインフォメーションの文字配置です。はじめてのポスター制作でなかなかしっくりくる配置が見つからず、フォント、配置、大きさを決めるのに5時間試行錯誤したのを覚えています。",
    outlook : "",
    link: "https://click.ecc.ac.jp/ecc/smorita/work/candlenight.pdf",
  },
  {
    title: "Lend me",
    description: "概要：家に眠っている年中行事の道具をレンタル、出品できるサービス",
    teamInfo: "チーム制作(3人/企画、フロント画面担当)",
    targetAudience: "ターゲット:お子様がいる家族、お子様が大人になった家族",
    additionalInfo: "詳細：タンスの肥やしになっている行事用具をお金に変えれないか、会社など一時のイベントでしか使わないので購入は勿体ないという方に向けたサービスです。このサービスでは宅配サービスも提供しており、高齢者や体の不自由な方、忙しい方でも安心してご利用いただけます。また、インターネットから簡単にご注文いただけるため、時間のない方にも便利です。",
    outlook : "",
    link: "https://click.ecc.ac.jp/ecc/smorita/work/lend%20me/",
  },
  {
    title: "KIDS SET",
    description: "概要：文房具限定の販売サイト",
    teamInfo: "チーム制作(4人/企画、フロント画面担当)",
    targetAudience: "ターゲット：学生、お子様がいる家族、文具にこだわりがある方",
    additionalInfo: "詳細：文房具限定のネット販売があまりなく、文具にこだわりがある方やこれから学校に入学するような方が利用するサービス。",
    outlook : "",
    link: "https://click.ecc.ac.jp/ecc/smorita/work/KIDS%20SET/",
  },
  {
    title: "AIMA",
    description: "概要：ショート動画で観光地を探すことができ、ルート検索でスムーズにデートできるサービス",
    teamInfo: "チーム制作(5人(リーダー)/企画、フロント画面（top、map）担当)",
    targetAudience: "ターゲット:大学生、社会人のカップル",
    additionalInfo: "詳細：インスタグラムのリール動画でデートスポットを探す若者が多く、さらにルート検索でアプリを介さずスムーズにデートを楽しむことができるサービス.jsを使った作品で",
    outlook : "展望：位置情報が登録されているショート動画を複数、保存したフォルダを選択、map反映で行きたいスポットが可視化されて更にプランを立てやすくすることができると考えています。",
    link: "https://click.ecc.ac.jp/ecc/smorita/work/AIMA/top.html",
  },
  {
    title: "コミュランド",
    description: "概要：小学校や中学校に在校中でいじめられた経験により不登校になってしまった学生を対象に高校進学をする上で対人関係を学ぶためにコミュニケーション能力の向上を目的としたサービス。",
    teamInfo: "チーム制作(4人/企画、フロント画面担当)",
    targetAudience: "ターゲット:中学生、高校生",
    additionalInfo: "詳細：様々なシチュエーションをテーマとして設定し、その中にさらに細かい項目を設けることで、日々の学習テーマを明確にし、目標達成に向けて取り組みやすくなります。これにより、コミュニケーションを取る機会も自然と増えると考えています。",
    outlook : "",
    link: "https://commuland.vercel.app/",
  }

  // Add more pop-up data here as needed
];
