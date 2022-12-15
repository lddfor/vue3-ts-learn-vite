<template>
  <div>
    <canvas id="canvas-drag" width="400" height="400" />
    <p>如果不存在矩形会进行绘制 如果存在会进行拖拽, 每一次拖拽都会放置在最上层. 记录上一次拖拽的矩形</p>
  </div>
  <div>
    <canvas id="canvas" width="200" height="200" />
  </div>
  <div style="background: #213547">
    <canvas id="path-canvas" />
  </div>
  <el-popover
    placement="bottom-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button class="m-2">Hover to activate</el-button>
    </template>
  </el-popover>
</template>
<script lang="ts" setup>
  import {onMounted} from 'vue'
  import CanvasDrag from './canvas'
  import CanvasDragHandle from './canvasDrag'

  onMounted(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    // 初始化canvas
    const dragInstance = new CanvasDrag(canvas)
    // 第二个拖拽

    const canvasDrag = document.getElementById('canvas-drag') as HTMLCanvasElement
    const canvasDragHandle = new CanvasDragHandle(canvasDrag)


    function customizePath(path:any, func:Function) {
      const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      pathElement.setAttributeNS(null, 'd', path)
      const length = pathElement.getTotalLength()
      const duration = 1000
      const interval = length / duration
      let time = 0, step = 0

      const timer = setInterval(function () {
        if (time <= duration) {
          const x = parseInt(pathElement.getPointAtLength(step).x as any)
          const y = parseInt(pathElement.getPointAtLength(step).y as any)
          func(x, y)
          step++
        } else {
          clearInterval(timer)
        }
      }, interval)
    }

    const path = 'M0,0 C8,33.90861 25.90861,16 48,16 C70.09139,16 88,33.90861 88,56 C88,78.09139 105.90861,92 128,92 C150.09139,92 160,72 160,56 C160,40 148,24 128,24 C108,24 96,40 96,56 C96,72 105.90861,92 128,92 C154,93 168,78 168,56 C168,33.90861 185.90861,16 208,16 C230.09139,16 248,33.90861 248,56 C248,78.09139 230.09139,96 208,96 L48,96 C25.90861,96 8,78.09139 8,56 Z'
    const pathCanvas = document.querySelector('#path-canvas') as HTMLCanvasElement
    const context = pathCanvas.getContext('2d') as CanvasRenderingContext2D

    function move(x: number, y: number) {
      context.clearRect(0, 0, pathCanvas!.width, pathCanvas!.height)
      context.beginPath()
      context.arc(x, y, 25, 0, Math.PI * 2, true)
      context.fillStyle = '#f0f'
      context.fill()
      context.closePath()
    }

    customizePath(path, move)
  })
</script>
<style lang="less" scoped>

#canvas {
  border: 1px solid green;
}

#canvas-drag {
  border: 1px solid green;
}

</style>
