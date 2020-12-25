<?php
// add code here
session_start();

$servername = "localhost";
$username = "joybanna";
$password = "joybanna";
$dbname = "mdt419";

$name=$_GET["username"];
$pass=$_GET["password"];
$tablename = "ShoppingUser";

$_SESSION['username']=$name;

$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
	die("Connection failed:".$conn->connect_error);
}
//echo"Connected Successfully <br>";

$sql ="SELECT name,pass FROM $tablename WHERE name='$name'";
$result = $conn->query($sql);

if($result->num_rows>0)
{
	while($row = $result->fetch_assoc())
	{				
		if($pass==$row["pass"])
		{	
			//echo "pass";
			
			header('Location: https://localhost/shopping/home.php');
			exit();
		}
		else{
			
			header('Location:https://localhost/shopping/login.html?error=1');
			   
		}
	}	
}
else 
{
	header('Location:https://localhost/shopping/login.html?error=1');
}

$conn->close();
?>