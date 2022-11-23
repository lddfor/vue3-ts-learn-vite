<template>
  <div class="document">
    <canvas id="simple" />
    <ContextComponent />
  </div>
</template>
<script lang="ts" setup>
  import ContextComponent from './components/contextComponent.vue'
  import {onMounted} from 'vue'
  import * as THREE from 'three'

  const resizeRendererToDisplaySize = (renderer: any) => {
    const canvas = renderer.domElement
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize) {
      renderer.setSize(width, height, false)
    }
    return needResize
  }
  onMounted(() => {
    const canvas = document.querySelector('#simple') as HTMLCanvasElement
    const renderer = new THREE.WebGLRenderer({
      canvas,
    })
    // renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
    const fov = 75
    const aspect = 1
    const near = 0.1
    const far = 5
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 2 // 给定相机位置

    // 创建一个场景
    const scene = new THREE.Scene()

    // 添加灯光
    const color = 0xFFFFFF
    const intensity = 1
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(-1, 2, 4)
    //将灯光添加到场景中
    scene.add(light)

    // 创建一个立方体  也就是几何体
    const boxWidth = 1
    const boxHeight = 1
    const boxDepth = 1
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)
    // 添加材质 颜色
    const material = new THREE.MeshPhongMaterial({color: 0x44aa88})

    //创建一个网格  添加 几何体和材质

    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // 将场景和相机全部都放到render函数中


    function render(time: number) {
      time *= 0.0004
      cube.rotation.x = time
      cube.rotation.y = time

      if (resizeRendererToDisplaySize(renderer)){
        const canvas = renderer.domElement
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        camera.updateProjectionMatrix()
      }
      renderer.render(scene, camera)
      requestAnimationFrame(render)
    }

    requestAnimationFrame(render)
  })

</script>
<style lang="less" scoped>
.document {
  width: 900px;

  #simple {
    height: 700px;
    width: 800px;
  }
}

</style>
