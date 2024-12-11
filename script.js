import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import GUI from 'lil-gui'

const gui = new GUI()

const canvas = document.querySelector('canvas.webgl')

const gltfLoader = new GLTFLoader()

const textureLoader = new THREE.TextureLoader()

//scene
const scene = new THREE.Scene()

//testobject

// const testbox = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5,16,16),
//     new THREE.MeshBasicMaterial({color: '#ff0000'})
// )
// scene.add(testbox)

//x mas tree

//material
const bakedgroundtexture = textureLoader.load('./static/ground.jpg')
bakedgroundtexture.flipY = false
bakedgroundtexture.colorSpace = THREE.SRGBColorSpace
const bakedgroundmaterial= new THREE.MeshBasicMaterial({map:bakedgroundtexture})
bakedgroundmaterial.side = THREE.DoubleSide

const bakedteeetexture = textureLoader.load('./static/tree.jpg')
bakedteeetexture.flipY = false
bakedteeetexture.colorSpace = THREE.SRGBColorSpace
const bakedteeematerial= new THREE.MeshBasicMaterial({map:bakedteeetexture})
bakedteeematerial.side = THREE.DoubleSide

const snowmaterial = new THREE.MeshBasicMaterial({color:0xE7E7E7FF});
snowmaterial.color.setRGB(0.8, 0.8, 0.8);
let treemodel = null;

gltfLoader.load('./static/xmastree.glb',(gltf)=>{
   treemodel = gltf.scene;
   console.log(gltf)
       // Iterate through the model's children to find meshes
       treemodel.traverse((child) => {
          
    });

const ground  = gltf.scene.children.find(children=>children.name === 'ground')
const tree  = gltf.scene.children.find(children=>children.name === 'Cylinder006')
const snow  = gltf.scene.children.find(children=>children.name === 'ice-floor')

if(ground ){
    ground.traverse(child=>{
        child.material = bakedgroundmaterial
})}
if(snow ){
    snow.traverse(child=>{
        child.material = snowmaterial
})}
if(tree){
    tree.traverse(child=>{
        child.material = bakedteeematerial
})}








   scene.add(treemodel)
   
})


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
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height,1,100)
camera.position.z = 3
scene.add(camera)

//controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
     antialias: true 
})
renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))







//animate
const clock = new THREE.Clock()

const tick = ()=>{
   const elpsedtime = clock.getElapsedTime()

   //update controls
   controls.update()

   //renderer
   renderer.render(scene, camera)

   //call tick function again on the next frame 
   window.requestAnimationFrame(tick)

}
tick();