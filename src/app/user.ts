// nombre, sexo, edad, raza
export class User {

    constructor(
      public name: string,
      public sex: string, //'M','F','X'
      public age: number,
      public raze: string //'Asian','North American','African','UNK','Latin American'
      
    ) {  }
  
  }