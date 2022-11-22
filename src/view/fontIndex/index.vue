<template>
  <!--  <div id="first-three" />-->
  <canvas id="canvas" />
</template>

<script lang="ts" setup>
  import {onMounted} from 'vue'
  import * as THREE from 'three'
  import {Scene} from 'three'


  onMounted(() => {
   // const $firstThree = document.getElementById('first-three')!
   // const renderer = new THREE.WebGL1Renderer()
   //
   // const {width, height} = $firstThree.getBoundingClientRect()
   // console.log(width, height)
   // renderer.setSize(width, height)
   // $firstThree.appendChild(renderer.domElement)

   function main() {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement
    // if (canvas) {
    const renderer = new THREE.WebGLRenderer({
     canvas,
     antialias: true, // 抗锯齿参数 如果模糊 使用下方的内容
    })
    const pixelRatio = window.devicePixelRatio
    // 需要配合css 百分比来进行缩放
    const width = canvas.clientWidth * pixelRatio | 0
    const height = canvas.clientHeight * pixelRatio | 0
    // renderer.setSize(600, 400);
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize) {
     renderer.setSize(width, height, false)
    }
    // } 

    // renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(600, 400);
    const fov = 75   // 是视野范围 (field of view ) 上述代码中是指垂直方向为75度
    const aspect = 1 // 相机默认值
    const near = 0.1  // 近平面
    const far = 5     // 远平面
    // 这四个参数定义了一个 视锥体 (frustum)像一个削去顶部的金字塔
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

    // 摄像机的位置
    camera.position.z = 2.5

    // 创建一个场景
    const scene = new THREE.Scene()
    /**
     * 以下是添加灯光 开始
     */

    const color = 0xFFFFFF
    const intensity = 1
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(-1, 2, 4)
    scene.add(light)
    // 以下是添加灯光 结束


    // 包含一个立方几何体
    const boxWidth = 1
    const boxHeight = 1
    const boxDepth = 1
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)


    // 创建一个基本的材质并设置他的颜色 颜色可以用css 16进制表示
    const material = new THREE.MeshBasicMaterial({color: 0x44aa88})
    // MeshBasicMaterial 这个是基础材质不会收到关照的影响 换一个材质
    const material2 = new THREE.MeshToonMaterial({
     color: 0x44aa88,
    })

    // 再创建一个网格 Mesh 对象, 它包含
    // 1. 几何体Geometry 物体的形状
    // 2. 材质, Material
    // 3. 对象在场景中相对于父对象的位置 朝向缩放,
    const mesh = new THREE.Mesh(geometry, material2)  // 传入一个几何体 和 材质


    function makeInstance(geometry: THREE.BoxGeometry, color: number, x: number) {
     const material = new THREE.MeshPhongMaterial({color})
     //MeshLambertMaterial   Lambert 不那么亮的颜色
     //MeshBasicMaterial   Basic 基础的颜色 不反光
     //MeshToonMaterial   Toon 是类似卡通的材质
     const cube = new THREE.Mesh(geometry, material)
     scene.add(cube)
     cube.position.x = x
     return cube
    }


    // 将网格添加到场景中
    // scene.add(mesh)  // 这个是添加一个场景

    const meshList = [
     makeInstance(geometry, 0x44aa88, 0),
    ]


    // 之后将场景和摄像机传递给渲染器 渲染出整个场景 第一个是场景 第二个是相机
    renderer.render(scene, camera)

    // 如果画出以上的内容应该是一个看似平面的内容

    function render(time: number) {
     time *= 0.001
     // mesh.rotation.x = time
     // mesh.rotation.y = time
     // mesh.rotation.z = time
     const canvas = renderer.domElement

     camera.aspect = canvas.clientWidth / canvas.clientHeight
     camera.updateProjectionMatrix()
     meshList.forEach((cube, index) => {
      const speed = 1 + index * .1
      const rot = time * speed
      cube.rotation.x = rot
      cube.rotation.y = rot
     })

     renderer.render(scene, camera)
     requestAnimationFrame(render)
    }

    requestAnimationFrame(render)
   }

   main()
  })
</script>


<style lang="less" scoped>
#first-three, #canvas {
  height: 800px;
  width: 800px;
}
</style>
