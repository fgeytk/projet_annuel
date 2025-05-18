// Variable globale pour stocker le choix en cours
let currentChoice = null;
let currentLevel = null;

// Temporaire pour les réponses du recruteur
const responses = [
    "Intéressant ! Pouvez-vous développer ?",
    "D'accord, pouvez-vous en dire plus ?",
    "Très bien ! Pourriez-vous préciser davantage ?",
    "Cela semble prometteur ! Pouvez-vous donner un exemple ?",
    "Bien ! J'aimerais en savoir plus à ce sujet."
];

// Fonctions Boutons
function before() {
    document.getElementById("fenetre_identite").style.display = "block";
    document.getElementById("button_before").style.display = "none";
    document.getElementById("button_start").style.display = "block";
}

function start() {
    let a = document.getElementById("idt1");
    let b = document.getElementById("idt2");
    let c = document.getElementById("idt3");
    let d = document.getElementById("idt4");
    let e = document.getElementById("idt5");
    let f = document.getElementById("idt6");

    if (a.checked || b.checked || c.checked || d.checked || e.checked || f.checked) {
        window.location.href = "choix_option.html";
    } else {
        alert("Merci de bien vouloir décliner votre identité\n💁💁‍♂️💁‍♀️");
    }
}

// Fonction pour ouvrir la popup de choix de niveau de langage
function openLanguagePopup(reponse, index, categorie) {
    currentChoice = {
        text: reponse.phrase, // Store the phrase
        index: index,
        category: categorie,
        soutenue: reponse.soutenue, // Store the soutenue choice
        moderee: reponse.modérée, // Store the modérée choice
        familiere: reponse.familière // Store the familière choice
    };

    // Update the popup with the three choices
    document.querySelector("label[for='p1']").textContent = currentChoice.soutenue;
    document.querySelector("label[for='p2']").textContent = currentChoice.moderee;
    document.querySelector("label[for='p3']").textContent = currentChoice.familiere;

    // Open the popup
    let popup = document.querySelector("#popup_answer");
    popup.classList.toggle("open");
}

// Fonction pour soumettre le choix de niveau de langage
function submitLanguageChoice() {
    let a = document.getElementById("p1");
    let b = document.getElementById("p2");
    let c = document.getElementById("p3");
    let photo = document.getElementById("photo");
    let tp = document.getElementById("text_postulant");
    let tr = document.getElementById("text_recruteur");
    
    if (!currentChoice) return;
    
    // Réinitialisation des variables
    let level = "";
    let selectedResponse = "";
    let recruterResponse = "";
    let photoSrc = "";
    
    // Déterminer le niveau de langage choisi
    // Il fait peur ce if else : A faire : mettre un switch
    if (a.checked) {
        level = "de façon soutenue";
        selectedResponse = currentChoice.soutenue;
        photoSrc = "../img/masculin_curieux.png";
        recruterResponse = "Il n'est pas nécessaire d'être aussi soutenu.";
    } else if (c.checked) {
        level = "familièrement";
        selectedResponse = currentChoice.familiere;
        photoSrc = "../img/masculin_interrogatif.png";
        recruterResponse = "Et moins familièrement ça donne quoi ?";
    } else if (b.checked) {
        level = "modérément";
        selectedResponse = currentChoice.moderee;
        
        // Réponses spécifiques selon la catégorie et l'index
        if (currentChoice.category === "Qualités") {
            if (currentChoice.index === 0) {
                photoSrc = "../img/masculin_curieux.png";
                recruterResponse = "Vraiment ?";
            } else if (currentChoice.index === 1) {
                photoSrc = "../img/masculin_enthousiaste.png";
                recruterResponse = "Intéressant...";
            } else if (currentChoice.index === 2) {
                photoSrc = "../img/masculin_ravi.png";
                recruterResponse = "Belle qualité.";
            } else if (currentChoice.index === 3) {
                photoSrc = "../img/masculin_neutre.png";
                recruterResponse = "Je vois.";
            } else {
                photoSrc = "../img/masculin_enthousiaste.png";
                recruterResponse = "Intéressant...";
            }
        } else if (currentChoice.category === "Défauts") {
            if (currentChoice.index === 0) {
                photoSrc = "../img/masculin_mecontent.png";
                recruterResponse = "Ça n'est pas très professionnel.";
            } else if (currentChoice.index === 1) {
                photoSrc = "../img/masculin_neutre.png";
                recruterResponse = "Je vois.";
            } else if (currentChoice.index === 2) {
                photoSrc = "../img/masculin_sceptique.png";
                recruterResponse = "Hum...";
            } else if (currentChoice.index === 3) {
                photoSrc = "../img/masculin_interrogatif.png";
                recruterResponse = "Pouvez-vous m'en dire plus ?";
            } else {
                photoSrc = "../img/masculin_mecontent.png";
                recruterResponse = "Ça n'est pas très professionnel.";
            }
        } else if (currentChoice.category === "Hobbies") {
            if (currentChoice.index === 0) {
                photoSrc = "../img/masculin_ravi.png";
                recruterResponse = "C'est passionnant.";
            } else if (currentChoice.index === 1) {
                photoSrc = "../img/masculin_enthousiaste.png";
                recruterResponse = "Intéressant...";
            } else if (currentChoice.index === 2) {
                photoSrc = "../img/masculin_ravi.png";
                recruterResponse = "C'est passionnant.";
            } else if (currentChoice.index === 3) {
                photoSrc = "../img/masculin_enthousiaste.png";
                recruterResponse = "Intéressant...";
            } else {
                photoSrc = "../img/masculin_curieux.png";
                recruterResponse = "Vraiment ?";
            }
        } else {
            photoSrc = "../img/masculin_neutre.png";
            recruterResponse = responses[currentChoice.index % responses.length];
        }
    }
    
    // Mise à jour de l'interface
    photo.src = photoSrc;
    tp.textContent = selectedResponse; // Affiche la réponse choisie dans le texte postulant
    tr.textContent = recruterResponse;
    
    // Fermer la popup (assurez-vous que la classe 'open' est bien retirée)
    let popup = document.querySelector("#popup_answer");
    if (popup.classList.contains("open")) {
        popup.classList.remove("open");
    }
}

// Fonction pour fermer la popup
function exit() {
    let popup = document.querySelector("#popup_answer");
    popup.classList.toggle("open");
}

// Initialisation des éléments et gestionnaires d'événements
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button_categorie"); 
    const categoriesDiv = document.getElementById("categories");
    // Div pour les réponses
    let reponsesList = document.createElement("div");
    reponsesList.id = "reponses_liste";
    reponsesList.className = "reponses_liste";
    categoriesDiv.appendChild(reponsesList);
    
    // Gestionnaire du bouton de retour
    let backButton = document.createElement("button");
    backButton.innerText = "Retour aux catégories";
    backButton.className = "button_retour";
    backButton.style.display = "none";
    backButton.addEventListener("click", function() {
        reponsesList.style.display = "none";
        backButton.style.display = "none";
        buttons.forEach(btn => {
            btn.parentElement.style.display = "block";
        });
    });
    categoriesDiv.appendChild(backButton);
    
    // Gestion du bouton "Soumettre" dans la popup
    const submitButton = document.querySelector(".popup-submit");
    if (submitButton) {
        submitButton.addEventListener("click", submitLanguageChoice);
    }

    // ecouteurs d'événements pour chaque bouton de catégorie
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let categorie = this.innerText;
            //fetch pour récupérer les réponses
            fetch("reponses.php")
                .then(response => response.json())
                .then(data => {
                    let reponses = data[categorie];
                    if (reponses) {
                        reponsesList.innerHTML = "";
                        //titre de la catégorie
                        let titre = document.createElement("h4");
                        titre.innerText = categorie;
                        reponsesList.appendChild(titre);
                        //enumération des réponses
                        reponses.forEach((reponse, index) => {
                            let li = document.createElement("li");
                            li.className = "no_point";
                            //création des bouton avec la phrase ou mot associée
                            let btn = document.createElement("button");
                            btn.innerText = reponse.phrase; //voir l'objet json
                            btn.className = "button_reponse";
                            btn.addEventListener("click", function() {
                                openLanguagePopup(reponse, index, categorie);
                            });
                            
                            li.appendChild(btn);
                            reponsesList.appendChild(li);
                        });
                        
                        reponsesList.style.display = "block";
                        backButton.style.display = "block";
                        
                        buttons.forEach(btn => {
                            btn.parentElement.style.display = "none";
                        });
                    }
                })
                .catch(error => console.error("Erreur : ", error));
        });
    });
});