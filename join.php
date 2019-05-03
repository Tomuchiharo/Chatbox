<?php
include "connexion_bdd.php";

$name = $_POST['chatroom'];

$requete = $pdo->prepare("
    SELECT `Id` FROM `Chat` WHERE `chatName`= ? 
");

$requete->execute([$name]);


$infos = $requete->fetch(PDO::FETCH_ASSOC);


echo json_encode($infos);



?>