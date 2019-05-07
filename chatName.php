<?php

include "connexion_bdd.php";



$requete = $pdo->prepare("
    SELECT `chatName` FROM `Chat`
");
$requete->execute();

$infos = $requete->fetchAll();

echo json_encode($infos);
