class Group{

    constructor(){
        this.elements = [];
    }

    add(value){
        if (!(this.elements.has(value))) {
            this.elements.push(value);
        } else {
            console.log(`The element ${value} already exists in the array`);
        }
    }

    delete(value){
        if (!(this.elements.has(value))) {
            var res = this.elements.filter(each => each !== value);
            this.elements = res;
        } else {
            console.log(`The element ${value} doesn't exist in the array`);
        }
    }

    has(value){
        return this.elements.includes(value);
    }

    from(array){
        var res = new Group();
        array.forEach(element => {
            res.add(element);
        });
        return res;
    }

}