<?php
	session_start();
	$servername = "localhost";
	$username = "joybanna";
	$password = "joybanna";
	$dbname = "mdt419";

	$tablename = "product";
	$name=$_GET["productname"];
	$type=$_GET["Gametype"];
	$info=$_GET["infomation"];
	$price=$_GET["price"];

	$conn = new mysqli($servername,$username,$password,$dbname);
	if($conn->connect_error)
	{
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
				$sqlupdate="UPDATE $tablename SET type='$type',info='$info',price='$price' WHERE name='$name'";
				$resultu = $conn->query($sqlupdate);
				echo $type,$info,$price,$name;
				header('Location: http://localhost/Shopping/home.php');
							
			}

		}

	}else{
		header('Location: http://localhost/Shopping/additem.php?error=2');
	}












	/*$sqlupdate="UPDATE $tablename SET type='$type',info='$info',price='$price' WHERE name='$name'";

$result = $conn->query($sql);


	if($result->num_rows>0)
	{
	while($row = $result->fetch_assoc())
	{				
		if($name==$row["name"])
		{	
			//echo "pass";
			
			header('Location: https://localhost/shopping/home.php');
			exit();
		}
		
	}	
}

else{
	header('Location: http://localhost/Shopping/additem.php?error=2');

}*/


	
		$conn->close();
	

?>