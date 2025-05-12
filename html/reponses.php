<?php
$reponses = [
    "Qualités" => [
        [
            "phrase" => "Organisation",
            "soutenue" => "Je suis extrêmement organisé et méthodique.",
            "modérée" => "Je suis très organisé.",
            "familière" => "Je suis super bien organisé."
        ],
        [
            "phrase" => "Travail en équipe",
            "soutenue" => "Je collabore efficacement au sein d'une équipe.",
            "modérée" => "Je travaille bien en équipe.",
            "familière" => "Je m'entends bien avec les autres pour bosser."
        ],
        [
            "phrase" => "Initiative",
            "soutenue" => "Je fais preuve d'un excellent sens de l'initiative.",
            "modérée" => "J’ai un excellent sens de l’initiative.",
            "familière" => "Je prends souvent les devants."
        ],
        [
            "phrase" => "Créativité",
            "soutenue" => "Je suis doté d'une grande créativité.",
            "modérée" => "Je suis créatif.",
            "familière" => "J’ai plein d’idées cool."
        ],
        [
            "phrase" => "Adaptabilité",
            "soutenue" => "Je m'adapte aisément aux nouvelles situations.",
            "modérée" => "Je m’adapte facilement aux nouvelles situations.",
            "familière" => "Je m’habitue vite aux changements."
        ]
    ],
    "Défauts" => [
        [
            "phrase" => "Perfectionnisme",
            "soutenue" => "Je tends parfois à rechercher une perfection excessive.",
            "modérée" => "Je suis parfois perfectionniste.",
            "familière" => "Je veux toujours que tout soit parfait."
        ],
        [
            "phrase" => "Délégation",
            "soutenue" => "J'éprouve des difficultés à déléguer certaines tâches.",
            "modérée" => "J’ai du mal à déléguer.",
            "familière" => "J’ai du mal à refiler des trucs à faire."
        ],
        [
            "phrase" => "Impatience",
            "soutenue" => "Je peux faire preuve d'impatience dans certaines situations.",
            "modérée" => "Je peux être impatient.",
            "familière" => "Je perds vite patience."
        ],
        [
            "phrase" => "Exigence personnelle",
            "soutenue" => "Je suis parfois trop exigeant envers moi-même.",
            "modérée" => "Je suis parfois trop exigeant avec moi-même.",
            "familière" => "Je me mets trop la pression."
        ],
        [
            "phrase" => "Procrastination",
            "soutenue" => "J'ai tendance à procrastiner lorsque je suis sous pression.",
            "modérée" => "J’ai tendance à procrastiner sous pression.",
            "familière" => "Je repousse tout au dernier moment quand je stresse."
        ]
    ],
    "Hobbies" => [
        [
            "phrase" => "Lecture",
            "soutenue" => "Je prends plaisir à lire des ouvrages variés.",
            "modérée" => "J’aime la lecture.",
            "familière" => "J’adore bouquiner."
        ],
        [
            "phrase" => "Sport",
            "soutenue" => "Je pratique régulièrement une activité sportive.",
            "modérée" => "Je pratique le sport régulièrement.",
            "familière" => "Je fais souvent du sport."
        ],
        [
            "phrase" => "Musique",
            "soutenue" => "Je suis passionné par la musique.",
            "modérée" => "Je suis passionné de musique.",
            "familière" => "La musique, c’est ma passion."
        ],
        [
            "phrase" => "Voyage",
            "soutenue" => "J'apprécie voyager et découvrir de nouvelles cultures.",
            "modérée" => "J’aime voyager et découvrir de nouvelles cultures.",
            "familière" => "J’adore partir à l’aventure et voir de nouveaux endroits."
        ],
        [
            "phrase" => "Cuisine",
            "soutenue" => "Je cuisine fréquemment pour expérimenter de nouvelles recettes.",
            "modérée" => "Je cuisine souvent pour expérimenter de nouvelles recettes.",
            "familière" => "J’aime tester des nouvelles recettes en cuisine."
        ]
    ]
];
#encode en json
header('Content-Type: application/json');
echo json_encode($reponses);
?>