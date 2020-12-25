<?php
// add code here
$servername = "localhost";
$username = "joybanna";
$password = "joybanna";
$dbname = "mdt419";

$tablename = "ShoppingUser";
$Fname=$_GET["firstname"];
$Lname=$_GET["lastname"];
$name=$_GET["username"];
$email=$_GET["email"];
$pass=$_GET["password"];



$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
	die("Connection failed:".$conn->connect_error);
}

$sql = "CREATE TABLE $tablename
(id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(60) NOT NULL UNIQUE
,firstname VARCHAR(60)
,lastname VARCHAR(60)
,email VARCHAR(60)
,pass VARCHAR(60)
,reg_date TIMESTAMP)";
if($conn->query($sql)===TRUE){	
}
else {
	echo"Error created table:".$conn->error;
}



$sql = "INSERT INTO $tablename(name,firstname,lastname,email,pass) 
VALUES ('$name','$Fname','$Lname','$email','$pass')";

if($conn->query($sql)===TRUE){
		
	header('Location: http://localhost/shopping/login.html');
}else {
	header('Location: http://localhost/shopping/register.html?error=1');
}
$conn->close();

?>