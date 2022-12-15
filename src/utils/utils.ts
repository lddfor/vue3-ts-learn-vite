
class Utils {
  _isElement(obj: any) {
    return !!(obj && obj.nodeType === 1)
  }

  _isFunction(obj: any) {
    return !!(obj && obj.constructor && obj.call && obj.apply)
  }

  // 判断是不是一个数组
  _isArray(obj: any) {
    return Object.prototype.toString.call(obj) === '[object Array]'
  }

  //判断是不是一个数字
  _isNumber(params: any) {
    return Object.prototype.toString.call(params) === '[object Number]'
      && !isNaN(params) && isFinite(params)
  }

  // 是不是一个boolean 值
  _isBoolean(params: any) {
    return Object.prototype.toString.call(params) === '[object Boolean]'
  }

  // 是否是字符串
  _isString(params: any) {
    return Object.prototype.toString.call(params) === '[object String]'
  }

  // 创建canvas标签
  createCanvasElement() {
    let canvas = document.createElement('canvas')
    try {
      // @ts-ignore
      canvas['style'] = canvas.style || {}
    } catch (e) {

    }
    return canvas
  }

  createImageElement() {
    return document.createElement('img')
  }


  // 以下是颜色相关的函数  主要是 rgb 相关

}


const utilsInstance = new Utils()
export default utilsInstance
export {Utils}
