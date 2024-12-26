import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import GUI from 'lil-gui'
import { inject } from '@vercel/analytics';
 
inject();




const gui = new GUI()

const canvas = document.querySelector('canvas.webgl')

const gltfLoader = new GLTFLoader()

const textureLoader = new THREE.TextureLoader()

//scene
const scene = new THREE.Scene()






//x mas tree
const ambietnlight = new THREE.AmbientLight(0xffffff, 1.5)
scene.add(ambietnlight)
//material
const bakedgroundtexture = textureLoader.load('./ground.jpg')
bakedgroundtexture.flipY = false
bakedgroundtexture.colorSpace = THREE.SRGBColorSpace
const bakedgroundmaterial= new THREE.MeshBasicMaterial({map:bakedgroundtexture})
bakedgroundmaterial.side = THREE.DoubleSide

const bakedteeetexture = textureLoader.load('./tree.jpg')
bakedteeetexture.flipY = false
bakedteeetexture.colorSpace = THREE.SRGBColorSpace
const bakedteeematerial= new THREE.MeshBasicMaterial({map:bakedteeetexture})
bakedteeematerial.side = THREE.DoubleSide

const bakedtreelasttexture = textureLoader.load('./treelast.jpg')
bakedtreelasttexture.flipY = false
bakedtreelasttexture.colorSpace = THREE.SRGBColorSpace
const bakedtreelastmaterial= new THREE.MeshBasicMaterial({map:bakedtreelasttexture})
bakedtreelastmaterial.side = THREE.DoubleSide

const bakedtreeroottexture = textureLoader.load('./treeroot.jpg')
bakedtreeroottexture.flipY = false
bakedtreeroottexture.colorSpace = THREE.SRGBColorSpace
const bakedtreerootmaterial= new THREE.MeshBasicMaterial({map:bakedtreeroottexture})
bakedtreerootmaterial.side = THREE.DoubleSide

const bakedtreefourtexture = textureLoader.load('./treefour.jpg')
bakedtreefourtexture.flipY = false
bakedtreefourtexture.colorSpace = THREE.SRGBColorSpace
const bakedtreefourmaterial= new THREE.MeshBasicMaterial({map:bakedtreefourtexture})
bakedtreefourmaterial.side = THREE.DoubleSide

const bakedtreethreetexture = textureLoader.load('./treethree.jpg')
bakedtreethreetexture.flipY = false
bakedtreethreetexture.colorSpace = THREE.SRGBColorSpace
const bakedtreethreematerial= new THREE.MeshBasicMaterial({map:bakedtreethreetexture})
bakedtreethreematerial.side = THREE.DoubleSide

const bakedtreetwotexture = textureLoader.load('./treetwo.jpg')
bakedtreetwotexture.flipY = false
bakedtreetwotexture.colorSpace = THREE.SRGBColorSpace
const bakedtreetwomaterial= new THREE.MeshBasicMaterial({map:bakedtreetwotexture})
bakedtreetwomaterial.side = THREE.DoubleSide

const bakedtreefirsttexture = textureLoader.load('./treefirst.jpg')
bakedtreefirsttexture.flipY = false
bakedtreefirsttexture.colorSpace = THREE.SRGBColorSpace
const bakedtreefirstmaterial= new THREE.MeshBasicMaterial({map:bakedtreefirsttexture})
bakedtreefirstmaterial.side = THREE.DoubleSide

const bakedstartexture = textureLoader.load('./star.jpg')
bakedstartexture.flipY = false
bakedstartexture.colorSpace = THREE.SRGBColorSpace
const bakedstarmaterial= new THREE.MeshBasicMaterial({map:bakedstartexture})
bakedstarmaterial.side = THREE.DoubleSide

const bakedsnowtexture = textureLoader.load('./snow.jpg')
bakedsnowtexture.flipY = false
bakedsnowtexture.colorSpace = THREE.SRGBColorSpace
const bakedsnowematerial = new THREE.MeshBasicMaterial({map:bakedsnowtexture})
bakedsnowematerial.side = THREE.DoubleSide


// const blueballmaterial = new THREE.MeshBasicMaterial({color:0x00E7D6,opacity:0.5});
// const goldballmaterial = new THREE.MeshStandardMaterial({
//     color: 0xe2cd89,  // Base color
//     metalness: 1.0,   // Fully metallic
//     roughness: 0.1,   // Smooth and shiny
// });

let treemodel = null;

gltfLoader.load('./xmastree.glb',(gltf)=>{



    gltf.scene.position.set(-0.32,-2.78,-4.5)
gui.add(gltf.scene.position,'x', -10, 10).step(0.01).name('X Axis');
gui.add(gltf.scene.position,'y', -10, 10).step(0.01).name('y Axis');
gui.add(gltf.scene.position,'z', -10, 10).step(0.01).name('z Axis');
gui.add(gltf.scene.rotation,'y', -2.5, 2.5).step(0.01).name('y rotate');

gui.close();

   treemodel = gltf.scene;
   console.log(gltf)
       // Iterate through the model's children to find meshes
       treemodel.traverse((child) => {
          if(child.isMesh){
            child.material.wireframe = true
          }
    });
    const wireframeFolder = gui.addFolder('Wireframe');
    let wireframeEnabled = true;  // Initial state is enabled

    wireframeFolder.add({ wireframe: wireframeEnabled }, 'wireframe').onChange((value) => {
        treemodel.traverse((child) => {
            if (child.isMesh) {
                child.material.wireframe = value; // Toggle wireframe on/off
            }
        });
    }).name('Toggle Wireframe');

const ground  = gltf.scene.children.find(children=>children.name === 'ground')
const tree  = gltf.scene.children.find(children=>children.name === 'Cylinder001')
const treelast  = gltf.scene.children.find(children=>children.name === 'Cylinder006')
const treeroot  = gltf.scene.children.find(children=>children.name === 'Cylinder')
const treefour  = gltf.scene.children.find(children=>children.name === 'Cylinder002')
const treethree  = gltf.scene.children.find(children=>children.name === 'Cylinder003')
const treetwo  = gltf.scene.children.find(children=>children.name === 'Cylinder004')
const treefirst  = gltf.scene.children.find(children=>children.name === 'Cylinder005')
const star  = gltf.scene.children.find(children=>children.name === 'Circle005')
const snow =gltf.scene.children.find(children=>children.name === 'ice-floor')
// const blueballs =gltf.scene.children.find(children=>children.name === 'Roundcube064')
// const goldballs =gltf.scene.children.find(children=>children.name === 'Roundcube089')
// const snow  = gltf.scene.children.find(children=>children.name === 'ice-floor')

if(ground ){
    ground.traverse(child=>{
        child.material = bakedgroundmaterial
})}
// if(snow ){
//     snow.traverse(child=>{
//         child.material = snowmaterial
// })}
if(tree){
    tree.traverse(child=>{
        child.material = bakedteeematerial
})}
if(treelast){
    treelast.traverse(child=>{
        child.material = bakedtreelastmaterial
})}
if(treeroot){
    treeroot.traverse(child=>{
        child.material = bakedtreerootmaterial
})}
if(treefour){
    treefour.traverse(child=>{
        child.material = bakedtreefourmaterial
})}
if(treethree){
    treethree.traverse(child=>{
        child.material = bakedtreethreematerial
})}
if(treetwo){
    treetwo.traverse(child=>{
        child.material = bakedtreetwomaterial
})}
if(treefirst){
    treefirst.traverse(child=>{
        child.material = bakedtreefirstmaterial
})}
if(star){
    star.traverse(child=>{
        child.material = bakedstarmaterial
})}
if(snow){
    snow.traverse(child=>{
        child.material = bakedsnowematerial
})}
// if(blueballs){
//     blueballs.traverse(child=>{
//         child.material = blueballmaterial
// })}
// if(goldballs){
//     goldballs.traverse(child=>{
//         child.material = goldballmaterial
// })}
   scene.add(treemodel)
   
})

//snow

const snowflaketexture = textureLoader.load('./snowflake.png')

const parameteers={xOffset: 0, // Offset in the X axis
    yOffset: 0, // Offset in the Y axis
    zOffset: 0 }
parameteers.count = 100
parameteers.size =0.3
parameteers.spread = 7


// Create a div for text
const guiTextDiv = document.createElement('div');
guiTextDiv.style.position = 'absolute';
guiTextDiv.style.top = '25px';
guiTextDiv.style.left = '20px';
guiTextDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
guiTextDiv.style.color = 'white';
guiTextDiv.style.padding = '10px';
guiTextDiv.style.fontFamily = 'Arial, sans-serif';
guiTextDiv.style.fontSize = '14px';
guiTextDiv.style.maxWidth = '400px';
guiTextDiv.style.lineHeight ='20px  '
guiTextDiv.style.zIndex = 1000; 
guiTextDiv.innerHTML = `
    <h3>Message from me :D</h3>
    <p>Merry Christmas Everyone!</p>
    <p>Have a joyful holiday season!</p>
    <p>Wishing you peace and happiness in the New Year!</p>
`;


document.body.appendChild(guiTextDiv);

const snowflakes = [];



const generatesnow = (xOffset = 0, yOffset = 0, zOffset = 0) => {
    const snowgeometry = new THREE.BufferGeometry();
    const position = new Float32Array(parameteers.count * 3);

    for (let i = 0; i < parameteers.count; i++) {
        const i3 = i * 3;
        position[i3] = (Math.random() - 0.5) * parameteers.spread + xOffset; // X position
        position[i3 + 1] = Math.random() * 5 + yOffset; // Spawn above ground
        position[i3 + 2] = (Math.random() - 0.5) * parameteers.spread + zOffset; // Z position

       

     
    }

    snowgeometry.setAttribute('position', new THREE.BufferAttribute(position, 3));

    // Material
    const snowmaterial = new THREE.PointsMaterial({
        size: parameteers.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        alphaMap: snowflaketexture,
        transparent: true,
    });

    // Snowflakes (Points)
    const snowpoints = new THREE.Points(snowgeometry, snowmaterial);
    scene.add(snowpoints);
    snowflakes.push(snowpoints);
};

generatesnow(-0.32, 2, -4.5);


// const snowControl = gui.addFolder('SnowControl')





const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
window.addEventListener('resize',()=>{
    //update size
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //update camera
    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix()

    //update renderer
    renderer.setSize(sizes.width,sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})
//base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height,1,1000)
camera.position.z = 3
scene.add(camera)


//controls
const controls = new OrbitControls(camera, canvas)


// controls.enableDamping = true
// controls.minDistance = 5;
//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
     antialias: true 
})
renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))




const snowUpdate = (geometry, deltatime) => {
    const positions = geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.001 * deltatime; // Move the Y-coordinate downwards (fall speed)

        
        if (positions[i + 1] < -2.5) {
            positions[i + 1] = Math.random() * 5 + 2;
            positions[i] = (Math.random() - 0.5) * parameteers.spread - 0.32; // Random X position
            positions[i + 2] = (Math.random() - 0.5) * parameteers.spread - 4.5; // Random Z position
        }
    }

    geometry.attributes.position.needsUpdate = true; // Inform Three.js to update the positions
};


const clock = new THREE.Clock();
let time = Date.now()
const tick = () => {
    // const elapsedTime = clock.getElapsedTime();
    const currentime = Date.now()
    const deltatime = currentime - time
    time = currentime
    // console.log(deltatime)
    // console.log(elapsedTime)

    // Update controls
    controls.update();

    // Update all snowflakes
    scene.traverse((child) => {
        if (child.isPoints) {
            snowUpdate(child.geometry,deltatime) ;
        }
    });

    renderer.render(scene, camera);

    
    window.requestAnimationFrame(tick);
};
tick();
