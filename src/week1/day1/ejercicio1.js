class Vec {

    constructor(x,y){
        this.x = x;
        this.y = y;
    }


    plus(anotherVector){
        return new Vec(this.x + anotherVector.x, this.y + anotherVector.y);
    }

    minus(){
        return new Vec(this.x - anotherVector.x, this.y - anotherVector.y);
    }

    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}