import CanvasEvent from '@/utils/canvasEmit'
import Rect from '@/utils/drawRect'


const eventList = [
  'click',
]

class Canvas extends CanvasEvent {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  shapeList: Rect[]

  constructor(canvas: HTMLCanvasElement) {
    super()
    this.canvas = canvas
    this.canvas.width = this.canvas.getBoundingClientRect().width
    this.canvas.height = this.canvas.getBoundingClientRect().height
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D
    this.shapeList = []
    // this.initEvent = this.initEvent.bind(this)
    this.initEvent()
  }

  initEvent() {
    const callback = this.handleEvent.bind(this)
    eventList.forEach((eventItem: string) => {
      this.canvas.addEventListener(eventItem, callback)
    })

    /**
     * 或者使用 箭头函数进行回调
     * this.canvas.addEventListener(eventItem, (event: any)=>{
     *     this.shapeList
     *         .filter((shape) => shape.isMouseRegion(event.x, event.y))
     *         .forEach((shape) => shape.emit(event.type, event))
     * })
     */
  }

  handleEvent(event: any) {
    if (this.shapeList) {
      this.shapeList
        .filter((shape) => shape.isMouseRegion(event.x, event.y))
        .forEach((shape) => shape.emit(event.type, event))
    }
  }

  getShapeList() {
    return this.shapeList
  }

  addShape(shape: Rect) {
    this.shapeList.push(shape)
  }

  draw() {
    this.shapeList.forEach((item: Rect) => item.draw())
  }

  rect(config: any) {
    const rect = new Rect(config, this.canvas)
    this.addShape(rect)
    return rect
  }
}

export default Canvas
