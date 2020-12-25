<?php
$servername = "localhost";
$username = "joybanna";
$password = "joybanna";
$dbname = "mdt419";
$tablename = "product";

$name=$_GET["productname"];

//echo "$name";

$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
	die("Connection failed:".$conn->connect_error);
}




	$sql = "SELECT*FROM $tablename WHERE name = '$name'";
	$result = $conn->query($sql);
	if($result->num_rows>0)
	{
	while($row = $result->fetch_assoc())
	{				
		if($name==$row["name"])
		{	
			//echo "pass";
			
			$sql = "DELETE FROM $tablename WHERE name = '$name'";
			$result = $conn->query($sql);
			header('Location: https://localhost/shopping/home.php');		
			
		}
	}	
	}else{
		header('Location: http://localhost/Shopping/additem.php?error=3');
	}




	$conn->close();
?>