<template>
  <p>
    1. 首先要有一个渲染器 Renderer 这可以说是three.js 的主要对象, 你传入一个场景 Scene
    和一个摄像机 Camera 和 渲染器 Renderer 中 , 然后他会讲摄像机的视锥体中的三维场景渲染成一个二维图片 显示在画布中
  </p>
  <p>
    其次有一个场景图他是一个树状结构, 由很多对象组成, 比如图中包含了一个场景Scene 对象
    多个网格Mesh 对象, 光源 Light 群组Group 三维物体 Object3D 和 摄像机 Camera 对象
  </p>
  <p>
    1.1 一个场景Scene 对象定义了场景图最基本的要素, 并包含了背景色和雾 等属性 这些对象通过一个
    层级关系明确的树状结构来展示出各自的位置和方向,子对象的位置和方向总是相对于父对象而言的
    比如汽车的轮子是汽车的子对象 , 这样移动和定位汽车时 就会自动移动轮子
  </p>
  <p>
    1.2网格 Mesh 对象可以理解为用一种特定的才是 Material 来绘制的一个特定的几何体 Geometry
    材质 Material 和 几何体 Geometry 可以被多个网格 Mesh 对象使用, 比如在不同的位置画出两个蓝色立方体
    我们会需要两个网格Mesh 对象来代表每个立方体的位置和方向, 但只需要一个Geometry 来存放立方体的定点数据
    和一种材质 Material 来定义一个立方体的颜色为蓝色即可, 两个网格Mesh 对象都引用了相同的几何体 Geometry
    和材质 Material
  </p>
  <p>
    1.3几何体 Geometry 对象顾名思义代表一些几何体 如球体 立方体 平面 狗 猫等物体的顶点信息 Three.js 内置了许多的基本几何体
    你也可以创建自定义几何体 或者 从文件中加载几何体
  </p>
  <p>
    1.4 材质 Material 对象代表的是绘制几何体的表面属性, 包括使用的颜色 和光亮程度, 一个材质
    可以引入一个或者多一个纹理 这些纹理可以用来 打个比方, 将图像包裹到几何体的表面
  </p>
  <p>
    1.5 纹理 Texture 对象通常表示一幅 从文件中加载 要么在画布上生成, 要么由另一个场景渲染出的 图像
  </p>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
p {
  margin-top: 16px;
  margin-bottom: 16px;
  line-height: 28px;
}
</style>
