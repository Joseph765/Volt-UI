import { cpSync } from "node:fs";
import { fileURLToPath } from "node:url";

const from = fileURLToPath(new URL("../../css/src", import.meta.url));
const to = fileURLToPath(new URL("../dist/css", import.meta.url));

cpSync(from, to, { recursive: true });