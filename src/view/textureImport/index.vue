<template>
  <div class="document">
    <canvas id="simple" />
    <h5>全屏操作 和 添加GUI</h5>
  </div>
</template>
<script lang="ts" setup>
  import {onMounted, ref} from 'vue'
  import * as THREE from 'three'
  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
  import gsap from 'gsap'
  import * as gat from 'dat.gui'
  import railingsJPG from '@/assets/images/railings.jpg'
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

    console.log('gat', gat)
    const canvas = document.querySelector('#simple') as HTMLCanvasElement
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    })
    renderer.setClearColor(new THREE.Color(0xEEEEEE))
    const fov = 130
    const aspect = 3
    const near = 2
    const far = 36
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 20// 给定相机位置
    camera.lookAt(new THREE.Vector3(0, 0, 0))//让相机指向原点
    // 创建一个场景
    const scene = new THREE.Scene()

    // 添加灯光  环境光
    const color = 0x606060
    const intensity = 1
    const light = new THREE.AmbientLight(color, intensity)
    light.position.set(20 , 20, 20)
    //将灯光添加到场景中
    scene.add(light)
    let directionalLight = new THREE.DirectionalLight(0xffffff, intensity)
    directionalLight.position.set(10, 10, 10).normalize()
    scene.add(directionalLight)

    // 创建一个立方体  也就是几何体
    const boxWidth = 14
    const boxHeight = 14
    const boxDepth = 14
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

    // 引入纹理
    const textureLoader = new THREE.TextureLoader()
    console.log('railingsJPG',railingsJPG)
    const railingsTexture = textureLoader.load('/src/assets/images/railings.jpg')
    // 添加材质 颜色
    const material = new THREE.MeshLambertMaterial(
      {
        // color: 0x44aa88,
        map: railingsTexture
      }
    )
    //创建一个网格  添加 几何体和材质

    const cube = new THREE.Mesh(geometry, material)

    cube.position.set(0, 0, 0)
    scene.add(cube)
    console.log('scene', scene)


    // 将场景和相机全部都放到render函数中


    // 添加控制器
    const control = new OrbitControls(camera, renderer.domElement)
    control.target = new THREE.Vector3(0, 0, 0)
    control.enableDamping = true // 添加阻尼控制  control 要进行 update() 调用
    // 添加坐标轴
    const axesHelper = new THREE.AxesHelper(16)
    scene.add(axesHelper)
    let direction = gsap.timeline()

    // gsap.to(cubeOther.position, {y: 2, duration: 1, repeat: -1, 'yoyo': true})

    window.addEventListener('dblclick', () => {
      // 双击如果不是全屏状态就进入全屏
      const fullScreen = document.fullscreenElement
      if (!fullScreen) {
        renderer.domElement.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    })

    function render(time: number) {
      time *= 0.0004
      control.update()
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
  position: relative;

  #simple {
    height: 700px;
    width: 900px;
  }

  touch-action: none
}

</style>
