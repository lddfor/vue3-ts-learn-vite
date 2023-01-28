export default class ClassDemo1 {


  instanceValue1 = 'instanceValue1'
  instanceValue2 = 'instanceValue2'

  /**
   * constructor 方法是类的默认方法, 通过new 命令生成对象实例时, 自动调用该方法, 一个类必须有 constructor 方法
   * 如果没有显式的定义, 一个空的 constructor() 会被默认添加
   * @param x
   * @param y
   */
  constructor(x, y) {

    this.x = x
    this.y = y
    this.count = 0
    this.getAndSetValue = 10

  }

  // 实例属性的新写法,  get 和  set  不能直接获取this.count 然后和 get set 函数重名 会造成死循环


  get getAndSetValue(){
    return this.count
  }

  set getAndSetValue(value){
    // this.count + value
    console.log(this.count)
    this.count = value
  }

  /**
   * 静态方法 不能被实例继承 只能使用 类 调用
   *
   * 在函数前添加 static 关键字
   */

  static demoStaticMethod(){
    console.log(this)
    this.demoStaticMethod2()
    console.log('this.getAndSetValue',this.getAndSetValue)
    return true
  }

  static demoStaticMethod2(){
    console.log('第二个方法!')
  }

  changeCount(){
    this.count++
  }

  hasParamsCount(num){
    this.count = this.count + num
  }

  methodCode() {
    console.log(this.x, this.y)
  }
}


/**
 * 上面的方式等同于这个
 * function Point(){}
 * Point.prototype = {
 *   constructor(){},
 *   methodCode(){},
 * }
 */
