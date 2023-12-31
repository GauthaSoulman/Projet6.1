//Mettre le code JavaScript lié à la page photographer.html


class Profil {
    constructor() {
        //Recupére Element
        this.profilPhotographe = document.querySelector('#profil-infos-photographe');
        this.profilListePhotos = document.querySelector('#profil-liste-photos');
        this.profilLikes = document.querySelector('#profil-likes');
        this.profilTarif = document.querySelector('#profil-tarif');
        //Recupere Data
        this.photographesApi = new PhotographeApi('/data/photographers.json');
    }

    async main() {
        let idURL = new URL(window.location.href).searchParams.get("id");
        let nomPhotographe="";
        let photographesData = await this.photographesApi.getPhotographes();
        let Photographe = photographesData.map(photographe => new ProfilPhotographeFactory(photographe, idURL));
        Photographe.forEach(photographe => {
            const ProfilTemplate = new PhotographeProfil(photographe, idURL);

            this.profilPhotographe.append(
                ProfilTemplate.createPhotographeProfil()
            );
            if (photographe.id == idURL) {
                nomPhotographe=photographe.nomPhotographe;
                this.profilTarif.append(
                    `${photographe.price}€ / jour`
                )
            }
            
        });

        

        let photosData = await this.photographesApi.getPhotos();   
        let Photo = photosData.map(photo => new PhotoFactory(photo,nomPhotographe, idURL));
        Photo.forEach(photo => {
            if ("image" in photo) {
                let PhotoTemplate = new PhotographePhoto(photo, idURL, nomPhotographe);
                this.profilListePhotos.append(
                    PhotoTemplate.createPhotographeGallerie()
                );
            } else {
                let PhotoTemplate = new PhotographeVideo(photo, idURL, nomPhotographe);
                this.profilListePhotos.append(
                    PhotoTemplate.createPhotographeGallerie()
                );
            }
        });

        let Likes = await this.photographesApi.getLikes();
        let nbLikeTotal = 0;
        Likes.forEach(like => {
            if (like.photographerId == idURL) {
                nbLikeTotal = nbLikeTotal + like.likes;
            }
        });
        let LikeTemplate = new PhotographeLike(nbLikeTotal);
        this.profilLikes.append(
            LikeTemplate.createLikesProfil()
        );
    }
}

const profil = new Profil();
profil.main()


//Fermeture des modal

    document.getElementById('fermer-contact').addEventListener('click',(e)=>{e.preventDefault();
        fermerContact()});
    document.getElementById('validercontact').addEventListener('click',(e)=>{e.preventDefault();
        validerContact()});
    document.getElementById('fermer-lightbox').addEventListener('click',(e)=>{e.preventDefault();
        fermerLightbox()});
           



function nomabreger(nom){
    return nom.substr(0, myString.indexOf(' '))
}

/** Système de contact **/
function contact(nom) {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementById("contact").style.display = "block";
    document.getElementsByClassName("btn-contact")[0].style.display = "none";
    document.getElementById("nom-contact").innerHTML = nom;
    /** Gére les flèches du clavier **/
    const actionForm = document.querySelectorAll('.action-form');
    actionForm.forEach(function (action, i) {
        if (document.getElementById("contact").style.display === "block") {
            action.addEventListener('keydown', function (events) {
                switch (events.key) {
                    case 'ArrowUp':
                        if (i !== 0) {
                            action.parentNode.getElementsByClassName('action-form')[i - 1].focus()
                        }
                        break;
                    case 'ArrowDown':
                        if (i !== (actionForm.length - 1)) {
                            action.parentNode.getElementsByClassName('action-form')[i + 1].focus()
                        }
                        break;
                    default:
                        break;
                }
            })
        }
    });
}
/* Fermer le formulaire */
function fermerContact() {
    document.getElementsByTagName("body")[0].style.overflow = "unset";
    document.getElementById("contact").style.display = "none";
    document.getElementsByClassName("btn-contact")[0].style.display = "block";
}
/* Valide le formulaire */
function validerContact() {
    let nom = document.getElementById("form-nom").value;
    let prenom = document.getElementById("form-prenom").value;
    let email = document.getElementById("form-email").value;
    let message = document.getElementById("form-message").value;

    console.log("NOM : " + nom + " PRENOM : " + prenom);
    console.log("ADRESSE EMAIL : " + email);
    console.log("MESSAGE : " + message);
}


/** Système de filtres **/
function filtres(type) {
    let photographie = document.querySelectorAll(".photo");
    photographie.forEach(function (photographie) {
        photographie.style.display = "none";
    });
    let filtrePhotographie = document.querySelectorAll("." + type);
    filtrePhotographie.forEach(function (filtrePhotographie) {
        filtrePhotographie.style.display = "block";
    });
    let listePhotos = [].slice.call(filtrePhotographie);
    let listePhotosAffiche = listePhotos.filter(function (photo) {
        return getComputedStyle(photo).display !== "none"
    });
    let nombrePhotos = listePhotosAffiche.length;
    if (nombrePhotos == 0) {
        document.getElementById("aucun-contenu").style.display = "block";
    } else {
        document.getElementById("aucun-contenu").style.display = "none";
    }
}


/** Système de like **/
function systemeLike(id, type) {
    /* Récupuère les éléments */
    let nbLike = document.getElementById("like-" + id).innerHTML;
    nbLike = parseInt(nbLike);
    let nbLikeTotal = document.getElementById("profil-likes-photographe").innerHTML;
    nbLikeTotal = parseInt(nbLikeTotal);
    /* Gère le like */
    if (type == "like") {
        nbLike = nbLike + 1;
        nbLikeTotal = nbLikeTotal + 1;
        document.getElementsByClassName("like-" + id)[0].getElementsByClassName("like-coeur")[0].style.color = "#db8876";
        /* Change la fonction */
        document.getElementsByClassName("like-" + id)[0].getElementsByClassName("like-coeur")[0].setAttribute("onclick", "systemeLike('" + id + "', 'unlike')");
    } else {
        nbLike = nbLike - 1;
        nbLikeTotal = nbLikeTotal - 1;
        document.getElementsByClassName("like-" + id)[0].getElementsByClassName("like-coeur")[0].style.color = "#901c1c";
        /* Change la fonction */
        document.getElementsByClassName("like-" + id)[0].getElementsByClassName("like-coeur")[0].setAttribute("onclick", "systemeLike('" + id + "', 'like')");
    }
    /* Change dans les éléments */
    document.getElementById("like-" + id).innerHTML = nbLike;
    document.getElementById("profil-likes-photographe").innerHTML = nbLikeTotal;
}


/** Système de lightbox **/
function ouvreLightbox(index, titre) {
    document.getElementsByClassName("btn-contact")[0].style.display = "none";
    /* Obtient le nombre total de photos */
    let totalPhoto = document.querySelectorAll(".photo").length;
    /* Récupère la photo lié à l'index */
    let photos = document.getElementById(index);
    /* Obtient la source de l'image */
    let photosSrc = photos.getElementsByClassName("src-contenu")[0].getAttribute("src");
    /* Obtient le type de l'image */
    let photoType = photosSrc.split('.').pop();
    let photoFormat = "";
    if (photoType === "jpg" || photoType === "jpeg" || photoType == "gif" || photoType === "png") {
        photoFormat = "image";
    } else if (photoType === "mp4" || photoType === "mkv" || photoType === "avi") {
        photoFormat = "video";
    }
    /* Récupère l'id de la photo */
    let idPhoto = index;
    /* Affiche la lightbox */
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementById("lightbox").style.display = "block";
    /* Gère l'affichage des flèches */
    if (idPhoto === 1) {
        document.getElementById("fleche-gauche").style.display = "none";
        document.getElementById("fleche-droite").style.display = "block";
        /* Change les index des flèches */
        document.getElementById("fleche-gauche").setAttribute("onclick", "");
        document.getElementById("fleche-droite").setAttribute("onclick", "flecheDroite(" + (idPhoto + 1) + ")");
    } else if (idPhoto === totalPhoto) {
        document.getElementById("fleche-gauche").style.display = "block";
        document.getElementById("fleche-droite").style.display = "none";
        /* Change les index des flèches */
        document.getElementById("fleche-gauche").setAttribute("onclick", "flecheGauche(" + (idPhoto - 1) + ")");
        document.getElementById("fleche-droite").setAttribute("onclick", "");
    } else {
        document.getElementById("fleche-gauche").style.display = "block";
        document.getElementById("fleche-droite").style.display = "block";
        /* Change les index des flèches */
        document.getElementById("fleche-gauche").setAttribute("onclick", "flecheGauche(" + (idPhoto - 1) + ")");
        document.getElementById("fleche-droite").setAttribute("onclick", "flecheDroite(" + (idPhoto + 1) + ")");
    }
    /* Affiche la photo */
    if (photoFormat === "image") {
        document.getElementById("contenu-photo-lightbox").innerHTML = "<img alt='" + titre + "' id='photo-lightbox' src=" + photosSrc + ">";
    } else {
        document.getElementById("contenu-photo-lightbox").innerHTML = "<video title='" + titre + "' id='photo-lightbox' controls><source src=" + photosSrc + ">";
    }
    /** Affiche le titre */
    document.getElementById("titre-photo-lightbox").innerHTML = titre;
    /** Gére les flèches du clavier **/
    document.onkeydown = function (event) {
        /* Si la Lightbox est ouverte */
        if (document.getElementById("lightbox").style.display === "block") {
            switch (event.key) {
                case 'ArrowLeft':
                    flecheGauche(idPhoto - 1);
                    break;
                case 'ArrowRight':
                    flecheDroite(idPhoto + 1);
                default:
                    break;
            }
        }
    };
}
/* Ferme la lightbox */
function fermerLightbox() {
    document.getElementsByTagName("body")[0].style.overflow = "unset";
    document.getElementById("lightbox").style.display = "none";
    document.getElementsByClassName("btn-contact")[0].style.display = "block";
}
/* Gère la flèche gauche */
function flecheGauche(index) {
    let titreAvant = document.getElementsByClassName("photo")[index-1].getElementsByClassName("titre-photo")[0].innerHTML;
    ouvreLightbox(index, titreAvant);
}
/* Gère la flèche droite */
function flecheDroite(index) {
    let totalPhoto = document.querySelectorAll(".photo").length;
    if (index === (totalPhoto)) {
        let titreApres = Array.from(document.querySelectorAll('.photo')).pop();
        titreApres = titreApres.getElementsByClassName("titre-photo")[0].innerHTML;
        ouvreLightbox(index, titreApres);
    } else {
        let titreApres = document.getElementsByClassName("photo")[index-1].getElementsByClassName("titre-photo")[0].innerHTML;
        ouvreLightbox(index, titreApres);
    }
}


/** Système de tri **/
function trier(choixTrier) {
    let listePhotos = document.querySelectorAll('.photo');
    let tableauTrier = [];
    for (let i = 0; i < listePhotos.length; i++) {
        tableauTrier.push(listePhotos[i]);
    }
    switch (choixTrier.value) {
        case "Popularité":
            tableauTrier.sort(function (a, b) {
                return a.dataset.likes - b.dataset.likes;
            });
            break;
        case "Date":
            tableauTrier.sort(function (a, b) {
                return a.dataset.date.localeCompare(b.dataset.date);
            });
            break;
        case "Titre":
            tableauTrier.sort(function (a, b) {
                return a.dataset.titre.localeCompare(b.dataset.titre);
            });
            break;
        default:
            break;
    }
    tableauTrier.forEach(function (photo, index) {
        let indexModif = index + 1;
        let titreModif = photo.dataset.titre;
        photo.setAttribute("id", indexModif);
        photo.getElementsByClassName("lien-lightbox")[0].setAttribute("onclick", "ouvreLightbox(" + `${indexModif}` + ", '" + titreModif + "')")
        document.getElementById("profil-liste-photos").append(photo);
    });
}

