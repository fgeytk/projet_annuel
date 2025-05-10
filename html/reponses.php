<?php
$reponses = [
    "Qualités" => [
        "Je suis très organisé.", 
        "Je travaille bien en équipe.", 
        "J’ai un excellent sens de l’initiative.",
        "Je suis créatif.", 
        "Je m’adapte facilement aux nouvelles situations."
    ],
    "Défauts" => [
        "Je suis parfois perfectionniste.", 
        "J’ai du mal à déléguer.", 
        "Je peux être impatient.",
        "Je suis parfois trop exigeant avec moi-même.", 
        "J’ai tendance à procrastiner sous pression."
    ],
    "Hobbies" => [
        "J’aime la lecture.", 
        "Je pratique le sport régulièrement.", 
        "Je suis passionné de musique.",
        "J’aime voyager et découvrir de nouvelles cultures.", 
        "Je cuisine souvent pour expérimenter de nouvelles recettes."
    ]
];
#encode en json
header('Content-Type: application/json');
echo json_encode($reponses);
?>