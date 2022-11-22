<template>
  <el-menu
    background-color="#304156"
    text-color="white"
    :default-active="defaultActive"
    active-text-color="#409eff"
  >
    <el-menu-item

      index="HomePage"
      route="homePage"
      @click="itemHandle({ index: 'HomePage' })">
      <el-icon>
        <setting />
      </el-icon>
      <template #title><span class="weight-700">首页</span></template>
    </el-menu-item>
    <el-sub-menu v-for="routerItem in result" :key="routerItem.path" :index="routerItem.path">
      <template v-if="routerItem.path !== 'homePage'" #title>
        <el-icon>
          <location />
        </el-icon>
        <span class="weight-700">{{ routerItem.path }}</span>
      </template>
      <template v-if="routerItem.children && routerItem.path !== 'homePage'">
        <el-menu-item
          v-for="item in routerItem.children"
          :key="item.name"
          :index="item.name"
          class="weight-700"
          @click="itemHandle"
        >
          {{ item.meta.message }}
        </el-menu-item>
      </template>
    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts">
  export default {
    name: 'AsideMenu'
  }
</script>
<script lang="ts" setup>
  import {reactive, ref} from 'vue'
  import {Location, Menu as IconMenu, Setting} from '@element-plus/icons-vue'
  import {useRoute, useRouter} from 'vue-router'

  interface Item {
    name?: string
    path?: string
    meta?: Object
    index: string
  }

  interface RouteItem {
    name: string
    path?: string
    component: any

    [x: string]: any
  }


  const route = useRoute()
  const router = useRouter()
  const defaultActive = ref<string | undefined>('')
  defaultActive.value = route.name as string

  console.log('router', router)
  const tem = router.options.routes.find((item) => item.name === 'Root')
  const routeList = reactive(tem!.children!)
  const result: RouteItem[] = []

  routeList.map((item: any) => {
    if (item.name !== 'HomePage') {
      result.push(item)
    }
  })
  console.log('result', result)
  const itemHandle = (item: Item) => {
    console.log('item', item)
    router.replace({
      name: item.index
    })
  }
</script>
<style lang="less" scoped>
.el-menu {
  border-right: none;
}

.weight-700 {
  font-weight: 700;
}
</style>
