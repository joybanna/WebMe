<?php
	session_start();
	$servername = "localhost";
	$username = "joybanna";
	$password = "joybanna";
	$dbname = "mdt419";
	$tablename = "product";

	$name=$_GET["namegame"];
	$_SESSION['Game']=$name;
	$conn = new mysqli($servername,$username,$password,$dbname);
	if($conn->connect_error)
	{
		die("Connection failed:".$conn->connect_error);
	}
	$sql = "SELECT name,type,info,pic FROM $tablename WHERE name='$name'";
	$result = $conn->query($sql);
	
	if($result->num_rows>0)
	{
		while($row = $result->fetch_assoc())
		{
			if($name==$row["name"])
			{				
				header('Location: https://localhost/shopping/choseitem.php');
			}
			
		}	
	}

$conn->close();
?>