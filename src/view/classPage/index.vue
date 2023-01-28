<template>
  index3
</template>
<script setup>

  import {onMounted} from 'vue'
  import ClassDemo1 from './demo.js'
  import Demo2 from './demo2.js'
  onMounted(()=>{
    console.group('class 类的写法')

    console.log('typeof ClassDemo1',typeof ClassDemo1) //function
    console.log( 'ClassDemo1 === ClassDemo1.prototype.constructor',
                 ClassDemo1 === ClassDemo1.prototype.constructor) // true
    const classDemo = new ClassDemo1(1,3) // new 操作符 是创建实例
    classDemo.methodCode() // classDemo 的函数 通过实例调用


    classDemo.getAndSetValue = 100 // 触发实例的 set

    console.log(classDemo.getAndSetValue) // 触发实例的 get
    console.log(ClassDemo1.demoStaticMethod()) // 使用静态方法
    console.groupEnd()


    console.group('demo2 类的写法')
    const demo = new Demo2()

    demo.prop = 100
    console.log(demo.prop)
    console.groupEnd()

  })

</script>
