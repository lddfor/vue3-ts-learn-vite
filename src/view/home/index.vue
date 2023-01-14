<template>
  <div class="home-wrapper">
    <el-container>
      <el-aside :class="{ 'aside-wrapper': true }" class="aside-wrapper">
        <logo />
        <el-scrollbar class="aside-menu-scroll">
          <AsideMenu />
        </el-scrollbar>
      </el-aside>
      <el-container class="container-wrapper">
        <header-component />
        <el-main>
          <el-scrollbar>
            <div class="scroll-right">
              <router-view />
            </div>
            <!-- 以下是路由的动画, 切换时要保证组件的 只有一个root节点才起作用 -->
            <!-- <router-view v-slot="{ Component }">
              <transition name="slide-fade">
                <component :is="Component" />
              </transition>
            </router-view> -->
          </el-scrollbar>
        </el-main>
        <el-footer class="footer-wrapper" />
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import {ElLoading, ElMessage} from 'element-plus'
  import {useRouter} from 'vue-router'
  import AsideMenu from '@/components/menu/index.vue'
  import HeaderComponent from '@/components/header/index.vue'
  import Logo from '@/components/logo/index.vue'
  import axios from 'axios'
  import {onMounted} from 'vue'
  import {getBaseMessage} from '@/api/user'

  onMounted(()=>{
    // axios.get('/user/sys-config/configInfo?type=1').then(result=>{
    //   console.log(result)
    // })
    // const instance = axios.create({
    //   baseURL:'http://amt.livedev1.zkjin.com/backend',
    //   timeout: 1000
    // })
    // instance.get('/user/sys-config/configInfo?type=1').then(res=>{
    //   console.log('res',res)
    // })
    getBaseMessage({
      type:1
    }).then(res=>{
      console.log(res)
    })
  })

  const open = () => {
    ElMessage('this is a message.')
    ElMessage.info('info')
    ElMessage.error('error')
    ElMessage.success('success')
    ElMessage.warning('warning')
  }

  const openFullScreen2 = () => {
    const loading = ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    setTimeout(() => {
      loading.close()
    }, 2000)
  }

  const router = useRouter()
  const routerHandle = () => {
    router.push({
      name: 'Login'
    })
  }
</script>

<style lang="less" scoped>
.home-wrapper {
  height: 100vh;
  overflow-y: auto;

  .el-main {
    padding-right: 0;
    padding-top: 8px;
    padding-left: 8px;
  }

  .ep-menu {
    border-right: none;
  }

  .slide-fade-enter-active {
    transition: all 0.1s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

  .scroll-right {
    padding-right: 12px;
    //padding-top: 20px;
  }

  .aside-wrapper {
    background: #304156;
    height: 100vh;
    box-sizing: border-box;
    transition: all 0.5s ease;
    width: 200px;

    .aside-menu-scroll {
      height: calc(100vh - 55px);
    }
  }

  .active {
    width: 60px;
  }

  .container-wrapper {
    height: 100vh;

    .ep-main {
      padding-right: 0;
      //padding-top: 10;
    }

    .footer-wrapper {
      height: 0;
      //line-height: 15px;
      //background: #bebebe;
      //font-size: 13px;
    }
  }

  .main-wrapper {
    height: 100vh;
  }
}

.ep-button {
  margin: 4px;
}
</style>
