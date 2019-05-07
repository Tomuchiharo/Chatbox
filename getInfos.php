<?php
include "connexion_bdd.php";

$mail = $_POST['mail'];

$requete = $pdo->prepare("
    SELECT * FROM User WHERE `mail`= ? 
");

$requete->execute([$mail]);


$infos = $requete->fetch(PDO::FETCH_ASSOC);

echo json_encode($infos);

