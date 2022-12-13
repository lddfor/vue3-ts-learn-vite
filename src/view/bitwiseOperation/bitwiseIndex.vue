<template>
  <div>
    <h3>js 位运算</h3>
    <p>见console.log</p>
  </div>
</template>
<script lang="ts" setup>
  import {onMounted} from 'vue'

  onMounted(() => {
    console.log(1 & 3)


    console.log('js 中位运算的用处')

    console.group('判断奇偶 结果 & 1 = 0 就是偶数  & 1 = 1 就是奇数')
    console.log('2 & 1',2 & 1)
    console.log('3 & 1',3 & 1)
    console.log('4 & 1',4 & 1)
    console.log('5 & 1',5 & 1)
    console.groupEnd()

    console.log(8.33 >> 2)
    console.log(1 << 24)
  })


  const _rgbToHex = (r:number, g:number, b:number) =>{
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }
  console.log('_rgbToHex(3, 51, 255)','#' + _rgbToHex(23, 51, 255))
</script>
<style lang="less" scoped></style>
