import * as THREE from '/build/three.module.js'
import { OrbitControls } from '/jsm/controls/OrbitControls'

const scene: THREE.Scene = new THREE.Scene()

const camera1 = new THREE.PerspectiveCamera(75, 1, 0.1, 10)
const camera2 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
const camera3 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
const camera4 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)

const canvas1 = <HTMLCanvasElement>document.getElementById("c1")
const canvas2 = <HTMLCanvasElement>document.getElementById("c2")
const canvas3 = <HTMLCanvasElement>document.getElementById("c3")
const canvas4 = <HTMLCanvasElement>document.getElementById("c4")
const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 })
renderer1.setSize(200, 200)
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 })
renderer2.setSize(200, 200)
const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 })
renderer3.setSize(200, 200)
const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4 })
renderer4.setSize(200, 200)

//document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera1, renderer1.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera1.position.z = 2
camera2.position.y = 1
camera2.lookAt(new THREE.Vector3(0, 0, 0))
camera3.position.z = 1
camera4.position.x = 1
camera4.lookAt(new THREE.Vector3(0, 0, 0))

const animate = function () {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update()

    renderer1.render(scene, camera1)
    renderer2.render(scene, camera2)
    renderer3.render(scene, camera3)
    renderer4.render(scene, camera4)
};

animate();