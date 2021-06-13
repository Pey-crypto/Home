function brew(){
  var len = navigator.appVersion.length;
  var edg = navigator.appVersion.indexOf("Edg");
  var chr = navigator.appVersion.indexOf("Chrome");
  var saf = navigator.appVersion.indexOf("Safari");

  var str = navigator.appVersion;
  var res = str.substring(edg,len);
  var res1 = str.substring(chr,saf);
  var res2 = str.substring(saf,edg);
  console.log("Edge: "+res);
  console.log("Chrome: "+res1);
  console.log("Safari : "+res2);
  var cleanup = res.substring(res.indexOf("/")+1,res.length).replaceAll(".","");
  var cleanup1 = res1.substring(res1.indexOf("/")+1,res1.length).replaceAll(".","");
  var cleanup2 =  res2.substring(res2.indexOf("/")+1,res2.length).replaceAll(".","");
  var chkvalue = "91.0.4472.101".replaceAll(".","");
  if (chkvalue>cleanup1) {
      document.addEventListener('DOMContentLoaded', function dis1() {
        document.getElementById('status').innerHTML = 'Exploit check:<br>Your browser is vulnerable to  Zero days contained within the V8 JavaScript Engine'+'Chrome version : '+res1;  
     });
  }
  if(chkvalue<=cleanup1){
    document.addEventListener('DOMContentLoaded', function dis2() {
      document.getElementById('status').innerHTML = 'Exploit check:<br>Your browser is updated<br>'+'Chrome version : '+res1;  
   });
  }
  

}

function confulence(jsonData){
    var country = jsonData.country;
    var isp = jsonData.org;
    var latitude = jsonData.latitude;
    var longi = jsonData.longitude;
    var ip = jsonData.ip;
    document.getElementById('scr').innerHTML ="Loading code into memory....<br>";
    document.getElementById('acr').innerHTML ="Country: "+country+"<br>";
    document.getElementById('bcr').innerHTML ="Internet Service Provider: "+isp+"<br>"; 
    document.getElementById('ccr').innerHTML ="IP Address: "+ip+"<br>"; 
    document.getElementById('dcr').innerHTML ="Latitude: "+latitude+"<br>";
    document.getElementById('ecr').innerHTML ="longitude: "+longi+"<br>";
     
  }


function bimp(addr){
    var get =" https://ipapi.co/" + addr+"/json/";
    fetch(get)
    .then(function(response) {
      response.json().then(jsonData => {
        confulence(jsonData);
      });
    })
    .catch(function(error) {
      console.log(error)
    });
  
  }
function getIP(json){
    var addr = json.ip;
    bimp(addr);
}
  
brew();