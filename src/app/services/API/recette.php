<?php


require_once'init.php';

if($_GET['action']=='create'){

    $data=json_decode(file_get_contents('php://input'),true);
    $sql="REPLACE INTO recette (id,titre,description,cout,tempsprep,tempscuisson,difficulte,id_categorie,photo,favori) VALUES (:id,:titre,:description,:cout,:tempsprep,:tempscuisson,:difficulte,:id_categorie,:photo,:favori)";
    $result=$pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data);
}



if($_GET['action']=='readAll'){
    $sql=" SELECT r.*,c.titre as categorie FROM categorie c INNER JOIN recette r ON r.id_categorie=c.id";
    $result=$pdo->prepare($sql);
    $result->execute();
    $data=$result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
 
}
if($_GET['action']=='readFavoris'){
    $sql=" SELECT r.*,c.titre as categorie FROM categorie c INNER JOIN recette r ON r.id_categorie=c.id WHERE r.favori=true";
    $result=$pdo->prepare($sql);
    $result->execute();
    $data=$result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
 
}

if($_GET['action']=='readOne'){
   
    $sql=" SELECT r.*,c.titre FROM categorie c INNER JOIN recette r ON r.id_categorie=c.id WHERE r.id=:id";
    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    $data=$result->fetch(PDO::FETCH_ASSOC);
    echo json_encode($data);
 
}
// utilisation de pipe
if($_GET['action']=='readPipe'){
    $sql=" SELECT * FROM recette WHERE id=:id";
    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    $data=$result->fetch(PDO::FETCH_ASSOC);
    echo json_encode($data);
}

if($_GET['action']=='delete'){
    $sql=" DELETE FROM recette WHERE id=:id";
    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
   
    echo json_encode($result);
 
}


?>



