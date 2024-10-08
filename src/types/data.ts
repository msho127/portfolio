// data.ts

export interface PopUpData {
  title: string;
  description: string;
  teamInfo: string;
  targetAudience: string;
  additionalInfo: string;
  link: string;
}

export const popUpData: PopUpData[] = [
  {
    title: "コミュランド",
    description: "概要：不登校児の社会復帰を手助け",
    teamInfo: "チーム制作(4人/企画、フロント画面担当)",
    targetAudience: "ターゲット:中学生、高校生",
    additionalInfo: "三年生前期に作成した作品です。はじめてnext.jsを使った作品で",
    link: "https://commuland.vercel.app/",
  },
  {
    title: "AIMA",
    description: "概要：ショート動画で観光地を探すことができ、ルート検索でスムーズに観光できるサービス",
    teamInfo: "チーム制作(5人(リーダー)/企画、フロント画面（top、map）担当)",
    targetAudience: "ターゲット:大学生、社会人のカップル",
    additionalInfo: "三年生前期に作成した作品です。はじめてnext.jsを使った作品で",
    link: "https://click.ecc.ac.jp/ecc/smorita/work/AIMA/top.html",

  },
  {
    title: "KIDS SET",
    description: "概要：文房具限定の販売サイト",
    teamInfo: "チーム制作(3人/企画、フロント画面担当)",
    targetAudience: "ターゲット：学生、お子様がいる家族",
    additionalInfo: "",
    link: "https://click.ecc.ac.jp/ecc/smorita/work/KIDS%20SET/",

  },
  {
    title: "Lend me",
    description: "概要：家に眠っている年中行事の道具をレンタル、出品できるサービス",
    teamInfo: "チーム制作(3人/企画、フロント画面担当)",
    targetAudience: "ターゲット：学生、お子様がいる家族",
    additionalInfo: "詳細：タンスの肥やしになっている行事用具をお金に変えれないか、会社など一時のイベントでしか使わないので購入は勿体ないという方に向けたサービスです。このサービスでは宅配サービスも提供しており、高齢者や体の不自由な方、忙しい方でも安心してご利用いただけます。また、インターネットから簡単にご注文いただけるため、時間のない方にも便利です。",
    link: "https://click.ecc.ac.jp/ecc/smorita/work/lend%20me/",

  },
  {
    title: "キャンドルナイト",
    description: "概要：中崎町のイベントポスター",
    teamInfo: "個人制作",
    targetAudience: "ターゲット:中崎町住民",
    additionalInfo: "工夫点：背景写真の選択、タイトルの配置、インフォメーションの文字配置、そしてその他の装飾という順で作成しましたが、特にこだわり、時間がかかったのはインフォメーションの文字配置です。はじめてのポスター制作でなかなかしっくりくる配置が見つからず、フォント、配置、大きさを決めるのに5時間試行錯誤したのを覚えています。",
    link: "https://click.ecc.ac.jp/ecc/smorita/work/candlenight.pdf",
  },
  {
    title: "NatureBlend",
    description: "概要：自然を楽しみながら、優雅に過ごせる喫茶店&キャンプ場",
    teamInfo: "個人制作",
    targetAudience: "ターゲット:大人、家族",
    additionalInfo: "私が学校に入って最初に作った作品です。",
    link: "https://click.ecc.ac.jp/ecc/smorita/work/%e4%b8%80%e5%b9%b4%e5%96%ab%e8%8c%b6%e5%ba%97/cafe.html",
  }




  // Add more pop-up data here as needed
];
