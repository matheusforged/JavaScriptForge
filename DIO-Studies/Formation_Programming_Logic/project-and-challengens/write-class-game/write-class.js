class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        if(this.type = "mage"){
            this.attack = "using magic"
        } else if(this.type = "Warrior"){
            this.attack = "using sword"
        } else if(this.type = "monk"){
            this.attack = "using martial arts"
        } else {
            this.attack = "using shuriken"
        }            
        console.log(`The ${this.type} attacked ${this.attack}`)
    }
}

let heroMagician = new hero("Matthews", 20, "mago")

heroMagician.attack()
