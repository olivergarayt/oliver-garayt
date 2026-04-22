import fs from "fs";
const keys = Object.keys(process.env).filter(x => true);
fs.writeFileSync("env_dump.json", JSON.stringify(keys, null, 2));
