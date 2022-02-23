var employeeData;
function employee(flag){
var stremployee="";
var stremployeeTable="";
stremployeeTable='<table class="table table-dark">';
stremployeeTable=stremployeeTable+'<thead>';
stremployeeTable=stremployeeTable+'<tr> <th scope="col">Roll no.</th> <th scope="col">First</th>  <th scope="col">Last</th>  <th scope="col">Place</th> <th scope="col">State</th></tr>';
stremployeeTable=stremployeeTable+'</thead>';
stremployeeTable=stremployeeTable+' <tbody>';
if(flag==3){
  var empNo=parseInt(document.getElementById('form1').value);
  empNo=empNo-101;
  stremployeeTable=stremployeeTable+'<tr class="table-active"><th scope="row">'+(empNo+101)+'</th><td>'+employeeData[empNo].First+'</td><td>'+employeeData[empNo].Last+'</td> <td>'+employeeData[empNo].Place+'</td><td>'+employeeData[empNo].state+'</td></tr>';
 }
else{
  for(var i=0;i<employeeData.length;i++){
    if(flag==0){
      stremployeeTable=stremployeeTable+'<tr class="table-active"><th scope="row">'+(i+101)+'</th><td>'+employeeData[i].First+'</td><td>'+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td><td>'+employeeData[i].state+'</td></tr>';
    }
    else{
      if(flag==1){
        if(i%2!=0){
          stremployeeTable=stremployeeTable+'<tr class="table-info"><th scope="row">'+(i+101)+'</th><td>'+employeeData[i].First+'</td><td>'+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td><td>'+employeeData[i].state+'</td></tr>';
        }
      }
      if(flag==2){
        if(i%2==0){
          stremployeeTable=stremployeeTable+'<tr class="table-active"><th scope="row">'+(i+101)+'</th><td>'+employeeData[i].First+'</td><td>'+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td><td>'+employeeData[i].state+'</td></tr>';
        }
      }
    }
  }
}
stremployeeTable=stremployeeTable+'</tbody>';
stremployeeTable=stremployeeTable+'</table>';
for (var i=0; i<12;i++) {
stremployee=stremployee+(i+101)+"."+" "+employeeData[i].First+" "+employeeData[i].Place+"<br>";
}
console.log(stremployee);
document.getElementById("demo").innerHTML=stremployeeTable;
}
function clearData(){
  document.getElementById("demo").innerHTML="";
}
employeeData=[{
    "First":"Ankit",
    "Last":"Gupta",
    "Place":"Firozabad",
    "state":"UP",
  },
  {
    "First":"Jothilakshami",
    "Last":"V",
    "Place":"Rajapalayam",
    "state":"TN",
  },
  {
    "First":"Aman",
    "Last":"Kumar",
    "Place":"Agra",
    "state":"UP",
  },
   {
    "First":"Naman",
    "Last":"Gupta",
    "Place":"Noida",
    "state":"UP",
  },
  {
    "First":"Shivang",
    "Last":"Gupta",
    "Place":"Greater Noida",
    "state":"UP",
  },
  {
    "First":"Shivani",
    "Last":"Gupta",
    "Place":"Haridwar",
    "state":"UK",
  },
  {
    "First":"Jyoti",
    "Last":"Gupta",
    "Place":"Mathura",
    "state":"UP",
  },
  {
    "First":"Vivek",
    "Last":"Kumar",
    "Place":"Firozabad",
    "state":"UP",
  },
  {
    "First":"Rishab",
    "Last":"Kumar",
    "Place":"Greater Noida",
    "state":"UP",
  },
  {
    "First":"Deepak",
    "Last":"Kumar",
    "Place":"Bhopal",
    "state":"MP",
  },
  {
    "First":"Ghanshaym",
    "Last":"Kumar",
    "Place":"Lucknow",
    "state":"UP",
  },
  {
    "First":"Udhay",
    "Last":"Kumar",
    "Place":"Bangalore",
    "state":"MP",
  } ]