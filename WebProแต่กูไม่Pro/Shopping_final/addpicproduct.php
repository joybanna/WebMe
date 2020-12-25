<?php
session_start();
  
        $Pname=$_SESSION['ProductName'];
        $uname=$_SESSION['username'];
        if($uname=="Guest"){header('Location: http://localhost/Shopping/login.html');}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Add Picture Product</title>
    <link rel="stylesheet" type="text/css" href="css/addpicpro.css">
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



    
    
  <div class="ddd"> 
   <div class="content">


    <form action="js/uploadPic.php" method="post" id="formId" enctype="multipart/form-data">
        

            <div class="field1">
            <h3 class="kkk"> Add Picture Product </h3>
            
            <label>Add Picture Profile-Game : </label>
         
            <input type="file" id="fileField" name="fileToUpload" value="fileToUpload" placeholder=""><br>           
			<label>Add Picture Gameplay : </label>
           
			<input type="file" id="fileField" name="fileToUpload2" value="fileToUpload2" placeholder=""><br>            
			<label>Add Picture Gameplay : </label>
             
			<input type="file" id="fileField" name="fileToUpload3" value="fileToUpload3" placeholder=""><br>

       
            <input type="submit" class="sub1" value="Upload file" name="submit"><br>
        </div>
       
    </form>

</div>

</div>





</div>
</body>
</html>