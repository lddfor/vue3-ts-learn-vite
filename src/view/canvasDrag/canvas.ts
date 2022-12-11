interface Polygons {
  fillStyle: string
  strokeStyle: string
  location: string
  height: number
  width: number
  offsetX: number
  offsetY: number
}

class CanvasDrag {
  context: CanvasRenderingContext2D
  polygons: Polygons
  initX: number
  initY: number

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
      location: '',
      height: 60,
      width: 60,
      offsetX: 100,
      offsetY: 100
    }
    this.initCanvasBackground()
    this.initCanvas()
    // this.initHandle()
  }

  // 初始化背景
  initCanvasBackground() {
    this.context.fillStyle = 'pink'
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  // 初始化一个canvas
  initCanvas() {
    // this.context.rect()
    const {left, top} = this.canvas.getBoundingClientRect()
    this.context.beginPath()
    this.context.fillStyle = this.polygons.fillStyle
    this.context.strokeStyle = this.polygons.strokeStyle

    this.context.rect(this.initX, this.initY, this.polygons.height, this.polygons.width)
    this.context.rect(this.initX * 4, this.initY * 4, this.polygons.height, this.polygons.width)
    this.context.rect(this.initX * 6, this.initY * 6, this.polygons.height, this.polygons.width)
    this.context.fill()
    this.canvas.addEventListener('mousedown', (event) => {

      const isPoint = this.context.isPointInPath(event.pageX - left, event.pageY - top)
      console.log(isPoint, isPoint ? '在绘制的图像内' : '')
      if (isPoint) {
        this.canvas.addEventListener('mousemove', this.canvasMousemoveHandle)
      }
    })

    this.canvas.addEventListener('mousemove', (event)=>{
      const isPoint = this.context.isPointInPath(event.pageX - left, event.pageY - top)
      if(isPoint){
        this.canvas.style.cursor = 'pointer'
      }else{
        this.canvas.style.cursor = 'default'
      }
    })

    this.canvas.addEventListener('mouseup', () => {
      this.canvas.removeEventListener('mousemove', this.canvasMousemoveHandle)
    })

  }
  // 当鼠标移动时绑定事件
  canvasMousemoveHandle(event: Event) {
    console.log('mousemove', event)
  }

  //

}


export default CanvasDrag
