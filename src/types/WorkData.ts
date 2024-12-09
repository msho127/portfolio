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
      title : "キャンドルナイト",
      overview : "受賞作品",
      year: 1,
      code: "ポスター",
      framework: "",
      method: "Individual Production",
      number: 1,
      thumbnail1 : "Candle",
    },
    {
      title : "AIMA",
      overview :"恋人が使うデートスポット検索",
      year: 2,
      code: "html css js",
      framework: "",
      method: "Team Production",
      number: 2,
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
      number: 3,
      thumbnail1 : "CommuLand1",
      thumbnail2 : "CommuLand2",
  },
];