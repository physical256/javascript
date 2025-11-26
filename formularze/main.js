class Enemy {
 constructor(x,y) {
  
  this.x=x
    this.y=y
    this.type = "normalny"
}
fly() {
  return this.type +"- lecę"
}  

}




class Enemyshooter extends enemy {
    constructor(x,y) {
      super (x,y)
       this (x,y)
        this.type="strzelajacy"
    }
shoot(){
   return this.type + "- strzelam"
}


}

const enemynormal = new enemy(10,20)
console.log(enemynormal.fly())
console.log(enemynormal.shoot())

const Enemyshooter = new Enemyshooter(20,30)
console.log (Enemyshooter.fly())
console.log(Enemyshooter.shoot())