export default class Demo2{
  constructor( ) {
    this.prop = 'this is demo2 prop'

  }

  get prop(){
    return 'getter'
  }


  set prop(value){
    console.log(`value is ${value}`)
  }
}
