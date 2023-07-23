import { addInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js"; 
import { getRandomColorName } from "./randomcol.js";
import { rowtabel, svg, smt } from "../template/tabel.js";
import { URLPresensi } from "../config/url.js";
get(URLPresensi, tabelContent);


function tabelContent(result){
    userTable(result);
}

function userTable(jsonParse){
    let row = '';
    jsonParse.forEach((element) => {
    let svgicon = svg.replace("#WARNA#", getRandomColorName());
    let smtcol = smt.replace("#col#", getRandomColorName());
    console.log(smtcol);
    row = rowtabel.replace("#Nama#", element.nama).
        replace("#Npm#", element.npm).
        replace("#smt#", smtcol).
        replace("#semester#", element.semester).
        replace("#kelas#", element.kelas).
        replace("#prodi_kampus#", element.prodi_kampus).
        replace("#SVG#", svgicon);
    addInner("demo",row);
    });
}
