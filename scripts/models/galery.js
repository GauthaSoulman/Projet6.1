class Photo {
    constructor(photo, nomPhotographe) {
        this._id = photo.id;
        this._photographerId = photo.photographerId;
        this._title = photo.title;
        this._image = photo.image;
        this._likes = photo.likes;
        this._date = photo.date;
        this._price = photo.price;
        this._nomPhotographe = nomPhotographe;
    }

    get id() {
        return this._id;
    }

    get photographerId() {
        return this._photographerId;
    }

    get title() {
        return this._title;
    }

    get image() {
        return this._image;
    }

    get likes() {
        return this._likes;
    }

    get date() {
        return this._date;
    }

    get price() {
        return this._price;
    }


    get nomPhotographe() {
        return this._nomPhotographe;
    }

}

class Video {
    constructor(photo, nomPhotographe) {
        this._id = photo.id;
        this._photographerId = photo.photographerId;
        this._title = photo.title;
        this._video = photo.video;
        this._likes = photo.likes;
        this._date = photo.date;
        this._price = photo.price;
        this._nomPhotographe = nomPhotographe;
    }

    get id() {
        return this._id;
    }

    get photographerId() {
        return this._photographerId;
    }

    get title() {
        return this._title;
    }

    get video() {
        return this._video;
    }

    get likes() {
        return this._likes;
    }

    get date() {
        return this._date;
    }

    get price() {
        return this._price;
    }

    get nomPhotographe() {
        return this._nomPhotographe;
    }

}