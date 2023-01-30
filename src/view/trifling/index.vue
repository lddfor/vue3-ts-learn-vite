<template>
  <h4>切换yarn镜像 (关键词:镜像)</h4>
  <high-code :code-string="code" />


  <h4>package.json中^,~的区别 (关键词: package.json)</h4>
  <high-code :code-string="pageAgeJsonCode" />


  <h4>函数柯里化</h4>
  <p>柯里化的定义: 是指将一个多参数的函数拆分成一系列的函数,每个拆分后的函数都只接受一个参数</p>
  <high-code :code-string="curryCode" />

  <h4> Null 判断运算符  ?? 用来判断undefined 或者 null 值, 0 和false 不在判断条件里面  (关键词:?? 双问好运算符)</h4>
  <high-code :code-string="codeQuestionMark" />
</template>
<script lang="ts" setup>
  import {onMounted, ref} from 'vue'
  let code = ref('')

  let pageAgeJsonCode = ref('')

  let curryCode = ref('')

  let codeQuestionMark = ref('')
  onMounted(()=>{
    code.value = `临时修改  yarn save 软件名 --registry https://registry.npm.taobao.org/
    全局修改  yarn config set registry https://registry.npm.taobao.org/`

    pageAgeJsonCode.value = `指定版本：比如"classnames": "2.2.5"，表示安装2.2.5的版本
    波浪号~+指定版本：比如 "babel-plugin-import": "~1.1.0",表示安装1.1.x的最新版本（不低于1.1.0），但是不安装1.2.x，也就是说安装时不改变大版本号和次要版本号
    ^+指定版本：比如 "antd": "^3.1.4",，表示安装3.1.4及以上的版本，但是不安装4.0.0，也就是说安装时不改变大版本号。
    `


    codeQuestionMark.value = `const isZero = 0
    const isFalse = false
    const isNull = null
    const isUndefined = undefined
    let result = isZero ?? 'is result'
    console.log(result) // 0
    let resultFalse = isFalse ?? 'is result'
    console.log(resultFalse) // false
    let resultNull = isNull ?? 'is result'
    console.log(resultNull) // is result
    let resultUndefined = isUndefined ?? 'is result'
    console.log(resultUndefined)// is result`



    curryCode.value = `function addCurrying(a:number ){
      return function(b:number){
        return a + b
      }
    }

    const addCurryingCopy = (x: any) => (y: any) => x + y
    const f = addCurrying(2) // 此时返回的是一个函数 再继续使用返回的函数进行调用
    console.log('const f = addCurrying(2) => f(4)',f(4))`
  })
</script>
