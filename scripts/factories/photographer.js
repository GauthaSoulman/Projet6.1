class PhotographesFactory {
    constructor(photographers) {
        return new Photographe(photographers)
    }
}

class ProfilPhotographeFactory {
    constructor(photographers, idURL) {
        return new Photographe(photographers, idURL)
    }
}

class PhotoFactory {
    constructor(photo,nomPhotographe, idURL) {
        if("image" in photo) {
            return new Photo(photo, nomPhotographe)
        } else {
            return new Video(photo, nomPhotographe)
        }
    }
}

export { PhotographesFactory };