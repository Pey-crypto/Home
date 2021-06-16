var canvas = document.createElement("canvas");
var gl = canvas.getContext("webgl")
      || canvas.getContext("experimental-webgl");


const scene = new THREE.Scene();
{
    const color1 =  000000;
    var density = 0.4;
    scene.fog = new THREE.FogExp2(color1,density);
    
}
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const boxGeometry = new THREE.BoxGeometry(2,2,2);
const boxMaterial = new THREE.MeshPhongMaterial({
    color:0xff0000});
const cube = new THREE.Mesh(boxGeometry,boxMaterial);
scene.add(cube);

scene.background = new THREE.Color('#000');
const color =  0xFFFFFF;
const intensity =1;
const light = new THREE.DirectionalLight(color,intensity);
light.position.set(-1,2,4);
scene.add(light);

camera.position.z=5;


window.addEventListener('resize',onWindowResize);


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
}
if(gl && gl instanceof WebGLRenderingContext){
    animate();
}
else{
    window.alert('WebGL not available');
    
}