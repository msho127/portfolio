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
    Occupation:"WEBデザイナー",
    school:"ECCコンピュータ専門学校",
    class:"マルチメディア研究学科 WEBデザインコース",
    year:25,
    month:3,
    about:"こんにちは、森田翔太郎です。</br>私は高校生のときにおきたパンデミック、コロナの長期休暇で将来を見つめ直し、この業界で働きたいと思い、現在ECCコンピュータ専門学校で学んでいます。</br></br>目標</br>エンタメ系のweb開発に携わり、アニメやゲームの世界観をweb上で再現できるコーディング技術をみにつける。",
  }
]
