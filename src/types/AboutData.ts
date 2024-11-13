// AboutData

export interface AboutData {
  name:string;
  Occupation:string;
  school:string;
  class:string;
  year:number;
  month:number;
  about:string;
}

export const aboutData: AboutData[] = [
  {
    name:"森田 翔太郎",
    Occupation:"フロントエンドエンジニア",
    school:"ECCコンピュータ専門学校",
    class:"マルチメディア研究学科 WEBデザインコース",
    year:25,
    month:3,
    about:"こんにちは、森田翔太郎です。</br>私は高校生のときにおきたパンデミック、コロナの長期休暇で将来を見つめ直し、この業界で働きたいと思い、現在ECCコンピュータ専門学校で学んでいます。</br></br>目標</br>エンタメ系のWeb開発に携わり、アニメやゲームの世界観をWeb上で再現すること。また、ユーザーが使いやすいと感じるUIと、エンジニアが見やすくメンテナンスしやすいコードを自分なりに探求し、確立することです。",
  }
]
