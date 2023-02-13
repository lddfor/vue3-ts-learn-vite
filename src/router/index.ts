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
import psychologyList from '@/view/psychology/index.vue'
import Bitwise from '@/view/bitwiseOperation/bitwiseIndex.vue'
import Home from '@/view/home/index.vue'
import ESSyntax from '@/view/esSyntax/index.vue'
import ClassPage from '@/view/classPage/index.vue'
import Currying from '@/view/currying/index.vue'
import Trivial from '@/view/trivial/index.vue'
import Trifling from '@/view/trifling/index.vue'
import TsHasError from '@/view/tsHasError/index.vue'
import ComponentFunction from '@/view/componentFunction/index.vue'

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
          }, {
            path: 'geometry',
            name: 'Geometry',
            component: Geometry,
            meta: {
              message: '几何体'
            }
          }, {
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
          },{
            path: 'tsHasError',
            name: 'TsHasError',
            component: TsHasError,
            meta: {
              message: 'ts开发遇到的问题'
            }
          },
        ]
      }, {
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
          }, {
            path: 'canvasDrag',
            name: 'CanvasDrag',
            component: CanvasDrag,
            meta: {
              message: 'canvas拖拽'
            }
          },
        ]
      }, {
        path: 'bitwiseOperation',
        name: 'BitwiseOperation',
        redirect: {name: 'BitwiseOperation'},
        meta: {
          message: 'JavaScript杂项'
        },
        children: [
          {
            path: 'bitwise',
            name: 'Bitwise',
            component: Bitwise,
            meta: {
              message: 'JS位运算'
            }
          }, {
            path: 'trifling',
            name: 'Trifling',
            component: Trifling,
            meta: {
              message: '琐碎'
            }
          }
        ]
      }, {
        path: 'psychology',
        name: 'Psychology',
        redirect: {name: 'Psychology'},
        meta: {
          message: '心理学相关'
        },
        children: [
          {
            path: 'psychologyList',
            name: 'psychologyList',
            component: psychologyList,
            meta: {
              message: '初识心理学'
            }
          }
        ]
      }, {
        path: 'es6',
        name: 'ES',
        redirect: {name: 'ESSyntax'},
        meta: {
          message: '重新学习es6'
        },
        children: [
          {
            path: 'Syntax',
            name: 'syntax',
            component: ESSyntax,
            meta: {
              message: '重新学习es6'
            }
          }, {
            path: 'Class',
            name: 'class',
            component: ClassPage,
            meta: {
              message: 'class学习'
            }
          }, {
            path: 'currying',
            name: 'Currying',
            component: Currying,
            meta: {
              message: '数组功能'
            }
          }, {
            path: 'trivial',
            name: 'Trivial',
            component: Trivial,
            meta: {
              message: '模板引用'
            }
          }, {
            path: 'componentFunction',
            name: 'ComponentFunction',
            component: ComponentFunction,
            meta: {
              message: '组件'
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


