<template>
  <h4>vue3 操作DOM(模板引用)</h4>
  <high-code :code-string="templateCode" />
  <input ref="input" type="text">
  <div ref="divDom" class="ref-div-dom">divDom</div>
  <el-button type="primary" @click="divHandle()">增加div高度</el-button>
  <el-divider content-position="left">以上是通过 ref 修改css</el-divider>
  <h4>在v-for中使用模板的引用</h4>
  <high-code :code-string="vForCode" />
  <ul>
    <li v-for="(item, index) in list" ref="ItemRef" :key="item.key" @click="itemListHandle(item,index)">
      {{
        item.name
      }}
    </li>
  </ul>
  <span> 注: ref中的数组并不保证与源数组顺序相同</span>
  <el-divider content-position="left">以上是通过 v-for 循环添加ref的修改</el-divider>
</template>
<script lang="ts" setup>
  import {onMounted, ref} from 'vue'

  // 声明一个同名的ref

  const input = ref<HTMLInputElement | null>(null) // input的引用

  let divDom = ref<HTMLDivElement | null>(null) // div的引用

  let height = 100
  const divHandle = () => {
    height += 10
    const boxProxy: any = divDom
    console.log(divDom.value?.style)
    console.log('boxProxy.value', boxProxy.value)
    if (divDom.value) {
      // divDom.value.style = `height: ${height}px`
      // 在webstorm 中会提示 Cannot assign to 'style' because it is a read-only property.
      divDom.value.setAttribute('style', `height: ${height}px`)
    }
    input.value?.setAttribute('style', 'color: red')
    // divDom.value?.style.background = 'black'
  }

  const list = ref([{
    name: 'name1',
    key: 100
  }, {
    name: 'name2',
    key: 101
  }])

  const ItemRef = ref(null)

  const itemListHandle = (item: any, index: number) => {
    console.log(item, index)
    console.log(ItemRef.value)
    ItemRef.value && (ItemRef.value[index] as HTMLDivElement).setAttribute('style','color: red')
  }
  onMounted(() => {
    console.log(input.value)
    console.log(input.value?.offsetHeight)
    console.log(divDom.value)

    console.log(ItemRef.value)
  })

  const templateCode = `const input = ref<HTMLInputElement | null>(null) // input的引用

    let divDom = ref<HTMLDivElement | null>(null) // div的引用

    let height = 100
    const divHandle = () => {
      height += 10
      const boxProxy: any = divDom
      console.log(divDom.value?.style)
      console.log('boxProxy.value', boxProxy.value)
      if (divDom.value) {
        // divDom.value.style = \`height: ${height}px\`
        // 在webstorm 中会提示 Cannot assign to 'style' because it is a read-only property.
        divDom.value.setAttribute('style', \`height: ${height}px\`)
      }
      input.value?.setAttribute('style', 'color: red')
      // divDom.value?.style.background = 'black'
    }
  `

  const vForCode = `const list = ref([{
      name: 'name1',
      key: 100
    }, {
      name: 'name2',
      key: 101
    }])

    const ItemRef = ref(null)

    const itemListHandle = (item: any, index: number) => {
      console.log(item, index)
      console.log(ItemRef.value)
      ItemRef.value && (ItemRef.value[index] as HTMLDivElement).setAttribute('style','color: red')
    }`
</script>

<style lang="less">
.ref-div-dom {
  display: inline-block;
  height: 100px;
  border: 1px solid black;
  width: 100px;
}
</style>
