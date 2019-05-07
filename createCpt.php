<?php

include "connexion_bdd.php";
// var_dump($_POST);
$name = $_POST['pseudo'];
$mail = $_POST['mail'];
$password = $_POST['password'];

$requete = $pdo->prepare("
    INSERT INTO `User`( `Pseudo`, mail, password ) VALUES (?,?,?)
");

$requete->execute([$name, $mail, $password]);

echo json_encode($name);

?>