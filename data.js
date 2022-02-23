var employeeData;
function show(){
var stremployee="";
var stremployeeTable="";
stremployeeTable='<table class="table table-dark">';
stremployeeTable=stremployeeTable+'<thead>';
stremployeeTable=stremployeeTable+'<tr> <th scope="col">Roll no.</th> <th scope="col">First</th>  <th scope="col">Last</th>  <th scope="col">Place</th> <th scope="col">State</th></tr>';
stremployeeTable=stremployeeTable+'</thead>';
stremployeeTable=stremployeeTable+' <tbody>';
for(var i=0;i<employeeData.length;i++) {
  if(i%2==0)
    stremployeeTable=stremployeeTable+'<tr class="bg-primary"> <th scope="row">'+(i+101)+'</th>  <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].state+'</td> </tr>';
  else
  stremployeeTable=stremployeeTable+'<tr class="bg-primary"> <th scope="row">'+(i+101)+'</th>  <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].state+'</td> </tr>';
}
stremployeeTable=stremployeeTable+'</tbody>';
stremployeeTable=stremployeeTable+'</table>';
for (var i=0; i<12;i++) {
stremployee=stremployee+(i+101)+"."+" "+employeeData[i].First+" "+employeeData[i].Place+"<br>";
}
console.log(stremployee);
document.getElementById("demo").innerHTML=stremployeeTable;
}
function odd(){
  var stremployee="";
  var stremployeeTable="";
  stremployeeTable='<table class="table table-dark">';
  stremployeeTable=stremployeeTable+'<thead>';
  stremployeeTable=stremployeeTable+'<tr> <th scope="col">Roll no.</th> <th scope="col">First</th>  <th scope="col">Last</th>  <th scope="col">Place</th> <th scope="col">State</th></tr>'; 
 stremployeeTable=stremployeeTable+'</thead>';
  stremployeeTable=stremployeeTable+' <tbody>';
  for(var i=0;i<employeeData.length;i+=2) {

    stremployeeTable=stremployeeTable+'<tr class="bg-primary"> <th scope="row">'+(i+101)+'</th>  <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].state+'</td> </tr>';
  }
  stremployeeTable=stremployeeTable+'</tbody>';
  stremployeeTable=stremployeeTable+'</table>';
  for (var i=0; i<12;i++) {
  stremployee=stremployee+(i+101)+"."+" "+employeeData[i].First+" "+employeeData[i].Place+"<br>";
  }
  console.log(stremployee);
  document.getElementById("demo").innerHTML=stremployeeTable;
  }
  function even(){
    var stremployee="";
    var stremployeeTable="";
    stremployeeTable='<table class="table table-dark">';
    stremployeeTable=stremployeeTable+'<thead>';
    stremployeeTable=stremployeeTable+'<tr> <th scope="col">Roll no.</th> <th scope="col">First</th>  <th scope="col">Last</th>  <th scope="col">Place</th> <th scope="col">State</th></tr>';
    stremployeeTable=stremployeeTable+'</thead>';
    stremployeeTable=stremployeeTable+' <tbody>';
    for(var i=1;i<employeeData.length;i+=2) {
  
      stremployeeTable=stremployeeTable+'<tr class="bg-primary"> <th scope="row">'+(i+101)+'</th>  <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].state+'</td> </tr>';
    }
    stremployeeTable=stremployeeTable+'</tbody>';
    stremployeeTable=stremployeeTable+'</table>';
    for (var i=0; i<12;i++) {
    stremployee=stremployee+(i+101)+"."+" "+employeeData[i].First+" "+employeeData[i].Place+"<br>";
    }
    console.log(stremployee);
    document.getElementById("demo").innerHTML=stremployeeTable;
    }
    function clear1() {
      for(var i=0;i<employeeData.length;i++)
      {
        document.getElementById('demo').innerText = "";  
      }
        
      }
function search(placeholder){
  var stremployee="";
  var stremployeeTable="";
  stremployeeTable='<table class="table table-dark">';
  stremployeeTable=stremployeeTable+'<thead>';
  stremployeeTable=stremployeeTable+'<tr> <th scope="col">Roll no.</th> <th scope="col">First</th>  <th scope="col">Last</th>  <th scope="col">Place</th> <th scope="col">State</th></tr>';
  stremployeeTable=stremployeeTable+'</thead>';
  stremployeeTable=stremployeeTable+' <tbody>';
  for(var i=0;i<employeeData.length;i++) {
    if((i+101)==placeholder){
      stremployeeTable=stremployeeTable+'<tr class="bg-primary"> <th scope="row">'+(i+101)+'</th>  <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].state+'</td> </tr>';
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