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

