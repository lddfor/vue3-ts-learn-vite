<template>
  <div>
    <canvas id="canvas-drag" width="400" height="400" />
  </div>
  <div>
    <canvas id="canvas" width="200" height="200" />
  </div>
</template>
<script lang="ts" setup>
  import {onMounted} from 'vue'
  import CanvasDrag from './canvas'
  import CanvasDragHandle from './canvasDrag'
  onMounted(()=>{
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    // 初始化canvas
    const dragInstance = new CanvasDrag(canvas)
    // 第二个拖拽

    const canvasDrag = document.getElementById('canvas-drag') as HTMLCanvasElement
    const canvasDragHandle = new CanvasDragHandle(canvasDrag)
  })
</script>
<style lang="less" scoped>

#canvas{
  border: 1px solid green;
}

#canvas-drag{
  border: 1px solid green;
}

</style>
