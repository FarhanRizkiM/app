import { setInner, addInner } from "https://jscroot.github.io/element/croot.js";
import {get} from "https://jscroot.github.io/api/croot.js"; 
import { rowtabel } from "./view/tabel.js";
setInner("namadivisi","Data Mahasiswa");
get("https://jadwal-0fc5e0bbd0c5.herokuapp.com/mhs", tabelContent);

var isi = {};

function tabelContent(result){
    userTable(result);
    isi = result;
}

function userTable(jsonParse){

    jsonParse.forEach((element, index) => {
    let row = rowtabel.replace("#namamhs#", element.namamhs).replace("#kelas#", element.kelas).replace("#prodi#", element.prodi);
    console.log(element._id);
    addInner("demo",row);
    });
}