import "./style/style.css";
import $ from "jquery";
// Moment.js merupakan sebuah pustaka yang didesain untuk dapat mem-parsing, memvalidasi, memanipulasi serta menampilkan tanggal dan waktu di Javascript.
import moment from "moment";

const displayTime = () => {
    moment.locale("id");
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL"));
};
 
const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000)
};
 
updateTime();