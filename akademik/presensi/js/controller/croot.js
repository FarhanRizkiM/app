import { addInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js"; 
import { rowtabel } from "../template/tabel.js";
import { URLPrs } from "../config/url.js";
get(URLPrs, tabelContent);


function tabelContent(result){
    prsTable(result);
}

function prsTable(jsonParse){
    let row = '';
    jsonParse.forEach((element) => {
    row = rowtabel.replace("#nama#", element.nama).
        replace("#npm#", element.npm).
        replace("#semester#", element.semester).
        replace("#kelas#", element.kelas).
        replace("#prodi_kampus#", element.prodi_kampus);
        console.log(element._id);
        addInner("demo",row);
    });
}
