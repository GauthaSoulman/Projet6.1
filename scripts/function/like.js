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

