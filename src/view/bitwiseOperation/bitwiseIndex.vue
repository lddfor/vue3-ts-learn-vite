<template>
  <div>
    <h3>js 位运算</h3>
    <p>见console.log</p>
    <div id="picture" />
  </div>
</template>
<script lang="ts" setup>
  import {onMounted} from 'vue'
  import utilsInstance, {Utils} from '@/utils/utils'
  import colorUtilsInstance, {ColorUtils} from '@/utils/colorUtils'

  onMounted(() => {
    console.log(1 & 3)


    console.log('js 中位运算的用处')

    console.group('判断奇偶 结果 & 1 = 0 就是偶数  & 1 = 1 就是奇数')
    console.log('2 & 1', 2 & 1)
    console.log('3 & 1', 3 & 1)
    console.log('4 & 1', 4 & 1)
    console.log('5 & 1', 5 & 1)
    console.groupEnd()
    console.log(utilsInstance._isElement(document.body))
    console.log(utilsInstance._isArray([2]))
    console.log(utilsInstance._isBoolean(true))
    console.log(utilsInstance.createCanvasElement())
    let pictureDom = document.getElementById('picture') as HTMLDivElement
    let imgLabel = utilsInstance.createImageElement()
    imgLabel.src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F45%2Ff0%2F71%2F45f07166bddcd586f364b249fcd802c0.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673510902&t=561e0ed0c2f01a2f0e62302e338db6e9'
    pictureDom.appendChild(imgLabel)
    pictureDom.appendChild(utilsInstance.createCanvasElement())


    console.group('颜色切换函数')
    console.log('_rgbToHex', colorUtilsInstance._rgbToHex(22, 33, 44)) //16212c
    console.log('_rgbToHexHasOperator', colorUtilsInstance._rgbToHexHasOperator(22, 33, 44)) //#16212c
    console.log('utilsInstance._hexToRgb', colorUtilsInstance._hexToRgb('#16212c')) // {r: 22, g: 33, b: 44}

    console.log('ColorUtils._getRandomColor()', ColorUtils._getRandomColor())
    console.log('getRGB', colorUtilsInstance.getRGB('blue'))
    console.log('\'#157d93b5\'', colorUtilsInstance.getRGB('#157d93b5'))
    console.log('getRGB', colorUtilsInstance.getRGB('#eeeeee'))
    console.log('getRGB', colorUtilsInstance.getRGB('rgb(0,0,255)'))

    console.log('colorUtilsInstance._nameColorToRGBA', colorUtilsInstance._nameColorToRGBA('blue'))
    console.log('colorUtilsInstance._rgbColorToRGBA', colorUtilsInstance._rgbColorToRGBA('rgb(0,0,255)'))
    console.log('colorUtilsInstance._rgbaColorToRGBA', colorUtilsInstance._rgbaColorToRGBA('rgba(0,0,255,.2)'))
    console.log('colorUtilsInstance._hex6ColorToRGBA', colorUtilsInstance._hex6ColorToRGBA('#16212c'))
    console.log('colorUtilsInstance._hslColorToRGBA', colorUtilsInstance._hslColorToRGBA('hsl(300, 76%, 72%)'))
    console.groupEnd()
  })

</script>
<style lang="less" scoped></style>
