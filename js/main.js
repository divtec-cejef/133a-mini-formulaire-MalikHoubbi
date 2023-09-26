/**
 * @author Malik Houbbi
 * @since 2023.09.26
 */

'use strict';

console.log('Test liaison JS');
// Recupération du <body>
const body = document.querySelector('body');
// Recupération de la liste déroulante
const listeBackground = body.querySelector('#bg');

/**********************************************
  Changement du Backgrounds
 *********************************************/

// Changer l'image par défaut
body.style.backgroundImage = `url/img/backgrounds/${listeBackground.value})`;

// Ecouter un événement de type "change" (changer de valeur) sur la liste déroulante
listeBackground.addEventListener('change', function() {
   body.style.backgroundImage = `url/img/backgrounds/${listeBackground.value})`;
});


/**********************************************
 ENVOI DU FORMULAIRE
 *********************************************/

// Recupération du formulaire
const formulaire = document.querySelector('form');
// Recupération du Mdp et de la Confirmation du Mdp
const txtMdp = document.querySelector('#mot-de-passe');
const txtConfirmation = document.querySelector('#confirmation');
// Recupération du bouton
const btCreerCompte = document.querySelector('form button[type="submit"]');

// Ecoute un événement de type "submit" (envoi du formulaire)
formulaire.addEventListener('submit', function (event){
    // Stope l'événnement
    event.preventDefault();
    // Si le mot de passse ne correspond pas
    if (txtMdp.value.length < 3 || txtMdp.value !== txtConfirmation.value) {
        alert('Le mots de passe ne correspondent pas !');
        return;
    }
    btCreerCompte.classList.add('animate__heartBeat');

    alert('Compte créé avec succès !');
    formulaire.submit();
});

