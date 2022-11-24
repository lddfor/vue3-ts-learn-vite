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
    renderer.setClearColor(new THREE.Color(0x000000))
    const fov = 111
    const aspect = 4333
    const near = 0.1
    const far = 13
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 3// 给定相机位置
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
    const boxHeight = 1.5
    const boxDepth = 1
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)
    const geometrySecond = new THREE.BoxGeometry(boxWidth, boxHeight, 1)
    // 添加材质 颜色
    const material = new THREE.MeshLambertMaterial({color: 0x44aa88})
    const materialOther = new THREE.MeshLambertMaterial({color: 0x44aa88})
    //创建一个网格  添加 几何体和材质

    const cube = new THREE.Mesh(geometry, material)
    const cubeOther = new THREE.Mesh(geometrySecond, materialOther)
    console.log('cube', cube)
    cube.position.set(0, 0, 0)
    cubeOther.position.set(1, 1, 0)
    // cube.material[1]
    scene.add(cube, cubeOther)
    console.log('scene', scene)
    const gui = new gat.GUI()
    gui.add(cube.position, 'x').min(-1).max(3).step(0.1).name('x轴修改')
    // 将场景和相机全部都放到render函数中

    const params = {
      color:  0x44aa88
    }
    gui.addColor(params, 'color').onChange((value: any) => {
      cubeOther.material.color.set(value)
    })
    // 添加控制器
    const control = new OrbitControls(camera, renderer.domElement)
    control.target = new THREE.Vector3(0, 0, 0)
    control.enableDamping = true // 添加阻尼控制  control 要进行 update() 调用
    // 添加坐标轴
    const axesHelper = new THREE.AxesHelper(4)
    scene.add(axesHelper)
    let direction = gsap.timeline()
    // direction.to(cube.scale, {y: 0.4, duration: 1,repeat: 2})
    // direction.to(cube.rotation, {y: Math.PI / 2, duration: 1})
    // direction.to(cube.position, {x: 2, duration: 1})
    // direction.to(cube.rotation, {x: Math.PI, duration: 1})
    // direction.to(cube.position, {
    //   y: -2, duration: 1, onComplete: () => {
    //     console.log('动画完成')
    //   }
    // })
    // direction.to(cube.position, {
    //   y: 0, duration: 1, onComplete: () => {
    //     console.log('动画完成')
    //   }
    // })
    // direction.to(cube.position, {
    //   x: 0, duration: 1, onComplete: () => {
    //     console.log('动画完成')
    //   }
    // })
    gsap.to(cubeOther.position, {y: 2, duration: 1, repeat: -1, 'yoyo': true})
    // gsap.to(cube.position, {y: 2, duration: 1, repeat: -1, 'yoyo': true})
    // repeat 要和 yoyo 一同使用

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
    width: 800px;
  }

  touch-action: none
}

</style>
