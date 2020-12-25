<?php
$servername = "localhost";
$username = "joybanna";
$password = "joybanna";
$dbname = "mdt419";
$tablename = "puecheseorder";

$name=$_GET["productname"];



$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
	die("Connection failed:".$conn->connect_error);
}
	
	$sql = "DELETE FROM $tablename WHERE game = '$name'";
	if($conn->query($sql)===TRUE)
	{
		echo"sssss";
		header('Location:http://localhost/Shopping/checkout.php');
	}
	else	
	{
		
		//echo"Error:".$sql."<br>".$conn->error;

		header('Location: http://localhost/Shopping/checkout.php');
	}


	$conn->close();
?>