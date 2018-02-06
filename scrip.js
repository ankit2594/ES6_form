 import {next,submi} from './next_submit';
 document.getElementById("personal").style.display = "none";
 document.getElementById("education").style.display = "none";
 document.getElementById("disp").style.display = "none";
 
 var change=()=> {
     var a = document.getElementById('se').value;
     var x = document.getElementById("personal");
     var y = document.getElementById("education");
     document.getElementById("disp").style.display = "none";
     if (a == '1') {
         if (x.style.display === "none") {
             y.style.display = "none";
             x.style.display = "block";
         } else {
             x.style.display = "none";
         }
     } else if (a == '2') {
         if (y.style.display === "none") {
             x.style.display = "none";
             y.style.display = "block";
         } else {
             y.style.display = "none";
         }
     } else if (a == '0') {
         x.style.display = "none";
         y.style.display = "none";
     }
 }
document.getElementById('se').addEventListener("change" ,change);
  