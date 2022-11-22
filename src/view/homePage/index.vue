<template>
  <div class="home-wrapper">
    home-page 页面
    <el-button type="primary" @click="openFullScreen2">loading</el-button>
    <el-button type="success">3</el-button>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script lang="ts" setup>
  import {ElLoading} from 'element-plus'

  const openFullScreen2 = () => {
   const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
   })
   setTimeout(() => {
    loading.close()
   }, 2000)
  }
</script>

<style lang="less" scoped>

</style>
