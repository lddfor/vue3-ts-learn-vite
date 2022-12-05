<template>
  <div>
    canvasDrag
  </div>
  <div>
    <div>canvas 实例</div>
    <canvas id="canvas" width="400" height="400" />
  </div>
</template>
<script lang="ts" setup>
  import {onMounted} from 'vue'

  onMounted(()=>{
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    const text = context.measureText('hello canvas')
    console.log(text)
  })
</script>
<style lang="less" scoped>

#canvas{

}

</style>
