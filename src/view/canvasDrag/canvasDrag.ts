class Rect {
  startX: number
  startY: number
  endX: number
  endY: number
  color?: string
  isSelect?: boolean

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
    this.isSelect = false
  }
}

class CanvasDragHandle {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  _context: CanvasRenderingContext2D
  rectList: any[]
  isDrawing: boolean // 是否在绘制阶段
  startX: number
  startY: number
  endX: number
  endY: number
  isDragging: boolean // 是否是拖拽阶段
  currentRect: any // 是否是拖拽阶段
  rectIndex: number // 是否是拖拽阶段
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this._context = canvas.getContext('2d') as CanvasRenderingContext2D
    this.rectList = []
    this.isDrawing = false
    this.startX = 0
    this.startY = 0
    this.endX = 0
    this.endY = 0
    this.isDragging = false
    this.canvas.onmousedown = this.onmousedown.bind(this)
    this.canvas.onmousemove = this.onmousemove.bind(this)
    this.canvas.onmouseup = this.onmouseup.bind(this)
    this.currentRect = null
    this.rectIndex = -1
  }

  onmousedown(event: MouseEvent) {
    this.startX = event.offsetX
    this.startY = event.offsetY
    let rectIndex = this.rectList.findIndex(item => {
      console.log('item', item)
      if (item.startX < item.endX) {
        if (item.startY < item.endY) {
          return this.startX > item.startX && this.startX < item.endX && this.startY > item.startY && this.startY < item.endY
        } else {
          return this.startX > item.startX && this.startX < item.endX && this.startY > item.endY && this.startY < item.startY
        }
      } else {
        if (item.startY < item.endY) {
          return this.startX > item.endY && this.startX < item.startY && this.startY > item.startY && this.startY < item.endY
        } else {
          return this.startX > item.startX && this.startX < item.endX && this.startY > item.endY && this.startY < item.startY
        }
      }
    })
    console.log(rectIndex)
    this.rectIndex = rectIndex
    // -1 说明画出矩形  需要绘制
    if (rectIndex === -1) {
      // 绘制
      this.isDrawing = true
    } else {
      // 进行拖拽
      this.currentRect = this.rectList[rectIndex]
      this.isDragging = true

      this.currentRect!.isSelect = true
    }
  }

  onmousemove(event: MouseEvent) {
    this.endX = event.offsetX
    this.endY = event.offsetY
    // 开始绘制
    if (this.isDrawing) {
      this.drawRect()
      this.context.globalAlpha = 0.4
      this.beginPath()
      this.context.moveTo(this.startX, this.startY)
      this.context.lineTo(this.endX, this.startY)
      this.context.lineTo(this.endX, this.endY)
      this.context.lineTo(this.startX, this.endY)
      this.context.lineTo(this.startX, this.startY)
      this.context.shadowOffsetX = 4
      this.context.shadowOffsetY = 4
      this.context.shadowBlur = 4
      this.context.fillStyle = 'green'
      this.context.shadowColor = 'rgb(100,100,100)'
      // this.context.strokeStyle = 'black'
      this.context.fill()
      // this.context.stroke()
    }
    if (this.isDragging) {
      const w = Math.abs(this.startX - this.endX)
      const h = Math.abs(this.startY - this.endY)
      if (this.endX < this.startX) {
        this.startX -= w
        this.endX -= w
        this.currentRect.startX -= w
        this.currentRect.endX -= w
      }
      if (this.endX >= this.startX) {
        this.startX += w
        this.endX += w
        this.currentRect.startX += w
        this.currentRect.endX += w
      }
      if (this.endY < this.startY) {
        this.startY -= h
        this.endY -= h
        this.currentRect.startY -= h
        this.currentRect.endY -= h
      }
      if (this.endY >= this.startY) {
        this.startY += h
        this.endY += h
        this.currentRect.startY += h
        this.currentRect.endY += h
      }
      this.drawRect()
    }
  }

  onmouseup(event: MouseEvent) {
    //如果是绘制阶段
    if (this.isDrawing) {
      this.rectList.push(new Rect(this.startX, this.startY, this.endX, this.endY))
      console.log('结束绘制')
    }
    if (this.isDragging) {
      this.rectList.forEach(item => {
        item.isSelect = false
      })
    }

    if (this.rectIndex !== -1) {
      this.rectList.splice(this.rectIndex, 1)
      this.rectList.unshift(this.currentRect)
    }
    console.log('this.rectIndex', this.rectIndex)
    console.log('onmouseup', this.rectList)
    this.isDrawing = false
    this.isDragging = false
  }


  drawRect() {
    this.clearAllCanvas()
    // 绘制以前保存的图像
    for (let i = 0; i < this.rectList.length; i++) {
      const children = this.rectList[i]
      this.context.globalAlpha = 0.4
      this.context.beginPath()
      this.context.moveTo(children.startX, children.startY)
      this.context.lineTo(children.endX, children.startY)
      this.context.lineTo(children.endX, children.endY)
      this.context.lineTo(children.startX, children.endY)
      this.context.lineTo(children.startX, children.startY)
      this.context.shadowOffsetX = 4
      this.context.shadowOffsetY = 4
      this.context.shadowBlur = 4
      this.context.fillStyle = 'green'
      this.context.shadowColor = 'rgb(100,100,100)'
      // this.context.strokeStyle = 'black'
      this.context.fill()
      // this.context.stroke()
    }
  }

  // 清除画布
  clearAllCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  beginPath() {
    this._context.beginPath()
  }

  closePath() {
    this._context.closePath()
  }
}


export default CanvasDragHandle
