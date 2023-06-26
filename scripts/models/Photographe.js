class Photographe {
    constructor(photographers) {
        this._name = photographers.name;
        this._id = photographers.id;
        this._city = photographers.city;
        this._country = photographers.country;
        this._tagline = photographers.tagline;
        this._price = photographers.price;
        this._portrait = photographers.portrait;
        this._nomPhotographe = photographers.name;   
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get portrait() {
        return this._portrait;
    }

    get city() {
        return this._city;
    }

    get country() {
        return this._country;
    }

    get tagline() {
        return this._tagline;
    }

    get price() {
        return this._price;
    }

    get nomPhotographe(){
        var name=this._name;
        var nomabreger=name.substr(0, this._name.indexOf(' '));
        return nomabreger;  
       
    }
}