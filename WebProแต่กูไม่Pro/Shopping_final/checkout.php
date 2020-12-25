
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
	<meta charset="UTF-8">
	<title>Order</title>
	<link type="text/css" rel="stylesheet" href="css/neworder.css">
	
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

    


        <div class="row">     
            <div class="col-25">
            
                <div class="container">
                        <div class="addinfo">




                         <div class="forminfo">
                          <h3>Billing Address</h3>

                            <div class="namein"> Full Name : <div><input class="name01" type="text" name="textname" value="" placeholder="John M. Doe" required></div>     
                           </div>
                            <div class="email01"> Email : <div><input class="name01" type="text" name="textname" value="" placeholder="john@example.com" required>   </div>  
                           </div>
                            <div class="address01"> Address : <div><input class="name01" type="text" name="textname" value="" placeholder=542 W. 15th Street" required></div>     
                           </div>
                            <div class="city"> City : <div><input class="name01" type="text" name="textname" value="" placeholder="New York" required></div>     
                           </div>
                         <div class="b1">   <div class="state"> State : <div><input class="name02" type="text" name="textname" value="" placeholder="NY" required></div></div>
                            <div class="postof"> Zip : <div><input class="name03" type="text" name="textname" value="" placeholder="10001" required></div></div>
                        </div>

                          </div>


               <div class="payment">
                            <h3>Payment</h3>
                            <div class="card"> Accepted Card :</div>
                                 <img class="pp1" src="img/mas.jpg">
                                <img class="pp1" src="img/visa.jpg">
                                 <img class="pp1" src="img/pay.jpg">
                                 <img class="pp1" src="img/jcb.jpg">

                            <div class="namecard">Name Card : <div><input class="name01" type="text" name="textname" value="" placeholder="John More Doe" required></div>  </div>
                            <div class="numcard"> Card Number : <div><input class="name01" type="text" name="textname" value="" placeholder="1111-2222-3333-4444" required></div>  </div>
                            <div class="exp"> Exp Month : <div><input class="name01" type="text" name="textname" value="" placeholder="May" required> </div> </div> 
                      <div class="b1">      
                            <div class="year">  Year : <div><input class="name02" type="text" name="textname" value="" placeholder="2020" required> </div> </div>
                            <div class="cvv">CVV : <div><input class="name03" type="text" name="textname" value="" placeholder="352" required></div>  </div>
                        </div> 
                        </div>



                        <div class="check"> <div><input type="submit" value="Check Out" class="checkbott" onclick="alertF()"></div></div>
</form>                    </div>



                  <div class="Order1"> 

                  <div class="ooo"> 
                    <p class="ordername">Order <span class="price"><b></b></span></p>

                     <?php
                            

                                $uname = $_SESSION['username'];
                                $servername = "localhost";
                                $username = "joybanna";
                                $password = "joybanna";
                                $dbname = "mdt419";
                                $tablename = "puecheseorder";
                                $sum=0;
                                $conn = new mysqli($servername,$username,$password,$dbname);
                                if($conn->connect_error)
                                {
                                    die("Connection failed:".$conn->connect_error);
                                }
                                $sql = "SELECT name,game,price FROM $tablename WHERE name='$uname'";
                                $result = $conn->query($sql);
                                if($result->num_rows>0){
                                
                                $num=0;
                                    while($row = $result->fetch_assoc())
                                    {                           
                                        $sum+=$row["price"];
                                        $num++;
                                        echo 
                                        
                                        "<p><a>".$row["game"]."</a>".                                        
                                        "<span class=".'"price"'.">".$row["price"]."</span></p>";
                                        
                                    }

                                    echo "<hr><p>Total<span class=".'"price"'.">".$sum."</span>";
                                    
                                }
                                $conn->close();
                                $_SESSION['total']=$sum;
                                if($sum==null){
                                	echo "!! No product in your cart!!";
                                }
                        ?>
                      </div>
 
  <form action="js/deleteOrder.php" class="gogo">
            Delete-Order :<div class="delete"><input type="text" class="gmname" name="productname" value="" placeholder="Game Name" required></div><br>
            <span id="errordisplay"></span>
 <div class="fff"><input type="submit" class="checkbott" value="Delete list" ></div>
  </form>


</div>
</div>
                   
                   
                
                
            </div>
            
        </div>
        <script>
function alertF() {
  
  alert("Omadeto Purchese Sessecful !!!");
}
</script>
</body>
</html>