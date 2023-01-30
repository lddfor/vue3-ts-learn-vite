// @ts-ignore

import ClipboardJS from 'clipboard'


// clipboard.on('success',(e:HTMLSpanElement)=>{
//   console.log(e)
// })


class Clipboard {
  clipboardInstance: any
  constructor(text:string,event:any) {
    this.clipboardInstance = new ClipboardJS(event.target,{
      text: ()=> text
    })
    this.clipboardInstance.on('success',()=>{
      console.log('粘贴成功!')
      this.clipboardInstance.destroy()
    })
    this.clipboardInstance.on('error',()=>{
      console.log('粘贴失败!')
      this.clipboardInstance.destroy()
    })
  }

}


let clipboard = new ClipboardJS('')



export default Clipboard
