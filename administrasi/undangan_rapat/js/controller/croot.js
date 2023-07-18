import { setInner, addInner} from "https://jscroot.github.io/element/croot.js";
import {get} from "https://jscroot.github.io/api/croot.js"
import { rowtabel } from "../template/table.js";
import { URLPresensi } from "../config/url.js";
setInner("namadivisi","Dari croot.js");
get(URLPresensi, tabelContent);

function tabelContent (result){
    unraTable(result);   
}

function unraTable(jsonParse){
    jsonParse.forEach((element, index) => {
    let row = rowtabel.replace("#lokasi#", element.lokasi).replace("#agenda#", element.agenda).replace("#peserta#", element.peserta);
    console.log(element._id);
    addInner("demo",row);
    });
}