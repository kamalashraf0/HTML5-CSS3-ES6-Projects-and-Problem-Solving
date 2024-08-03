let canv1 = document.getElementById("canav1")
let ctx=canv1.getContext('2d')
ctx.fillStyle = ("red")
// ctx.fillRect(50,50,150,100)
ctx.stroke();
ctx.moveTo (0,40)
ctx.lineTo (60,0)
ctx.stroke();
ctx.beginPath()    // for interact inference
ctx.arc(100,200,30,0,Math.PI*2,true)
ctx.fill();
ctx.clearReact()
console.dir(ctx);



var x 
var y
console.log(navigator.geolocation.getCurrentPosition(
    function Success(obj) {
        x=obj.coords.altitude;     
        y=obj.coords.longitude;
        initMap();
    
}));


let map;

async function initMap(x,y) {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: x, lng: y },
    zoom: 8,
  },
function (params) {
    
});
}



//Local Storage
window.localStorage.setItem("" ," ")
window.sessionStorage.setItem("" ," ")
window.localStorage.clear()
