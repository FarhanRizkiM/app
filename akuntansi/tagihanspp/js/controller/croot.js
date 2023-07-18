import { addInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js";
import { getRandomColorName } from "./randomcol.js";
import { rowtabel, svg, smt } from "../template/tabel.js";
import { URLProyek2 } from "../config/url.js";
get(URLProyek2, tabelContent);

function tabelContent(result) {
  userTable(result);
}

function userTable(jsonParse) {
  let row = "";
  jsonParse.forEach((element) => {
    let svgicon = svg.replace("#WARNA#", getRandomColorName());
    let semester = smt.replace("#col#", getRandomColorName());
    console.log(semester);
    row = rowtabel.replace("#namamahasiswa#", element.namamahasiswa).
    replace("#nim#", element.nim).
    replace("#smt#", semester).
    replace("#biaya_spp#", element.biaya_spp).
    replace("#SVG#", svgicon);
    addInner("demo", row);
  });
}
