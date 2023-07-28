<?php

require_once'init.php';

if($_GET['action']=='create'){

    $data=json_decode(file_get_contents('php://input'),true);
    $sql="REPLACE INTO ingredient (id,titre,quantite,unite,id_recette) VALUES (:id,:titre,:quantite,:unite,:id_recette)";
    $result=$pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data);
}


if($_GET['action']=='readAll'){
    $sql=" SELECT * FROM ingredient";
    $result=$pdo->prepare($sql);
    $result->execute();
    $data=$result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
 
}
if($_GET['action']=='readOne'){
    $sql=" SELECT * FROM ingredient WHERE id=:id";
    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    $data=$result->fetch(PDO::FETCH_ASSOC);
    echo json_encode($data);
 
}

if($_GET['action']=='readIngredients'){
    $sql=" SELECT i.* FROM ingredient i INNER JOIN recette r ON r.id=i.id_recette WHERE i.id_recette=:id";
    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    $data=$result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
 
}


if($_GET['action']=='delete'){
    $sql=" DELETE FROM ingredient WHERE id=:id";
    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
   
    echo json_encode($result);
 
}


?>



