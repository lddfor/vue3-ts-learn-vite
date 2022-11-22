<template>
  <div id="first-three" />
</template>

<script lang="ts" setup>
  import {onMounted} from 'vue'
  import * as THREE from 'three'
  import {Scene} from 'three'


  onMounted(() => {
   const $firstThree = document.getElementById('first-three')!
   const renderer = new THREE.WebGL1Renderer()

   const {width, height} = $firstThree.getBoundingClientRect()
   console.log(width, height)
   renderer.setSize(width, height)
   $firstThree.appendChild(renderer.domElement)

   const camera = new THREE.PerspectiveCamera(45, width / height, 1, 500)
   camera.position.set(0, 0, 100)
   camera.lookAt(0, 0, 0)

   const scene = new THREE.Scene()
   const material = new THREE.LineBasicMaterial({color: 0x0000ff})
   const points = []
   points.push(new THREE.Vector3(-10, 0, 0))
   points.push(new THREE.Vector3(0, 10, 0))
   points.push(new THREE.Vector3(10, 0, 0))

   const geometry = new THREE.BufferGeometry().setFromPoints(points)
   const line = new THREE.Line(geometry, material)
   scene.add(line)
   renderer.render(scene, camera)
  })
</script>


<style lang="less" scoped>
#first-three {
  height: 800px;
  width: 800px;
}
</style>
