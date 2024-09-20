import "dotenv/config";
import ReactPDF from "@react-pdf/renderer";
import { Resume } from "./resume";
import { mkdirSync } from "fs";
import { registerFonts } from "./fonts";
registerFonts();

mkdirSync("./dist", { recursive: true });
ReactPDF.render(<Resume />, `./dist/resume.pdf`);
console.log("PDF written to ./dist/resume.pdf");
