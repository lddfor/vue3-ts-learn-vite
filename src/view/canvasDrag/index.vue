<template>
  <!--  <div>-->
  <!--    canvasDrag-->
  <!--  </div>-->
  <div>
    <!--    <div>canvas 实例</div>-->
    <canvas id="canvas" width="400" height="400" />
  </div>
</template>
<script lang="ts" setup>
  import {onMounted} from 'vue'
  import CanvasDrag from './canvas'
  onMounted(()=>{
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    // 初始化canvas
    const dragInstance = new CanvasDrag(canvas)
  })
</script>
<style lang="less" scoped>

#canvas{
  border: 1px solid green;
}

</style>
