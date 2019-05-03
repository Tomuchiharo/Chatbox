<?php
include "connexion_bdd.php";

$name = $_POST['pseudo'];

$requete = $pdo->prepare("
    INSERT INTO `User`( `Pseudo`) VALUES (?)
");

$requete->execute([$name]);

echo json_encode($name);




?>