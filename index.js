function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = function(){
    return "No, I must disagree"
  }
  this.approve = function(){
    return "You can do that!"
  }
  this.doCharity = () => ("I like to help people.")
  this.releasePressStatement = () => ("You will see great things from Scuber.")
  this.sayHi = () => {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}







// function User (name, email){
//   this.name = name;
//   this.email = email;
//   this.sayHello = function(){
//     console.log(`Hello everybody, my name is ${this.name}!`);
//   }
// }
//
// let lauren = new User('lauren', 'lauren@gmail.com')
// lauren.sayHello()
// // "Hello everybody, my name is lauren!"
