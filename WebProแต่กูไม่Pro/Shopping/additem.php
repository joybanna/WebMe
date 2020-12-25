
<?php
    session_start();
  if(isset($_SESSION['username']))
    {
      $uname = $_SESSION['username'];
            if($uname=="Guest"){header('Location: http://localhost/Shopping/login.html');}
    }else 
    {
      header('Location: http://localhost/Shopping/login.html');
    }


    
?>

<!DOCTYPE html>
<html>
<head>

    <title>item</title>
    <script type="text/javascript" src="js/addItem.js"></script>
    <link rel="stylesheet" type="text/css" href="css/additem.css">
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
        
     
       

         

        <div class="form_item">

            <form class="form" action="js/addDBG.php" method="get" accept-charset="utf-8">

                <div class="field1">
                    <legend> Add Product </legend>
                   <div class="nana"> Game-Name:<input class="name01" type="text" name="productname" value="" placeholder="" required><br>
                   </div>
                   
                    <label class="infog">Infomation-Game</label>
                    <textarea id="infomation" name="infomation" placeholder="infomation-game" ></textarea><br>
 <label for="type">Game-Type</label>
                    <select id="type" name="Gametype">
                        <option value="RolePlayGame">Role Play Game</option>
                        <option value="FirstPersonShooter">First Person Shooter</option>
                        <option value="Simulation">Simulation</option>
                        <option value="SportGame">Sport Game</option>
                        <option value="RealTimeStrategy">Real Time Strategy</option>
                        <option value="TurnBaseStrategy">Turn Base Strategy</option>
                        <option value="Indy">Indy</option>
                    </select><br>

                   <div class="nana"> Price: <input type="text" class="pbg" name="price" value="" placeholder="" required>  $<br></div>
                    <span id="errordisplayRegister"></span><br>
                    <input class="butbut" type="submit" name="submit" value="Register">
                </div>
            </form>
         

            <form class="form" action="js/updateDBG.php" method="get" accept-charset="utf-8">

               <div class="field2">


                    <legend> Update Product </legend>
                    <div class="nana">Game-Name:<input type="text" class="name01" name="productname" value="" placeholder="" required><br>
                    </div>
                    <label for="type">Game-Type:</label>
                    <select id="type" name="Gametype">
                        <option value="RolePlayGame">Role Play Game</option>
                        <option value="FirstPersonShooter">First Person Shooter</option>
                        <option value="Simulation">Simulation</option>
                        <option value="SportGame">Sport Game</option>
                        <option value="RealTimeStrategy">Real Time Strategy</option>
                        <option value="TurnBaseStrategy">Turn Base Strategy</option>
                        <option value="Indy">Indy</option>
                    </select><br>
                    <label class="infog">Infomation-Game:</label>
                    <textarea id="infomation" name="infomation" placeholder="infomation-game" ></textarea><br>
                   <div class="nana"> Price: <input type="text" class="pbg" name="price" value="" placeholder="" required>  $<br></div>
                    <span id="errordisplayUpdate"></span><br>
                    <input type="submit" class="butbut" name="submit" value="Update">
                </div>


            </form>
      

            <form class="form" action="js/deleteDBG.php" method="get" accept-charset="utf-8">

                <div class="field3">
                    <legend> Delete Product </legend>
                   <div class="nana"> Game-Name:<input type="text" class="name01" name="productname" value="" placeholder="" required><br>
                   </div>
                    <span id="errordisplayDelete"></span><br>
                    <input type="submit" class="butbut" name="submit" value="Delete">
                </div>

            </form>

        </div>  

    </div>

    <div class="foot"></div>

</body>
</html>