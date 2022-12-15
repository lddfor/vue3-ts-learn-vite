import COLOR from './Color'


class ColorUtils {

  // rgb 切换成 16进制
  _rgbToHex(r: number, g: number, b: number) {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }

  // 携带 # 前缀
  _rgbToHexHasOperator(r: number, g: number, b: number) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }

  _hexToRgb(hex: string) {
    const int = hex.replace('#', '')
    const bigint = parseInt(int, 16) // 转换成16进制
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: (bigint & 255)
    }
  }

  static _getRandomColor() {
    let randColor = ((Math.random() * 0xffffff) << 0).toString(16)
    while (randColor.length < 6) {
      randColor = '0' + randColor
    }
    return '#' + randColor
  }

  /**
   * 使用案例
   * getRGB('blue')
   * getRGB('#eeeeee')
   * RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/
   * @param color
   */
  getRGB(color: string) {
    let rgb
    if (color in COLOR) { // in 操作符 是沿着对象的原型链寻找所有的键值
      rgb = COLOR[color as keyof typeof COLOR]
      return {
        r: rgb[0],
        g: rgb[1],
        b: rgb[2]
      }
    } else if (color[0] === '#') {
      return this._hexToRgb(color.substring(1))
    } else if (color.substring(0, 4) === 'rgb(') {
      const RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/
      rgb = RGB_REGEX.exec(color.replace(/ /g, ''))
      if (rgb) {
        return {
          r: parseInt(rgb[1], 10),
          g: parseInt(rgb[2], 10),
          b: parseInt(rgb[3], 10),
        }
      }
    } else {
      return {
        r: 0,
        g: 0,
        b: 0,
      }
    }
  }

  // 以下是 rgba 相关
  //  例如  _nameColorToRGBA('blue') {r: 0, g: 0, b: 255, a: 1}
  _nameColorToRGBA(color: string) {
    let c = COLOR[color.toLowerCase() as keyof typeof COLOR]
    if (!c) {
      return null
    }
    return {
      r: c[0],
      g: c[1],
      b: c[2],
      a: 1,
    }
  }

  //rgb(0,0,255)
  _rgbColorToRGBA(rgbColor: string) {
    if (rgbColor.indexOf('rgb(') === 0) {
      rgbColor = rgbColor.match(/rgb\(([^)]+)\)/)![1]
      if (rgbColor) {
        let parts = rgbColor.split(/ *, */).map(Number)
        return {
          r: parts[0],
          g: parts[1],
          b: parts[2],
          a: 1,
        }
      }
    }
  }

  // rgba(0,0,255,.2)
  _rgbaColorToRGBA(rgbaColor: string) {
    if (rgbaColor.indexOf('rgba(') === 0) {
      rgbaColor = rgbaColor.match(/rgba\(([^)]+)\)/)![1]
      let parts = rgbaColor.split(/ *, */).map(Number)
      return {
        r: parts[0],
        g: parts[1],
        b: parts[2],
        a: parts[3],
      }
    }
  }

  // Parse #nnnnnn
  _hex6ColorToRGBA(str: string) {
    if (str[0] === '#' && str.length === 7) {
      return {
        r: parseInt(str.slice(1, 3), 16),
        g: parseInt(str.slice(3, 5), 16),
        b: parseInt(str.slice(5, 7), 16),
        a: 1,
      }
    }
  }


  _hslColorToRGBA(str:string) {
    // Check hsl() format
    if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(str)) {
      // Extract h, s, l
      const [_, ...hsl] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(str)!
      const h = Number(hsl[0]) / 360
      const s = Number(hsl[1]) / 100
      const l = Number(hsl[2]) / 100
      let t2
      let t3
      let val
      if (s === 0) {
        val = l * 255
        return {
          r: Math.round(val),
          g: Math.round(val),
          b: Math.round(val),
          a: 1,
        }
      }
      if (l < 0.5) {
        t2 = l * (1 + s)
      } else {
        t2 = l + s - l * s
      }
      const t1 = 2 * l - t2
      const rgb = [0, 0, 0]
      for (let i = 0; i < 3; i++) {
        t3 = h + (1 / 3) * -(i - 1)
        if (t3 < 0) {
          t3++
        }
        if (t3 > 1) {
          t3--
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3
        } else if (2 * t3 < 1) {
          val = t2
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6
        } else {
          val = t1
        }
        rgb[i] = val * 255
      }
      return {
        r: Math.round(rgb[0]),
        g: Math.round(rgb[1]),
        b: Math.round(rgb[2]),
        a: 1,
      }
    }
  }
}

export default new ColorUtils()
export {ColorUtils}
