export var next=()=>{
     document.getElementById("personal").style.display = "none";
     document.getElementById("education").style.display = "block";
 }
export var submi=()=>{
     document.getElementById("disp").style.display = "block";
     var name = document.getElementById('name').value;
     var father = document.getElementById('father').value;
     var mother = document.getElementById('mother').value;
     var pin = document.getElementById('pin').value;
     var ten = document.getElementById('ten').value;
     var twelve = document.getElementById('twelve').value;
     var be = document.getElementById('be').value;
     var enrol = document.getElementById('enrol').value;
     document.getElementById("education").style.display = "none";
     var div = document.getElementById("disp");
     div.style.display = "block";
     var table = document.getElementById('tab');
     var tr = document.createElement('tr');
     var arr = [name, father, mother, pin, ten, twelve, be, enrol];
     for (let i = 0; i < 8; i++) {
         var td = document.createElement('td');
         td.appendChild(document.createTextNode(arr[i]));
         tr.appendChild(td);
     }
     table.appendChild(tr);
     div.appendChild(table);
 }
document.getElementById("ne").addEventListener('click',next);
document.getElementById("sub").addEventListener('click',submi);