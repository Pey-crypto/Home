function confulence(jsonData){
    var country = jsonData.country;
    var isp = jsonData.org;
    var latitude = jsonData.latitude;
    var longi = jsonData.longitude;
    var ip = jsonData.ip;
    document.getElementById('scr').innerHTML ="Loading code into memory....<br>" +"Country: "+country +"<br>"
    +"Your public ip address: "+ip+"<br>"
    +"Your Internet Service Provider: "+isp+"<br>"
    +"Longititude: "+longi+"<br>"
    +"Latitude: "+latitude+"<br>";
}


function bimp(addr){
    var get =" https://ipapi.co/" + addr+"/json/";
    console.log(get);
    fetch(get)
    .then(function(response) {
      response.json().then(jsonData => {
        confulence(jsonData);
        
      });
    })
    .catch(function(error) {
      console.log(error)
    });}
function getIP(json){
    var addr = json.ip;
    bimp(addr);
}
