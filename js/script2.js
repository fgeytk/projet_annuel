// PARTIE ENTRETIEN AVANCE
const questionsQualites = [
    "Commençons avec une de vos qualités très cher.",
    "Encore une autre qualité ?",
    "Une dernière qualité ?"
];

const questionsDefauts = [
    "Citez un de vos défauts.",
    "Encore un autre défaut ?",
    "Un dernier défaut ?"
];

const questionsHobbies = [
    "Citez un de vos hobbies.",
    "Encore un autre hobby ?",
    "Un dernier hobby ?"
];

let currentQuestionIndex = 0;
let awaitingArgument = false;
let tempQualite = "";
let tempDefaut = "";
let tempHobby = "";

let questionElement;
let answerInput;
let recruiterImg;
let recruiterMessage;
let resultBox;

const answers = [];

// Fonction pour afficher la prochaine question (Qualité)
function showNextQualiteQuestion() {
    questionElement.textContent = questionsQualites[currentQuestionIndex];
    answerInput.value = "";
    recruiterImg.src = "../img/masculin_enthousiaste.png";
    recruiterMessage.textContent = "Je vous écoute...";
}

// Fonction pour afficher la prochaine question (Défaut)
function showNextDefautQuestion() {
    questionElement.textContent = questionsDefauts[currentQuestionIndex - questionsQualites.length];
    answerInput.value = "";
    recruiterImg.src = "../img/masculin_interrogatif.png";
    recruiterMessage.textContent = "Soyons honnête et parlons de vos défauts!!";
}

// Fonction pour afficher la prochaine question (Hobby)
function showNextHobbyQuestion() {
    questionElement.textContent = questionsHobbies[currentQuestionIndex - questionsQualites.length - questionsDefauts.length];
    answerInput.value = "";
    recruiterImg.src = "../img/masculin_neutre.png";
    recruiterMessage.textContent = "Parlez-moi un peu plus de vos hobby.";
}

// Fonction pour afficher le résultat final
function showResult() {
    document.getElementById("question-recruteur").style.display = "none";
    resultBox.style.display = "block";
    let html = "<h2>Résumé de vos réponses :</h2><ul>";
    answers.forEach((ans, idx) => {
        html += `<li>
            <strong>Réponse ${idx + 1} :</strong><br>
            ${ans.qualite ? "Qualité : " + ans.qualite + "<br>" : ""}
            ${ans.defaut ? "Défaut : " + ans.defaut + "<br>" : ""}
            ${ans.hobby ? "Hobby : " + ans.hobby + "<br>" : ""}
            Argument : ${ans.argument}<br>
            <img src="${ans.image}" alt="feedback" style="height:40px;vertical-align:middle;">
            <span>${ans.message}</span>
        </li>`;
    });
    html += "</ul>";
    resultBox.innerHTML = html;
}

// Fonction demander d'argumenter chaque qualités, défauts ou hobbies
function nextquestion() {
    const response = answerInput.value.trim();
    if (response === "") {
        alert("Merci de répondre avant de continuer.");
        return;
    }

    if (!awaitingArgument) {
        if (currentQuestionIndex < questionsQualites.length) {
            tempQualite = response;
            questionElement.textContent = `Pourquoi "${tempQualite}" est-elle une vraie qualité chez vous ?`;
        } else if (currentQuestionIndex < questionsQualites.length + questionsDefauts.length) {
            tempDefaut = response;
            questionElement.textContent = `Pourquoi "${tempDefaut}" est-il un défaut que vous avez ?`;
        } else {
            tempHobby = response;
            questionElement.textContent = `Pourquoi aimez-vous "${tempHobby}" ?`;
        }

        recruiterImg.src = "../img/masculin_interrogatif.png";
        recruiterMessage.textContent = "Intéressant... pouvez-vous argumenter cette réponse ?";
        answerInput.value = "";
        awaitingArgument = true;

    } else {
        const argument = response.toLowerCase();
        let img = "../img/masculin_neutre.png";
        let message = "Merci pour votre argumentation.";

        if (argument.length < 15) {
            img = "../img/masculin_mecontent.png";
            message = "Essayez d’être un peu plus précis la prochaine fois.";
        } else if (argument.includes("travail") || argument.includes("équipe") || argument.includes("motivation")) {
            img = "../img/masculin_ravi.png";
            message = "Excellent ! Le travail d'équipe est essentiel.";
        } else if (argument.includes("créatif") || argument.includes("autonome") || argument.includes("curiosité")) {
            img = "../img/masculin_enthousiaste.png";
            message = "Une très belle qualité, continuez comme ça !";
        } else if (argument.includes("timide") || argument.includes("stressé") || argument.includes("impatient") || argument.includes("désorganisé")) {
            img = "../img/masculin_sceptique.png";
            message = "Merci de votre honnêteté. C'est bien d'en avoir conscience.";
        } else if (argument.includes("lecture") || argument.includes("musique") || argument.includes("voyage") || argument.includes("cinéma") || argument.includes("sport")) {
            img = "../img/masculin_ravi.png";
            message = "Très bon moyen de se détendre en dehors du travail.";
        } else if (argument.includes("ambitieux") || argument.includes("perfectionniste") || argument.includes("rigoureux")) {
            img = "../img/masculin_enthousiaste.png";
            message = "Wow ! Voilà une vraie volonté de se dépasser.";
        } else if (argument.includes("leadership") || argument.includes("diriger") || argument.includes("manager") || argument.includes("gestion")) {
            img = "../img/masculin_curieux.png";
            message = "Qualité précieuse pour des postes à responsabilité.";
        } else if (argument.includes("réservé") || argument.includes("introverti") || argument.includes("solitaire")) {
            img = "../img/masculin_neutre.png";
            message = "Chacun a sa façon de fonctionner, c’est respectable.";
        } else if (argument.includes("dormir") || argument.includes("manger") || argument.includes("netflix") || argument.includes("jeux vidéo")) {
            img = "../img/masculin_interrogatif.png";
            message = "Intéressant... Mais cela mérite un peu plus d’explication.";
        }

        answers.push({
            qualite: (currentQuestionIndex < questionsQualites.length) ? tempQualite : "",
            defaut: (currentQuestionIndex >= questionsQualites.length && currentQuestionIndex < questionsQualites.length + questionsDefauts.length) ? tempDefaut : "",
            hobby: (currentQuestionIndex >= questionsQualites.length + questionsDefauts.length) ? tempHobby : "",
            argument: response,
            image: img,
            message: message
        });

        recruiterImg.src = img;
        recruiterMessage.textContent = message;

        currentQuestionIndex++;
        awaitingArgument = false;

        if (currentQuestionIndex < questionsQualites.length) {
            setTimeout(showNextQualiteQuestion, 1500);
        } else if (currentQuestionIndex < questionsQualites.length + questionsDefauts.length) {
            setTimeout(showNextDefautQuestion, 1500);
        } else if (currentQuestionIndex < questionsQualites.length + questionsDefauts.length + questionsHobbies.length) {
            setTimeout(showNextHobbyQuestion, 1500);
        } else {
            setTimeout(showResult, 1500);
        }
    }
}

// Initialisation des éléments DOM pour la partie entretien avancé
document.addEventListener("DOMContentLoaded", function () {
    questionElement = document.getElementById("question");
    answerInput = document.getElementById("reponse");
    recruiterImg = document.getElementById("img_recruteur");
    recruiterMessage = document.getElementById("recruteur-message");
    resultBox = document.getElementById("resultat");

    // Si on est sur la page entretien avancé, on lance la première question
    if (questionElement && answerInput && recruiterImg && recruiterMessage && resultBox) {
        showNextQualiteQuestion();
    }
});


