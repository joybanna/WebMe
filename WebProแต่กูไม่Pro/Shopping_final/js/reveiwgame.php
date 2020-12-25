reveiwgame.php
Today
5:49 AM

joy banna restored an item
PHP
reveiwgame.php
5:49 AM

joy bannamoved an item to the trash
PHP
reveiwgame.php
5:47 AM

joy banna uploaded an item
PHP
reveiwgame.php
<?php
session_start();
	if(isset($_SESSION['username']))
	{
		if($_SESSION['username']!="Guest"){
			$unamepost = $_SESSION['username'];
		}else{
			$unamepost="Guest";
		}
		
	}else 
	{
		$unamepost="Guest";
	}


	$servername = "localhost";
	$username = "joybanna";
	$password = "joybanna";
	$dbname = "mdt419";

	$tablename = "post";



	
	$gameposted=$_SESSION['Game'];
	$postmassage=$_GET["postreveiw"];

	$conn = new mysqli($servername,$username,$password,$dbname);
	if($conn->connect_error)
	{
		die("Connection failed:".$conn->connect_error);
	}

	$sql = "CREATE TABLE $tablename
	(	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		game VARCHAR(60) NOT NULL,
		userpost VARCHAR(60) NOT NULL,
		massagepost VARCHAR(200) NOT NULL,
		reg_date TIMESTAMP)";
	if($conn->query($sql)===TRUE)
	{
		//echo"created";
		//echo $unamepost;
		header('Location: http://localhost/Shopping/choseitem.php');

	}else 
	{
		//echo"teble is have";
		//echo $unamepost;
		header('Location: http://localhost/Shopping/choseitem.php');
	}



	$sql = "INSERT INTO $tablename(game,userpost,massagepost) 
	VALUES ('$gameposted','$unamepost','$postmassage')";
	if($conn->query($sql)===TRUE)
	{
		//echo"inserted";
		//echo $unamepost;
		header('Location: http://localhost/Shopping/choseitem.php');
	}else
	{
		//echo"can not insert";
		//echo $unamepost;
		header('Location: http://localhost/Shopping/choseitem.php');
	}

	


	$conn->close();
?>