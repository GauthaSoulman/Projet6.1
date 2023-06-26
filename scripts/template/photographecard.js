class PhotographesCarte {
    constructor(photographe) {
        this.photographe = photographe;
    }

    createPhotographeCarte() {
        let createur = document.createElement('article');
        createur.classList.add("photographe");


        let profilPhotographe = `
            <a class="lien-photographe" href="photographer.html?id=${this.photographe.id}" aria-label="${this.photographe.name}">
                <img alt="${this.photographe.name}" class="img-photographe" src="assets/photographers/${this.photographe.portrait}">
                <h2 class="nom-photographe">${this.photographe.name}</h2>
            </a>
            <span class="lieu-photographe">${this.photographe.city}, ${this.photographe.country}</span>
            <p class="description-photographe">
                ${this.photographe.tagline}
                    <br>
                <span class="tarif-photographe">${this.photographe.price}€ / Jour</span>
            </p>
        `;
        
        createur.innerHTML = profilPhotographe;
        return createur;
    }
}