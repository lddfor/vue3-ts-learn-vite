<template>
  <h2>TS各种类型</h2>
  <p>input类型</p>
  <input type="text" @change="inputChange">
  <div id="div-attr"> div 类型</div>
  <div id="beforeParent">
    before
    <div id="childrenList">childrenList111</div>
    <div id="childrenList2" />
  </div>

  <p>canvas 类型</p>

  <canvas id="canvas" />


  <p>setTimeout</p>
</template>
<script lang="ts" setup>

  import {onMounted} from 'vue'
  const inputChange = (event: Event) => {
    console.log((event.target as HTMLInputElement).value)
  }
  onMounted(() => {
    // appendChild
    const div: HTMLDivElement = document.createElement('div')
    div.style.height = 100 + 'px'
    div.style.width = 100 + 'px'
    div.style.backgroundColor = 'deeppink'
    const node = document.createTextNode('this is div')
    div.appendChild(node)
    let divAttr = document.getElementById('div-attr') as HTMLDivElement
    divAttr.appendChild(div)


    // 使用 insertBefore
    // 先创建一个标签
    let createElement = document.createElement('span') as HTMLSpanElement
    createElement.appendChild(document.createTextNode('this is before'))
    // 获取要被插入的节点
    let childrenList = document.getElementById('childrenList') as HTMLDivElement
    let childrenList2 = document.getElementById('childrenList2') as HTMLDivElement
    let beforeParent = document.getElementById('beforeParent') as HTMLDivElement

    // parent的节点父节点的引用
    // let childrenListParent = childrenList!.parentNode as Node
    beforeParent.insertBefore(createElement, childrenList2)


    // image 元素
    const img: HTMLImageElement = document.createElement('img')
    img.alt = 'image alt'
    img.src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F11%2F20200411232458_JATfu.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671809916&t=9af6700f705f422d8702aca6b47dfd3a'
    beforeParent.insertBefore(img, childrenList2)

    const canvas: HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement
    if (canvas) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    }

    let timeout: number = window.setInterval(() => {
      console.log(3)
    }, 20)
    clearInterval(timeout)
  /**
   * this.intervalId = Number(setInterval(() => {
   *       // do something
   *     }, 1000));
   *
   */
  })


</script>
