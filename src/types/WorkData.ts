// workdata

export interface WorkData {
  title : string;
  overview :string;
  year: number;
  code: string;
  framework: string;
  method: string;
  number: number;
  thumbnail1? : string;
  thumbnail2? : string;
}

export const workData: WorkData[] = [
  {
    title : "NatureBlend",
    overview : "自作喫茶店",
    year: 1,
    code: "html css",
    framework: "",
    method: "Individual Production",
    number: 1,
    thumbnail1 : "sakuhin1",
    },
    {
      title : "キャンドルナイト",
      overview : "受賞作品",
      year: 1,
      code: "ポスター",
      framework: "",
      method: "Individual Production",
      number: 2,
      thumbnail1 : "Candle",
    },
    {
        title : "Lend me",
        overview : "年中行事用品のレンタルサービス",
        year: 2,
        code: "html css js",
        framework: "pug sass",
        method: "Team Production",
        number: 3,
        thumbnail1 : "lendme1",
        thumbnail2 : "lendme2",
    },
    {
      title : "KIDS SET",
      overview : "文房具販売サービス",
      year: 2,
      code: "html css js",
      framework: "pug sass",
      method: "Team Production",
      number: 4,
      thumbnail1 : "kidsset1",
      thumbnail2 : "kidsset2",
    },
    {
      title : "AIMA",
      overview :"恋人が使うデートスポット検索",
      year: 2,
      code: "html css js",
      framework: "",
      method: "Team Production",
      number: 5,
      thumbnail1 : "AIMA1",
      thumbnail2 : "AIMA2",
    },
    {
      title : "コミュランド",
      overview : "学生のコミュ力向上サービス",
      year: 3,
      code: "html css js",
      framework: "Next.js",
      method: "Team Production",
      number: 6,
      thumbnail1 : "CommuLand1",
      thumbnail2 : "CommuLand2",
  },
];