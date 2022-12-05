import CanvasEvent from '@/utils/canvasEmit'

interface RectConfig {
  x: number
  y: number
  width: number
  height: number
  fillStyle: string
}

class Rect extends CanvasEvent {
  canvas: HTMLCanvasElement // 传入 canvas DOM结构
  config: RectConfig //传入的绘制数据
  constructor(options: RectConfig, canvas: HTMLCanvasElement) {
    super()
    this.canvas = canvas
    this.config = options
  }

  draw() {
    const context = this.canvas.getContext('2d') as CanvasRenderingContext2D
    const {x, y, width, height, fillStyle} = this.config
    context.fillStyle = fillStyle
    context.fillRect(x, y, width, height)
  }

  isMouseRegion(clientX: number, clientY: number) {
    const point = this.getMousePosition(clientX, clientY)
    const {x, y, width, height} = this.config
    if (x < point.x && point.x < x + width && y < point.y && point.y < y + height) {
      return true
    }

  }

  getMousePosition(clientX: number, clientY: number) {
    const position = this.canvas.getBoundingClientRect()
    return {
      x: clientX - position.left,
      y: clientY - position.top
    }
  }
}


export default Rect
