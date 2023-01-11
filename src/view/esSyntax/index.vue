<template>
  <h4>Set 和 Map 数据结构</h4>
</template>
<script lang="ts">

  const setList = new Set()

  const arr1 = [ 3, 5, 4, 5, 2, 2 ]

  arr1.forEach(item=>{
    setList.add(item)
  })

  console.log(setList)

  setList.forEach((key,value)=>{
    console.log(key,value)
    if(key === 2){
      console.log('value',value, typeof value)
    }
  })

  for(let i = 0;i<setList.size;i++){
    if(setList.has(2)){
    }
  }
</script>
