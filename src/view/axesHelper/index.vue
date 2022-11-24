<template>
  <div class="document">
    <canvas id="simple" />
    <h5>添加了坐标轴 鼠标可以进行控制</h5>
  </div>
</template>
<script lang="ts" setup>
  import {onMounted, ref} from 'vue'
  import * as THREE from 'three'
  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
  // 引入控制器
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
  const isDirection = ref(false)
  onMounted(() => {
    const canvas = document.querySelector('#simple') as HTMLCanvasElement
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    })
    renderer.setClearColor(new THREE.Color(0x000000))
    const fov = 111
    const aspect = 4333
    const near = 0.1
    const far = 13
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 4// 给定相机位置
    camera.lookAt(new THREE.Vector3(0, 0, 0))//让相机指向原点
    // 创建一个场景
    const scene = new THREE.Scene()

    // 添加灯光
    const color = 0x606060
    const intensity = 1
    const light = new THREE.AmbientLight(color, intensity)
    // light.position.set(0, 2, 4)
    //将灯光添加到场景中
    scene.add(light)
    let directionalLight = new THREE.DirectionalLight(0xffffff)
    directionalLight.position.set(1, 0.75, 0.5).normalize()
    scene.add(directionalLight)

    // 创建一个立方体  也就是几何体
    const boxWidth = 1
    const boxHeight = 1
    const boxDepth = 1
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)
    // 添加材质 颜色
    const material = new THREE.MeshLambertMaterial({color: 0x44aa88})

    //创建一个网格  添加 几何体和材质

    const cube = new THREE.Mesh(geometry, material)


    cube.position.set(1, 0.9, 0)
    scene.add(cube)

    // 将场景和相机全部都放到render函数中

    // 添加控制器
    const control = new OrbitControls(camera, renderer.domElement)
    control.target = new THREE.Vector3(0, 0, 0)

    // 添加坐标轴
    const axesHelper = new THREE.AxesHelper(4)
    scene.add(axesHelper)

    function render(time: number) {
      time *= 0.0004
      // cube.rotation.x = time
      // cube.rotation.y = time
      // control.update()


      if (isDirection.value) {
        if (cube.position.y > 3.0) {
          isDirection.value = false
        } else {
          cube.position.y += 0.01
        }
      } else {
        if (cube.position.y < 0) {
          isDirection.value = true
        } else {
          cube.position.y -= 0.01
        }
      }

      // if(cube.position.y> -1 && cube.position.y < 2){
      //   cube.position.y += 0.01
      // }
      if (resizeRendererToDisplaySize(renderer)) {
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
