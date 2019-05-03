<?php
include "connexion_bdd.php";

$name = $_POST['msg'];

$requete = $pdo->prepare("
INSERT INTO `msg`(`User_Id`, `Content`, `chat_Id`) VALUES (?, ?, ?)
");

$requete->execute([$name]);

echo json_encode($name);


?>