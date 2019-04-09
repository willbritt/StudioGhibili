var dataP = d3.json("https://ghibliapi.herokuapp.com/vehicles")

dataP.then(function(data){
    console.log("data", data);
    drawTable(data);
  },
function(err)
{
  console.log(err);
});

var drawTable = function(VehicleData)
{

  var table =  "<table><tr><td style='width: 100px; color: black;'>Col Head 1</td>";
  table+= "<td style='width: 100px; color: black; text-align: right;'>Col Head 2</td>";
  table+="<td style='width: 100px; color: black; text-align: right;'>Col Head 3</td></tr>";
  table+="<tr><td style='width: 100px;                   '>---------------</td>";
  table+="<td     style='width: 100px; text-align: right;'>---------------</td>";
  table+="<td     style='width: 100px; text-align: right;'>---------------</td></tr>";

  for (var i=0; i<VehicleData.length; i++)
   {
      table+="<tr><td style='width: 100px;'>Number " + i + " is:</td>";
      myArr[i] = myArray[i].toFixed(3);
      myTable+="<td style='width: 100px; text-align: right;'>" + myArray[i] + "</td>";
      myTable+="<td style='width: 100px; text-align: right;'>" + myArray[i] + "</td></tr>";
    }
     myTable+="</table>";

  document.write(table);

};
