<template>
  <h4>canvas的点击事件</h4>
  <p>判断点击事件是在canvas内部</p>
  <canvas id="dispatch" />
</template>
<script lang="ts" setup>
  import CanvasEvent from '@/utils/canvasEmit'
  import Canvas from '@/utils/canvas'
  import {onMounted} from 'vue'

  const handle = (params:string)=>{
    console.log('params', params)
  }
  const eventDispatch = new CanvasEvent()
  eventDispatch.on('click', handle)
  eventDispatch.emit('click','emitParams1')
  eventDispatch.remove('click', handle)
  eventDispatch.emit('click','emitParams2')
  eventDispatch.on('click', handle)
  eventDispatch.emit('click','emitParams3')

  onMounted(()=>{
    const canvas = new Canvas(document.getElementById('dispatch') as HTMLCanvasElement)
    const rect = canvas.rect({
      x: 0,
      y: 0,
      width: 150,
      height: 50,
      fillStyle: '#ccc'
    })
    const rect2 = canvas.rect({
      x: 30,
      y: 90,
      width: 30,
      height: 30,
      fillStyle: 'red'
    })

    const rect3 = canvas.rect({
      x: 35,
      y: 100,
      width: 30,
      height: 30,
      fillStyle: 'red'
    })
    canvas.draw()

    rect.on('click',(event:Event)=>{
      alert('点击了第一块绘制图形')
      console.log('rect click')
    })
    rect2.on('click',(event:Event)=>{
      console.log('rect2 click')
    })
    rect3.on('click', ()=>{
      console.log('rect3 click')
    })
    // rect.emit('click','emit 触发参数')
  })
</script>

<style lang="less" scoped>

#dispatch{
  height: 600px;
  width: 900px;
  background: #213547;
  margin-top: 10px;
}

</style>
