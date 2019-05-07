<?php

include "connexion_bdd.php";

$name = $_POST['chatName'];
$pseudo = $_POST['pseudo'];


//requete Id chat
$requete = $pdo->prepare("
    SELECT * FROM Chat WHERE chatName = ? 
");

$requete->execute([$name]);

$chat = $requete->fetch(PDO::FETCH_ASSOC);



//requete Id user
$requete = $pdo->prepare("
    SELECT * FROM User WHERE `pseudo`= ? 
");

$requete->execute([$pseudo]);

$infos = $requete->fetch(PDO::FETCH_ASSOC);


//insert BDD

$requete = $pdo->prepare("
INSERT INTO `user_liste`(`Id_User`, `Id_chat`) VALUES (?,?)
");

$requete->execute([$infos['Id'], $chat['Id']]);

$requete = $pdo->prepare("
SELECT chatName FROM `user_liste` INNER JOIN User ON Id_User = User.Id INNER JOIN Chat ON Id_chat = Chat.Id WHERE Id_User = ?
");


$requete->execute([$infos['Id']]);

$nbChat = $requete->fetchAll(PDO::FETCH_ASSOC);


echo json_encode($nbChat);


