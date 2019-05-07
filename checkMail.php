<?php
include "connexion_bdd.php";
// var_dump($_POST);
$email = $_POST["mail"];
$mdp = $_POST["password"];


$requete = $pdo->prepare("
    SELECT * FROM User WHERE mail = ? AND password=?
");
$requete->execute([$email, $mdp]);

$infos = $requete->fetch();


if(empty($infos) == true){
    $result = ["result" => "false"];
} else {
    $result = ["result" => "true"];
}

echo json_encode($result);
?>