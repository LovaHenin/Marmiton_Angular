<?php

require_once'init.php';

if($_GET['action']=='create'){

    $data=json_decode(file_get_contents('php://input'),true);
    $sql="REPLACE INTO etape (id,titre,id_recette) VALUES (:id,:titre,:id_recette)";
    $result=$pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data);
}


if($_GET['action']=='readOne'){
    $sql=" SELECT * FROM etape WHERE id=:id";
    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    $data=$result->fetch(PDO::FETCH_ASSOC);
    echo json_encode($data);
 
}

if($_GET['action']=='readEtapes'){
    $sql=" SELECT e.* FROM etape e INNER JOIN recette r ON r.id=e.id_recette WHERE e.id_recette=:id";
    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    $data=$result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
 
}


if($_GET['action']=='delete'){
    $sql=" DELETE FROM etape WHERE id=:id";
    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
   
    echo json_encode($result);
 
}


?>



