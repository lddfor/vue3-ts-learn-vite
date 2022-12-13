class Rect {
  startX: number
  startY: number
  endX: number
  endY: number
  color?: string

  constructor(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    color = 'blue') {
    this.startX = startX
    this.startY = startY
    this.endX = endX
    this.endY = endY
    this.color = color
  }
}

class CanvasDragHandle {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  rectList: any[]
  isDrawing: boolean // 是否在绘制阶段
  startX: number
  startY: number
  endX: number
  endY: number
  isDragging: boolean // 是否是拖拽阶段
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.rectList = []
    this.isDrawing = false
    this.canvas.onmousedown = this.onmousedown.bind(this)
    this.canvas.onmousemove = this.onmousemove.bind(this)
    this.canvas.onmouseup = this.onmouseup.bind(this)
    this.startX = 0
    this.startY = 0
    this.endX = 0
    this.endY = 0
    this.isDragging = false
  }

  onmousedown(event: MouseEvent) {
    this.startX = event.offsetX
    this.startY = event.offsetY
    let rectIndex = this.rectList.findIndex(item => {
      console.log(item)
    })
    console.log(rectIndex)
    // -1 说明画出矩形  需要绘制
    if (rectIndex === -1) {
      // 绘制
      console.log('绘制矩形')
      this.isDrawing = true
    } else {
      this.isDragging = true
    }
  }

  onmousemove(event: MouseEvent) {
    this.endX = event.offsetX
    this.endY = event.offsetY
    // 开始绘制
    if (this.isDrawing) {
      this.drawRect()
      this.context.globalAlpha = 0.4
      this.context.beginPath()
      this.context.moveTo(this.startX, this.startY)
      this.context.lineTo(this.endX, this.startY)
      this.context.lineTo(this.endX, this.endY)
      this.context.lineTo(this.startX, this.endY)
      this.context.lineTo(this.startX, this.startY)
      this.context.fillStyle = 'green'
      this.context.strokeStyle = 'black'
      this.context.fill()
      this.context.stroke()
    }
  }

  onmouseup(event: MouseEvent) {
    //如果是绘制阶段
    if (this.isDrawing) {
      this.rectList.push(new Rect(this.startX, this.startY, this.endX, this.endY))
      console.log('结束绘制')
    }

    this.isDrawing = false

  }


  drawRect() {
    this.clearAllCanvas()
    // 绘制以前保存的图像
    console.log(this.rectList)
    for (let i = 0; i < this.rectList.length; i++) {
      const children = this.rectList[i]
      this.context.globalAlpha = 0.4
      this.context.beginPath()
      this.context.moveTo(children.startX, children.startY)
      this.context.lineTo(children.endX, children.startY)
      this.context.lineTo(children.endX, children.endY)
      this.context.lineTo(children.startX, children.endY)
      this.context.lineTo(children.startX, children.startY)
      this.context.fillStyle = 'green'
      this.context.strokeStyle = 'black'
      this.context.fill()
      this.context.stroke()
    }
  }

  // 清除画布
  clearAllCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}


export default CanvasDragHandle
