<?php
include "connexion_bdd.php";

$msg = $_POST['msg'];
$chat = $_POST['chat'];
$pseudo = $_POST['pseudo'];

$requete = $pdo->prepare("SELECT `Id` FROM `Chat` WHERE `chatName`=?");

$requete->execute([$chat]);

$chatName = $requete->fetch(PDO::FETCH_ASSOC);

$requete = $pdo->prepare("SELECT `Id` FROM `User` WHERE `Pseudo`=?");

$requete->execute([$pseudo]);

$myPseudo = $requete->fetch(PDO::FETCH_ASSOC);

/*
("SELECT `User_Id`, `chat_Id` FROM `msg` INNER JOIN Chat ON msg.chat_Id = Chat.Id INNER JOIN User ON msg.User_Id = User.Id WHERE chatName = ? AND Pseudo = ?
");

$requete->execute([$chat, $pseudo]);

$requete = $requete->fetch(PDO::FETCH_ASSOC);

echo $requete;*/

$requete = $pdo->prepare("
INSERT INTO `msg`(`User_Id`, `Content`, `chat_Id`) VALUES (?, ?, ?)
");

$data = $requete->execute([$myPseudo['Id'], $msg, $chatName['Id']]);

echo json_encode($data);

?>