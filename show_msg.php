<?php

include "connexion_bdd.php";

$chat = $_POST['chat'];
$pseudo = $_POST['pseudo'];

//Recuperer chat_Id

$requete = $pdo->prepare("SELECT `Id` FROM `Chat` WHERE `chatName`=?");

$requete->execute([$chat]);

$chatName = $requete->fetch(PDO::FETCH_ASSOC);

//Recuperer User_Id

$requete = $pdo->prepare("SELECT `Id` FROM `User` WHERE `Pseudo`=?");

$pseudo = $requete->execute([$pseudo]);

$myPseudo = $requete->fetch(PDO::FETCH_ASSOC);

//Recuperer les msg

$requete = $pdo->prepare("SELECT msg.`Id`, `User_Id`, `Content`, msg.`dateTime`, `chat_Id`, Pseudo FROM `msg` INNER JOIN User ON msg.User_Id = User.Id WHERE `chat_Id`=? ORDER BY msg.`dateTime`");

$requete->execute([ $chatName['Id']]);

$result = $requete->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);

?>