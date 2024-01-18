class Hero {
    constructor (name, age, type, attack) {
        this.name = name
        this.age = age 
        this.type = type
        this.attack = attack
    }
    writeAttack(){
        console.log(`o ${this.type} atacou usando ${this.attack}`)
    }
}

let mage = new Hero("Aurelius", 300, "mago", "magia")
let warrior = new Hero("Gengis Khan", 40, "guerreiro", "espada")
let monk = new Hero("Dalai Lama", 88, "monge", "artes marciais")
let ninja = new Hero("Hattori Hanzo", 45, "ninja", "shuriken")

mage.writeAttack()
warrior.writeAttack()
monk.writeAttack()
ninja.writeAttack()