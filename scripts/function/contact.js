
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

export {contact,fermerContact,validerContact};