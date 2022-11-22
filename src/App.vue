<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
  import {ref} from 'vue'

  let size = ref('default')
  let zIndex = ref(3000)
// import obj1 from '@/utils'
// import tree from '@/assets/images/tree.png'
// import code from '@/utils/index'
//
// import pkgJson from '../package.json'
// 
// console.log('pkgJson', pkgJson)
// console.log(obj1.age)
// console.log(code)
// const string1 = ref('')
// string1.value = JSON.stringify(code).toString()
//
//
// console.log('import', import.meta)
// console.log('import.meta', import.meta.env)
// console.log('import.meta', import.meta.env)

</script>

<style scoped>

</style>
