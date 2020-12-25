<?php
	session_start();
		
			
	if(isset($_SESSION['username']))
	{
		if($_SESSION['username']!="Guest"){
			$uname = $_SESSION['username'];
		}else{
			$uname="Guest";
		}
		
	}else 
	{
		$uname="Guest";
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
	 <link rel="stylesheet" href="css/choseitem.css" type="text/css">
</head>
<body>
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
	
	<div class="content">

<div class="bg1">
<div class="item">	
	<div class="name1"><?php echo $gamename;?></div>
		


			<div class="pic_item">

			 
				<div class="slide_show">
				<div class="mySlides fade">					
					<?php echo "<img  class=".'"img1"'."src=".$gamepic2.">";?>			
				</div>
				<div class="mySlides fade">
					<?php echo "<img  class=".'"img2"'."src=".$gamepic3.">";?>
				</div>								
				<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  				<a class="next" onclick="plusSlides(1)">&#10095;</a>
  				
  				<div class="five_dot">
 					<span class="dot" onclick="currentSlide(1)"></span> 
  					<span class="dot" onclick="currentSlide(2)"></span>  		 			  
				</div>



			</div>	
		
  					
			  <div class="info">
			  	<div class="picpro"><?php echo "<img src=".$gamepic.">";?></div>
			   	    <div class="tp1" >Game-Type: <?php echo $gametype;?></div>
			    <div class="inin1"><?php echo $gameinfo;?></div>
			   </div>


 			
</div>

 


			

<div class="f555">
			<div class="info_item">
			     <div class="tag1"><div class="name1">Name : <?php echo $gamename;?></div></div>
			        <div class="in1">	
				       <div class="pice"> <?php echo $gameprice;?>

</div>
				       
			        </div>

		    </div>

		    <div class="buy_but">
<form class="form" action="js/addOrder.php" method="get" accept-charset="utf-8">
						<button class="buy1" type="submit" name="buy" value="">buy</button>
					</form>
				       </div>
</div>		    

		</div>


		<br>
 <div class="info3">
		  <div class="info2">
		<div class="info4">  	
		      <div class="reveiw">Add Your Post</div><hr>

                   <div class="reveiw_post">
			<form class="form" action="js/reveiwgame.php" method="get" accept-charset="utf-8">
				<label>Post-Reveiw Game:</label>
                <div><textarea id="postreveiw" name="postreveiw" placeholder="reveiw-game" ></textarea></div>
				<input type="submit" class="postgm" name="submit" value="Post">
			</form>
			</div>
		</div>

<div class="info5">  
<div class="reveiw1">Reveiw Game</div><hr>
		           <div  class="repost"> <?php 								
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
				?></div>
</div>
				

	     </div>

	 </div>





</div>
</div>

	<div class="foot"></div>

	<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
</script>

</body>
</html>