<?php
	session_start();

			$uname = $_SESSION['username'];

            if($uname=="Guest")
			{

				header('Location: http://localhost/Shopping/login.html');
			}
		
			
	$servername = "localhost";
	$username = "joybanna";
	$password = "joybanna";
	$dbname = "mdt419";

	$game=$_SESSION['Game'];
	$pricegame=$_SESSION['Price'];

	$tablename = "puecheseorder";

	$conn = new mysqli($servername,$username,$password,$dbname);
		if($conn->connect_error)
		{
			die("Connection failed:".$conn->connect_error);
		}


	if($uname!="Guest"){
		$sql = "CREATE TABLE $tablename	
		(id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(60) NOT NULL
		,game VARCHAR(50) NOT NULL
		,price VARCHAR(60)
		)";
		if($conn->query($sql)===TRUE)
		{
			//echo"created";	
			//header('Location:http://localhost/Shopping/checkout.php');
		}
        else 
		{	//echo "teble is have";			 
			//header('Location:http://localhost/Shopping/checkout.php');
		}
	}else{
		header('Location: http://localhost/Shopping/login.html');
	}
		
		




	if($uname!="Guest")
	{
	$sql = "INSERT INTO $tablename(name,game,price) 
		VALUES ('$uname','$game','$pricegame')";
	if($conn->query($sql)===TRUE)
	{		
		header('Location: http://localhost/Shopping/checkout.php');
	}else
	{
		//echo"can not insert";
		//header('Location:http://localhost/Shopping/checkout.php');
	}
}
else{
	header('Location: http://localhost/Shopping/login.html');
}
	
$conn->close();



?>