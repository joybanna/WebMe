<?php
	session_start();
	if(isset($_SESSION['username']))
	{
	$uname = $_SESSION['username'];
	}else 
	{
		$uname="Guest";
	}


	
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <link rel="stylesheet" href="css/style.css" type="text/css">
    

</head>
<body>
	<div class="Head">
		<div class="banner">
			<div class="slide_show">
				<div class="mySlides fade">
					
					<img class="img1" src="img/bannerhead1.png" >			
				</div>
				<div class="mySlides fade">
					<img class="img2" src="img/bannerhead2.png">		
				</div>
				<div class="mySlides fade">
					<img class="img3" src="img/bannerhead3.png">			
				</div>
				<div class="mySlides fade">
					<img class="img4" src="img/bannerhead4.png">			
				</div>
				<div class="mySlides fade">
					<img class="img5" src="img/bannerhead5.png">		
				</div>

				<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  				<a class="next" onclick="plusSlides(1)">&#10095;</a>
  				
  				<div class="five_dot">
 					<span class="dot" onclick="currentSlide(1)"></span> 
  					<span class="dot" onclick="currentSlide(2)"></span> 
 		 			<span class="dot" onclick="currentSlide(3)"></span>
 		 			<span class="dot" onclick="currentSlide(4)"></span>
 		 			<span class="dot" onclick="currentSlide(5)"></span>   
				</div>
			</div>	
		


		    </div>
		
	    </div>

 <div class="Head11">
        <div class="banner"></div>
        <div class="nav_bar">
            <div class="logo"><img src="img/logo2.png"></div>      
			<div class="urname"><?php echo $uname;?></div>
			<hr>
             <a  class="but01" href='home.php' >Home </a> 
             <a  class="but01" href='additem.php'>Manage Product </a>           
           <a  class="but01" href='checkout.php'>Payment</a>          
    	</div>
    	<div class="hhh"> 
    		<?php if ($uname=="Guest"){echo "<a class=".'"but01"'."href="."'login.html'".">Login</a>";}else{echo "<a></a>";}?>
    		<?php if ($uname=="Guest"){echo "<a class=".'"but01"'."href="."'register.html'".">Register</a>";}else{echo "<a></a>";}?>
    		<?php if ($uname=="Guest"){echo "<a></a>";}else{echo "<a class=".'"but01"'."href="."'js/logout.php'".">Logout</a>";}?>                                   
        </div>
</div>
	

<div id="nav_stick" class="nav_bar1">
			
  			  <form class="formtype" action="typechose.php" method="get" accept-charset="utf-8">               
				 <button class="bot" type="submit" name="typegame" value="all">All</button>
				  <button class="bot" type="submit" name="typegame" value="RolePlayGame">Role Play Game</button>
                  <button class="bot" type="submit" name="typegame" value="FirstPersonShooter" >First Person Shooter</button>
                  <button class="bot" type="submit" name="typegame" value="Simulation">Simulation</button>
                  <button class="bot" type="submit" name="typegame"value="SportGame">Sport Game</button>
                  <button class="bot" type="submit" name="typegame" value="RealTimeStrategy">Real Time Strategy</button>
                  <button class="bot" type="submit" name="typegame"value="TurnBaseStrategy">Turn Base Strategy</button>
				  <button class="bot" type="submit" name="typegame"value="Indy">Indy</button>
			  </form>	  			    
	            </div>
		    </div>

            <div class="content_banner">
			<div>				
				<img src="img/banner1.png">
			</div>
			<div><img src="img/banner2.png"></div>
			<div><img src="img/banner3.png"></div>
			<div><img src="img/banner4.png"></div>
</div>
<div class="content_banner_long">
	<img src="img/banner_long.png">
</div>

    </div>

		<div class="content_item">			
			<?php
					
					$servername = "localhost";
					$username = "joybanna";
					$password = "joybanna";
					$dbname = "mdt419";
					$tablename = "product";

					$typegame=$_GET["typegame"];


					$conn = new mysqli($servername,$username,$password,$dbname);
					if($conn->connect_error){
						die("Connection failed:".$conn->connect_error);
					}	
					
					if($typegame!="all"){
						$sql = "SELECT*FROM $tablename WHERE type='$typegame'"; 
						$result = $conn->query($sql);
						if ($result->num_rows > 0){
						while($row = $result->fetch_assoc())
						{						
							echo "<div class=".'"XXX"'.">".
							"<form action=".'"js/lookproduct.php"'."method=".'"get"'.">".														
							"<img src=".$row["pic"].">"."<br>".
							" Game: ".$row["name"]. "<br>".
							"price: $ " . $row["price"]."<br>".						
							"<button name =".'"namegame"'."type=".'"submit"'."class=".'"block"'."value=". $row["name"].">Purchase</button>".
							"</form></div>";
							
						}
					}
					}else{
						$sql = "SELECT*FROM $tablename"; 
						$result = $conn->query($sql);
						if ($result->num_rows > 0){
						while($row = $result->fetch_assoc())
						{						
							echo "<div class=".'"XXX"'.">".
							"<form action=".'"js/lookproduct.php"'."method=".'"get"'.">".
															
							"<img src=".$row["pic"].">"."<br>".
							" Game: ". $row["name"]. "<br>".
							"price: " . $row["price"]."<br>".						
							"<button name =".'"namegame"'."type=".'"submit"'."class=".'"block"'."value=". $row["name"].">Detail</button>".
							"</form></div>";
							
						}
					}

					}
						


					
					
					
					

					
					$conn->close();
			?>			
		</div>
	</div>

	<div class="foot">
		
	</div>
	<script type="text/javascript" src="js/script.js"></script>

</body>
</html>



