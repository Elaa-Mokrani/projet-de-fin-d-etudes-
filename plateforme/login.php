<?php
$host = "localhost"; /* Nom de l'hôte */
$user = "root"; /* Utilisateur */
$password = ""; /* Mot de passe */
$dbname = "pfe"; /* Nom de la base de données */

$con = mysqli_connect($host, $user, $password,$dbname);
// Vérifier la connexion
if (!$con) {
 die("Échec de la connexion : " . mysqli_connect_error());
}

if(isset($_POST['username']) && isset($_POST['password'])){
 
 $username = $_POST['username'];
 $password = $_POST['password'];

 $sql_query = "select count(*) as cntUser from user where username='".$username."' and password='".$password."'";
 $result = mysqli_query($con,$sql_query);
 $row = mysqli_fetch_array($result);

 $count = $row['cntUser'];

 if($count > 0){
    header('Location: pfe.html');
 }else{
    echo "Nom d'utilisateur ou mot de passe incorrect";
 }

}
?>
