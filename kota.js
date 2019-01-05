
function pilih()
{
    var buah=document.getElementById("buah");
    var pilihan=document.getElementById("pilihan");
    var option=document.createElement("option");

    option.text=buah.options[buah.selectedIndex].text;
    try
    {
        pilihan.add(option,null);
    }
    catch(ex)
    {
        pilihan.add(option);
    }
}
 function loadDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          myFunction(this);
        }
      };
      xhttp.open("GET", "cd_catalog.xml", true);
      xhttp.send();
    }
    function myFunction(xml) {
      var i;
      var xmlDoc = xml.responseXML;
      var table="<tr><th>Artist</th><th>Title</th></tr>";
      var x = xmlDoc.getElementsByTagName("CD");
      for (i = 0; i <x.length; i++) { 
        table += "<tr><td>" +
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td></tr>";
      }
      document.getElementById("demo").innerHTML = table;
    }