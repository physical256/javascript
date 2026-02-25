class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.type = "normalny";
  }

  fly() {
    return this.type + " - lecę";
  }
}

class EnemyShooter extends Enemy {
  constructor(x, y) {
    super(x, y);
    this.type = "strzelający";
  }

  shoot() {
    return this.type + " - strzelam";
  }
}

const enemyNormal = new Enemy(10, 20);
console.log(enemyNormal.fly());
// console.log(enemyNormal.shoot()); // To byłoby błędem

const enemyShooter = new EnemyShooter(20, 30);
console.log(enemyShooter.fly());
console.log(enemyShooter.shoot());