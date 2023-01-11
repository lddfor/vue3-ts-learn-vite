<template>
  <h4>Set 和 Map 数据结构</h4>
</template>
<script lang="ts" setup>

  import {onMounted} from 'vue'


  onMounted(() => {
    const setList = new Set()

    const arr1 = [3, 5, 4, 5, 2, 2]

    arr1.forEach(item => {
      setList.add(item)
    })

    console.log(setList)

    setList.forEach((key, value) => {
      console.log(key, value)
      if (key === 2) {
        console.log('value', value, typeof value)
      }
    })

    for (let i = 0; i < setList.size; i++) {
      if (setList.has(2)) {
      }
    }

    //  数组去重
    const setOne = new Set([3, 5, 4, 5, 2, 2])
    console.log([...setOne].sort(function (a, b) {
      return b - a
    }))
    let setResult = [...setOne].sort(function (a, b) {
      return b - a
    })

    console.log(setResult)
    console.log(setOne.size)

    // 使用 new Set 实现交集 并集 差集

    let array1 = new Set([2, 3, 4, 7, 9])
    let array2 = new Set([3, 4, 7, 9, 10, 11])
    // 求两个交集
    let a: number[] = []
    let beMixed = new Set([...array1].filter(item=> array2.has(item)))

    console.log('beMixed',beMixed)
    console.log('a',a)
    // 求两个并集
    let allArray = new Set([...array1, ...array2])
    console.log([...allArray])


    //  Map
    const map1 = new Map()
    const key1 = 'this is key'
    const value1 = 'this is value'
    map1.set(key1, value1)
    console.log('map1',map1)
    console.log('map1',map1.get(key1))
    console.log('map1.has(key1)',map1.has(key1)) // true
    console.log('map1.delete(key1)',map1.delete(key1)) // true
    console.log('map1.has(key1)',map1.has(key1)) // false
  })
</script>
