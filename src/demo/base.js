/**
 * BAse class to make an object
 */
class Base {
    /**
     * Super constructor
     * @param {string} name A name of user
     */
    constructor(name){
        this.name = name
    }
    /**
     * GEt name method
     */
    getName(){
        console.log(this.name)
    }
}

/**
 * Derived class
 */
class Derived extends Base {
    /**
     * Derived constructor
     * @param {string} name Name of user
     * @param {number} age Age of user
     */
    constructor(name, age){
        super(name);
        this.age = age;
    }
    /**
     * Get Age
     */
    getAge(){
        console.log(this.age)
    }
}

/**
 * Making object
 */
let biplob = new Derived('biplob', 22)

/**
 * Calling
 */
biplob.getAge()
biplob.getName()
