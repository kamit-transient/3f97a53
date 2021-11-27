export const excelConverters = {
  path: { prefix: "/excel", suffix: ["dbs", "pdf", "csv"] }
};

// https://codesandbox.io/s/ww0xkyqonk?from-embed=&file=/data.js:0-712
export default {
  name: "Excel",
  prefix: "/excel",
  children: [
    { name: "dbs", prefix: "dbs" },
    { name: "pdf", prefix: "pdf" },
    { name: "csv", prefix: "csv" }
  ]
};
