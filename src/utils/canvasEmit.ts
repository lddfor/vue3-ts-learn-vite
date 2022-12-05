class CanvasEvent {
  _listener: any

  constructor() {
    this._listener = {}
  }

  /**
   * 添加监听事件
   * @param type 触发方式
   * @param handler  绑定的函数
   */
  on(type: string, handler: Function) {
    if (!this._listener[type]) {
      this._listener[type] = []
    }
    this._listener[type].push(handler)
  }


  /**
   * 触发事件
   * @param type  触发的类型
   * @param event  传入的参数
   */
  emit(type: string, event: string) {
    if (event === null) {
      return
    }
    const typeListeners = this._listener[type]
    if(typeListeners){
      for (let i = 0; i < typeListeners.length; i++) {
        const handle = typeListeners[i]
        handle(event)
      }
    }

  }

  /**
   * 移除事件
   * @param type 绑定的类型
   * @param handle  触发函数
   */
  remove(type: string, handle: Function) {
    // 如果没有传入具体的解绑函数, 那么就删除所有的绑定函数
    if (!handle) {
      this._listener[type] = []
    }
    // 如果要解除的函数存在
    if (this._listener[type]) {
      // 查找所有的绑定函数
      const listeners = this._listener[type]
      for (let i = 0; i < listeners.length; i++) {
        if (listeners[i] === handle) {
          listeners.splice(i, 1)
        }
      }

    }
  }
}


export default CanvasEvent
