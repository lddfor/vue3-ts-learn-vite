import {createMemoryHistory, createRouter, createWebHashHistory} from 'vue-router'

import LineIndex from '@/view/lineIndex/index.vue'
import FontIndex from '@/view/fontIndex/index.vue'
import HomePage from '@/view/homePage/index.vue'
import Document from '@/view/document/index.vue'
import Controller from '@/view/controller/index.vue'
import Home from '@/view/home/index.vue'

const About = {template: '<div>About</div>'}

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: {name: 'HomePage'},
    component: Home,
    children: [
      {
        path: 'homePage',
        name: 'HomePage',
        component: HomePage,
        meta: {
          message: '首页'
        }
      },
      {
        path: 'line',
        name: 'Line',
        redirect: {name: 'LineIndex'},
        meta: {
          message: 'THREEJS 基础'
        },
        children: [
          {
            path: 'lineIndex',
            name: 'LineIndex',
            component: LineIndex,
            meta: {
              message: '画线'
            }
          },
          {
            path: 'fontIndex',
            name: 'FontIndex',
            component: FontIndex,
            meta: {
              message: '3D效果'
            }
          },
          {
            path: 'document',
            name: 'Document',
            component: Document,
            meta: {
              message: '基础文档'
            }
          }, {
            path: 'controller',
            name: 'Controller',
            component: Controller,
            meta: {
              message: '添加控制器'
            }
          },
        ]
      },


    ]
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login,
  //   meta: {
  //     message: '登录'
  //   }
  // },

  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      message: 'about'
    }
  }
]


const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})

export {router}


