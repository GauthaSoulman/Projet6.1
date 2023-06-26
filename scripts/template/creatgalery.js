class PhotographePhoto {
    constructor(photo, idURL, nomPhotographe) {
        this.photo = photo;
        this.idPage = idURL;
        this.nomPhotographe = nomPhotographe;
    }

    createPhotographeGallerie() {
        if(`${this.photo.photographerId}` == this.idPage) {
            let photo = document.createElement('div');
            photo.classList.add("photo");
            this.indexPhoto = document.querySelectorAll(".photo").length + 1;
            let datePrecise = `${this.photo.date}`;
            datePrecise = new Date(datePrecise).getTime();
            photo.setAttribute("id", `${this.indexPhoto}`);
            photo.setAttribute("data-likes", `${this.photo.likes}`);
            photo.setAttribute("data-date", "'"+datePrecise+"'");
            photo.setAttribute("data-titre", `${this.photo.title}`);
            
            let cartePhoto = `
                <a href="#" class="lien-lightbox" aria-label="image en gros plan" onclick="ouvreLightbox(${this.indexPhoto}, '${this.photo.title}')">
               
                    <img alt="${this.photo.title}" class="img-photo src-contenu" src="assets/images/${this.nomPhotographe}/${this.photo.image}">
                </a>
                <div>
                    <span class="titre-photo">${this.photo.title}</span>
                    <span class="like like-${this.photo.id}">
                        <span id="like-${this.photo.id}">${this.photo.likes}</span>
                        <span class="like-coeur" aria-label="likes" onclick="systemeLike('${this.photo.id}', 'like')"></span>
                    </span>
                </div>
            `;
            photo.innerHTML = cartePhoto;
            return photo;
        } else {
            return "";
        }        
    }

}
class PhotographeProfil {
    constructor(photographe, idURL) {
        this.photographe = photographe;
        this.idPage = idURL;
    }

    createPhotographeProfil() {
        if(this.idPage == this.photographe.id) {
            let createur = document.createElement('article');
            let profilPhotographe = `
                <img alt="${this.photographe.name}" class="img-photographe" id="profil-photo-photographe" src="assets/photographers/${this.photographe.portrait}">
                <div id="profil-nom-contact-photographe">
                    <h1 class="nom-photographe">${this.photographe.name}</h1>
                    <button class="btn-contact" onclick="contact('${this.photographe.name}')">Contactez-moi</button>
                </div>
                <div>
                    <span class="lieu-photographe">${this.photographe.city}, ${this.photographe.country}</span>
                    <p class="description-photographe" id="profil-description-photographe">
                        ${this.photographe.tagline}
                    </p>
                </div>
            `;
            createur.innerHTML = profilPhotographe;
            return createur;
        } else {
            return "";
        }        
    }
}

class PhotographeVideo {
    constructor(photo, idURL, nomPhotographe) {
        this.photo = photo;
        this.idPage = idURL;
        this.nomPhotographe = nomPhotographe;
    }

    createPhotographeGallerie() {
        if(`${this.photo.photographerId}` == this.idPage) {
            let photo = document.createElement('div');
            photo.classList.add("photo");
            this.indexPhoto = document.querySelectorAll(".photo").length + 1;
            let datePrecise = `${this.photo.date}`;
            datePrecise = new Date(datePrecise).getTime();
            photo.setAttribute("id", `${this.indexPhoto}`);
            photo.setAttribute("data-likes", `${this.photo.likes}`);
            photo.setAttribute("data-date", "'"+datePrecise+"'");
            photo.setAttribute("data-titre", `${this.photo.title}`);


            let cartePhoto = `
                <a href="#" class="lien-lightbox" aria-label="image en gros plan" onclick="ouvreLightbox(${this.indexPhoto}, '${this.photo.title}')">
                    <video title="${this.photo.title}" controls class="img-photo">
                        <source class="src-contenu" src="assets/images/${this.nomPhotographe}/${this.photo.video}" type="video/mp4">
                    </video>
                </a>
                <div>
                    <span class="titre-photo">${this.photo.title}</span>
                    <span class="like like-${this.photo.id}">
                    <span id="like-${this.photo.id}">${this.photo.likes}</span> 
                        <span class="like-coeur" aria-label="likes" onclick="systemeLike('${this.photo.id}', 'like')"></span>
                    </span>
                </div>
            `;
            photo.innerHTML = cartePhoto;
            return photo;
        } else {
            return "";
        }        
    }

}

class PhotographeLike {
    constructor(nbLikeTotal) {
        this.nbLikeTotal = nbLikeTotal;
    }

    createLikesProfil() {
        const createur = document.createElement('span');
            let profilPhotographe = `
                <span id="profil-likes-photographe">${this.nbLikeTotal}</span> ♥</span>
            `;
            createur.innerHTML = profilPhotographe;
            return createur;
    }

}