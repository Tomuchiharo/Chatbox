<?php
include "connexion_bdd.php";

$name = $_POST['chatroom'];

$requete = $pdo->prepare("
    INSERT INTO `Chat`(`chatName`) VALUES (?)
");

$requete->execute([$name]);


echo json_encode($name);
?>