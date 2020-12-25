<?php
// add code here
session_start();

$servername = "localhost";
$username = "joybanna";
$password = "joybanna";
$dbname = "mdt419";

$tablename = "product";
$name=$_GET["productname"];
$type=$_GET["Gametype"];
$info=$_GET["infomation"];
$pice=$_GET["price"];


$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
	die("Connection failed:".$conn->connect_error);
}

$sql = "CREATE TABLE $tablename
(id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(60) NOT NULL UNIQUE
,type VARCHAR(50) NOT NULL
,info VARCHAR(200)
,pic VARCHAR(60)
,pic2 VARCHAR(60)
,pic3 VARCHAR(60)
,price INT(60)
,reg_date TIMESTAMP)";
if($conn->query($sql)===TRUE){	
}
else {
	//echo"Error created table:".$conn->error;
}



$sql = "INSERT INTO $tablename(name,type,info,price) 
VALUES ('$name','$type','$info','$pice')";

if($conn->query($sql)===TRUE){
	
	
	header('Location: http://localhost/Shopping/addpicproduct.php');
}else {
	header('Location: http://localhost/Shopping/additem.php?error=1');
}
$_SESSION['ProductName']=$name;
$conn->close();

?>