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
