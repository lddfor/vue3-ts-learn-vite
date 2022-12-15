interface Polygons {
  fillStyle: string
  strokeStyle: string
  height: number
  width: number
  offsetX: number
  offsetY: number
  locationX: number
  locationY: number
}

class CanvasDrag {
  context: CanvasRenderingContext2D
  polygons: Polygons
  initX: number
  initY: number
  isPoint: boolean
  canvasDomLeft: number
  canvasDomTop: number

  constructor(public canvas: HTMLCanvasElement) {
    // 初始化 canvas
    this.canvas = canvas
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D
    // this.canvas.height = 400
    // this.canvas.width = 400
    this.initX = 30
    this.initY = 30
    // 初始化一个矩形
    this.polygons = {
      fillStyle: 'blue',
      strokeStyle: 'blue',
      locationX: this.initX,
      locationY: this.initY,
      height: 60,
      width: 60,
      offsetX: 0,
      offsetY: 0
    }

    this.isPoint = false
    const {left, top} = this.canvas.getBoundingClientRect()
    this.canvasDomLeft = left
    this.canvasDomTop = top
    this.initCanvas()
    // this.initHandle()
  }

  // 初始化一个canvas
  initCanvas() {

    this.context.beginPath()
    this.context.fillStyle = this.polygons.fillStyle
    this.context.strokeStyle = this.polygons.strokeStyle

    this.context.rect(this.initX, this.initY, this.polygons.height, this.polygons.width)
    // this.context.rect(this.initX * 4, this.initY * 4, this.polygons.height, this.polygons.width)
    // this.context.rect(this.initX * 6, this.initY * 6, this.polygons.height, this.polygons.width)
    this.context.fill()

    this.canvas.addEventListener('mousedown', (event) => {

      this.isPoint = this.context.isPointInPath(event.clientX - this.canvasDomLeft, event.clientY - this.canvasDomTop)
      console.log(this.isPoint)
      this.canvas.removeEventListener('mouseup', this.canvasMouseupHandle)
      if (this.isPoint) {
        this.canvasMousemoveHandle = this.canvasMousemoveHandle.bind(this)
        this.canvasMouseupHandle = this.canvasMouseupHandle.bind(this)
        // 鼠标按下 记录鼠标的点击位置 记录偏移量
        // console.log(this.polygons.locationX)
        // console.log(this.polygons.locationY)
        this.polygons.offsetX = event.clientX - this.polygons.locationX
        this.polygons.offsetY = event.clientY - this.polygons.locationY
        this.canvas.addEventListener('mousemove', this.canvasMousemoveHandle)
        this.canvas.addEventListener('mouseup', this.canvasMouseupHandle)
      }
    })

    this.canvas.addEventListener('mousemove', (event) => {
      this.isPoint = this.context.isPointInPath(event.pageX - this.canvasDomLeft, event.pageY - this.canvasDomTop)
      if (this.isPoint) {
        this.canvas.style.cursor = 'pointer'
      } else {
        this.canvas.style.cursor = 'default'
      }
      // this.initCanvasBackground()
    })


  }

  canvasMouseupHandle(event: MouseEvent) {
    if (this.isPoint) {
      this.isPoint = false
      this.polygons.locationX = event.clientX - this.polygons.offsetX
      this.polygons.locationY = event.clientY - this.polygons.offsetY
      console.log(' this.isPoint', this.isPoint)
      // console.log('this.polygons.locationX', this.polygons.locationX)
      // console.log('this.polygons.locationY', this.polygons.locationY)
      console.log('this.polygons.offsetX', this.polygons.offsetX)
      console.log('this.polygons.offsetX', this.polygons.offsetX)
      this.canvas.removeEventListener('mousemove', this.canvasMousemoveHandle)
    } else {
      this.canvas.removeEventListener('mousemove', this.canvasMousemoveHandle)
    }

  }

  // 当鼠标移动时绑定事件
  canvasMousemoveHandle(event: MouseEvent) {
    console.log('  canvasMousemoveHandle 移动中 ', this.isPoint)

    if (this.isPoint) {
      console.log('in')
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.context.beginPath()
      this.context.fillStyle = this.polygons.fillStyle
      this.context.strokeStyle = this.polygons.strokeStyle
      this.context.rect(
        event.clientX - this.polygons.offsetX,
        event.clientY - this.polygons.offsetY,
        this.polygons.height,
        this.polygons.width
      )
      this.context.fill()
      this.context.stroke()
    } else {
      console.log('out')
      this.canvas.removeEventListener('mousemove', this.canvasMousemoveHandle)
      this.canvas.addEventListener('mouseup', this.canvasMouseupHandle)
    }

  }

  //

}


export default CanvasDrag
