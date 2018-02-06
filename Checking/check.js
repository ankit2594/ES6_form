
function name() 
{
  var select=document.getElementById('select').value;
  // console.log(select.value); 
  if(select=="2")
  {
     window.open("https://www.w3schools.com");
  }  
}
document.getElementById('select').onchange=name;