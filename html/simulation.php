<?php
// Connexion à la base de données
include('bd.php');
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Récupération des données du formulaire
        $Nom = $_POST['nom'];
        $Genre = $_POST['identite'];

        // Préparation de la requête pour éviter les injections SQL
        $sql = "INSERT INTO utilisateurs (Nom, Genre) VALUES ('$Nom', '$Genre')";
        $stmt = $conn->prepare($sql);

        // Exécution de la requête
        $stmt->execute();

        echo "Données enregistrées avec succès.";
        
    }


// Fermer la connexion
$conn = null;
header("location: choix_option.html");
exit();
?>
