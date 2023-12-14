class Player {
    constructor(name,health){
        this.health= health
        this.name = name
    }
    get is_alive() { //property => is_alive
        return this.health > 0
    }

    getHit(value){
        if (!this.is_alive ){
            throw Error( this.name + ' onsuzda olub')
        } else {
            this.health -= value
        }
        console.log(`${this.name}in ${value} cani getdi, ${this.health}qaldi`);
    }
}


class Slodier extends Player {
    constructor( power, bullet ,name, health=120){
        super(name, health)
        this.power= power
        this._bullet= bullet
    }
    get bullet(){
        return this._bullet
    }

    set bullet (newValue){
        if(newValue< 30 && newValue > 0){
            this._bullet = newValue 
        }else {
            throw Error('Gulle sayi duzgun deyil')
        }
    }

    hit(player) {
        if (this.bullet > 0) {
            this.bullet--
            player.getHit(this.power)
        }
        else{
            throw Error ('Gullen yoxdu')
        }
    }
}

class Doctor extends Player {
    constructor(threat_power,name, health=80){
        super(name,health)
        this.threat_power= threat_power
    }
    threat(player){
        if (this.is_alive){
            player.health += this.threat_power
        }else {
            throw Error( this.name + ' artiq olub')
        }
        // console.log(`${this.name} ${this.threat_power} can verdi`);
    }
}



const rufet = new Slodier(30,20 ,'rufet')
const mehriban = new Slodier(30,30, 'mehriban')
const nail = new Doctor(20 ,'nail')

rufet.bullet = 25
console.log(rufet.bullet);



// mehriban.hit(rufet)
// rufet.hit(nail)
// nail.threat(rufet) 
 

// console.log(mehriban.health, rufet.health, nail.health);