<template>
  <div class="header">
    header22 222
    <div class="header-element">header-element</div>
  </div>
  <div class="hello">hello</div>
  <!--  <img alt="tree" :src="tree">-->
  <!--  <hello-world msg="3"></hello-world>-->
  <p>
    {{ string1 }}11code {{ code }}
  </p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import '@/styles/header.less'
import '@styles/header.less'
// import HelloWorld from '@components/HelloWorld.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import obj1 from '@/utils'
import tree from '@/assets/images/tree.png'
import code from '@/utils/index'

import pkgJson from '../package.json'

console.log('pkgJson', pkgJson)
console.log(obj1.age)
console.log(code)
const string1 = ref('')
string1.value = JSON.stringify(code).toString()


console.log('import', import.meta)
console.log('import.meta', import.meta.env)
console.log('import.meta', import.meta.env)

</script>

<style scoped>

</style>
