function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
  // veto - returns No, I must disagree
  this.veto = function(){
    return 'No, I must disagree'
  }
  // approve — returns You can do that!
  this.approve = function(){
    return 'You can do that!'
  }
  // doCharity — returns I like to help people.
  this.doCharity = function(){
    return 'I like to help people.'
  }
  // releasePressStatement — returns You will see great things from Scuber.
  this.releasePressStatement = function(){
    return 'You will see great things from Scuber.'
  }
  // sayHi — returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.
  this.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}

let guyFieri = new BoardMember('Guy Fieri', 'Flavortown', 'Peep the Resume')
