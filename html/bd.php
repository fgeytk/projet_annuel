<?php
    $servername='localhost';
    $username='root';
    $dbname='projet_simulation';
    $password='';
    //pour se connecter à notre base de donnée
    try{
        $conn=new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'votre connexion est établie BG';
    }
    catch(PDOException $e){
        echo "erreurBG".$e->getMessage();
    }
    
?>