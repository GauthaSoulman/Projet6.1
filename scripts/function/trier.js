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

