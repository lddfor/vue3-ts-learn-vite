<template>
  index3
</template>
<script setup>

  import {onMounted} from 'vue'
  import ClassDemo1 from './demo.js'
  onMounted(()=>{
    console.group('class 类的写法')
    const classDemo = new ClassDemo1(1,3)
    classDemo.methodCode()
    console.groupEnd()
  })

</script>
