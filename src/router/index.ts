import {createRouter, createWebHashHistory} from 'vue-router'

import LineIndex from '@/view/lineIndex/index.vue'
import FontIndex from '@/view/fontIndex/index.vue'
import HomePage from '@/view/homePage/index.vue'
import Document from '@/view/document/index.vue'
import Controller from '@/view/controller/index.vue'
import AxesHelper from '@/view/axesHelper/index.vue'
import GsapPlugin from '@/view/gsapPlugin/index.vue'
import FullScreen from '@/view/fullScreen/index.vue'
import BasicType from '@/view/basicType/index.vue'
import Geometry from '@/view/geometry/index.vue'
import TextureImport from '@/view/textureImport/index.vue'
import Dispatch from '@/view/dispatch/index.vue'
import CanvasDrag from '@/view/canvasDrag/index.vue'
import Psychology from '@/view/psychology/index.vue'
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
          }, {
            path: 'axesHelper',
            name: 'AxesHelper',
            component: AxesHelper,
            meta: {
              message: '添加坐标轴'
            }
          },
          {
            path: 'gsapPlugin',
            name: 'GsapPlugin',
            component: GsapPlugin,
            meta: {
              message: '添加 gsap 动画'
            }
          }, {
            path: 'fullScreen',
            name: 'FullScreen',
            component: FullScreen,
            meta: {
              message: '全屏操作'
            }
          },{
            path: 'geometry',
            name: 'Geometry',
            component: Geometry,
            meta: {
              message: '几何体'
            }
          },{
            path: 'textureImport',
            name: 'TextureImport',
            component: TextureImport,
            meta: {
              message: '引入纹理'
            }
          },
        ]
      }, {
        path: 'ts',
        name: 'TS',
        redirect: {name: 'LineIndex'},
        meta: {
          message: 'TS 相关'
        },
        children: [
          {
            path: 'basicType',
            name: 'BasicType',
            component: BasicType,
            meta: {
              message: 'ts 基础相关'
            }
          },
        ]
      },{
        path: 'canvas',
        name: 'Canvas',
        redirect: {name: 'CanvasIndex'},
        meta: {
          message: 'canvas 相关'
        },
        children: [
          {
            path: 'dispatch',
            name: 'Dispatch',
            component: Dispatch,
            meta: {
              message: 'canvas事件'
            }
          },{
            path: 'canvasDrag',
            name: 'CanvasDrag',
            component: CanvasDrag,
            meta: {
              message: 'canvas拖拽'
            }
          },
        ]
      },{
        path: 'psychology',
        name: 'Psychology',
        redirect: {name: 'Psychology'},
        meta: {
          message: '心理学相关'
        },
        children: [
          {
            path: 'index',
            name: 'Index',
            component: Psychology,
            meta: {
              message: '初识心理学'
            }
          }
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


