<?php
	session_start();
		
		if(isset($_SESSION['username']))
		{
			$uname = $_SESSION['username'];
		}else 
		{
			$uname="Guest";
			$_SESSION['username']="Guest";
		}

	$servername = "localhost";
	$username = "joybanna";
	$password = "joybanna";
	$dbname = "mdt419";

	$tablename = "product";
	

	$name=$_SESSION['Game'];

	

	$conn = new mysqli($servername,$username,$password,$dbname);
	if($conn->connect_error)
	{
		die("Connection failed:".$conn->connect_error);
	}
	$sql = "SELECT name,type,info,pic,pic2,pic3,price FROM $tablename WHERE name='$name'";
	$result = $conn->query($sql);

	if($result->num_rows>0){
			
		while($row = $result->fetch_assoc()){
			$gamename = $row["name"];
			$gametype = $row["type"];
			$gameinfo = $row["info"];
			$gamepic = $row["pic"];
			$gamepic2 = $row["pic2"];
			$gamepic3 = $row["pic3"];
			$gameprice = $row["price"];	
		}
	}
$_SESSION['Price']=$gameprice;	
$conn->close();	
	
	
?>



<!DOCTYPE html>
<html>
<head>
	<title>item</title>
</head>
<body>
	<div class="Head">
		<div class="banner"></div>
		<div class="nav_bar">
			<div class="home_but">Home</div>
			<div class="login_but">Login</div>
			<div class="regis_but">Register</div>
		</div>
	</div>
	
	<div class="content">
		<div class="item">
			<span><?php echo $gamename;?></span>
			<div class="pic_item">
				<?php
					echo "<img src=".$gamepic.">";
					echo "<img src=".$gamepic2.">";
					echo "<img src=".$gamepic3.">";
					
				?>
				
			</div>
			<div class="info_item">
				<div class="info">
					<span><?php echo $gameinfo;?></span>
				</div>
				<div class="pice">
					<span><?php echo $gameprice;?></span>
				</div>
				<div class="buy_but">
					<form class="form" action="js/addOrder.php" method="get" accept-charset="utf-8">
						<button type="submit" name="buy" value="">buy</button>
					</form>
				</div>
			</div>
		</div>
		<div class="reveiw">
			<div class="reveiw_show">

			<span>reveiw</span>
				<?php 								
					$servername = "localhost";
					$username = "joybanna";
					$password = "joybanna";
					$dbname = "mdt419";

					$tablenamepost ="post";
					$name=$_SESSION['Game'];

					$conn = new mysqli($servername,$username,$password,$dbname);
					if($conn->connect_error)
					{
						die("Connection failed:".$conn->connect_error);
					}
					$sqlp ="SELECT game,userpost,massagepost,reg_date FROM $tablenamepost WHERE game='$name'";
					$resultp = $conn->query($sqlp);
					
					if($resultp->num_rows>0)
					{		
						while($row = $resultp->fetch_assoc())
						{							
							echo "<div class=".'"Gmassage"'.">"."<p class=".'"uname"'.">".
							$row["userpost"]."</p>"."<p class=".'"massage"'.">".
							$row["massagepost"]."</p>"."<span class=".'"date"'.">".
							$row["reg_date"]."</span>".
							
							"</div>";
						}
						
					}
					$conn->close();	
				?>
			</div>

			<div class="reveiw_post">
			<form class="form" action="js/reveiwgame.php" method="get" accept-charset="utf-8">
				<label>Post-Reveiw Game:</label>
                <textarea id="postreveiw" name="postreveiw" placeholder="reveiw-game" style="height:200px"></textarea><br>
				<input type="submit" name="submit" value="Post">
			</form>
			</div>
		</div>
		
	</div>

	<div class="foot"></div>

</body>
</html>