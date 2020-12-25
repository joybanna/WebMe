<?php
    session_start();
	
	$name=$_SESSION['ProductName'];
	$servername = "localhost";
	$username = "joybanna";
	$password = "joybanna";
	$dbname = "mdt419";
	$tablename = "product";

	$conn = new mysqli($servername,$username,$password,$dbname);
		if($conn->connect_error)
		{
			die("Connection failed:".$conn->connect_error);
		}


    function writePic()
	{
		$target_dir = "img/";
		$target_file = $target_dir.basename($_FILES["fileToUpload"]["name"]);				
		$uploadPass = 1;
		$imgFileType=strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		if(isset($_POST["submit"]))
		{
			$check=getimagesize($_FILES["fileToUpload"]["tmp_name"]);
			if($check!==false)
			{								
				$uploadPass = 1;
			}else
			{				
				$uploadPass = 0;
			}
		}
		if(file_exists($target_file))
		{			
			$uploadPass = 0;
		}
		if($_FILES["fileToUpload"]["size"]>100000000)
		{			
			$uploadPass = 0;
		}
		if($uploadPass==0)
		{					}
		else 
		{
			if(move_uploaded_file($_FILES["fileToUpload"]["tmp_name"],$target_file))
			{									}
			else
			{							}
		}
		return $target_file;		     
    }

    function uploadPic()
	{
		//global $name;
		$target_dir = "../img/";
		$target_file = $target_dir.basename($_FILES["fileToUpload"]["name"]);				
		$uploadPass = 1;
		$imgFileType=strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		if(isset($_POST["submit"]))
		{
			$check=getimagesize($_FILES["fileToUpload"]["tmp_name"]);
			if($check!==false)
			{				
				//echo "File is an img-".$check["mime"].".";
				$uploadPass = 1;
			}else
			{
				//echo "File is not an img.";
				$uploadPass = 0;
			}
		}
		if(file_exists($target_file))
		{
			//echo "Sorry,file already exists.";
			$uploadPass = 0;
		}
		if($_FILES["fileToUpload"]["size"]>10000000)
		{
			//echo "Sorry,your file is too Lage.";
			$uploadPass = 0;
		}
		if($uploadPass==0)
		{
			//echo "Sorry,your file was not uploaded.";
		}
		else 
		{
			if(move_uploaded_file($_FILES["fileToUpload"]["tmp_name"],$target_file))
			{
				//echo "The file".basename($_FILES["fileToUpload"]["name"])."has been uploaded.";		
			}
			else
			{
				//echo "Sorry,threre was an error uploading your file.";
			}
		}
		return $target_file;
    } 
	  function writePic2()
	{
		$target_dir = "img/";
		$target_file = $target_dir.basename($_FILES["fileToUpload2"]["name"]);				
		$uploadPass = 1;
		$imgFileType=strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		if(isset($_POST["submit"]))
		{
			$check=getimagesize($_FILES["fileToUpload2"]["tmp_name"]);
			if($check!==false)
			{								
				$uploadPass = 1;
			}else
			{				
				$uploadPass = 0;
			}
		}
		if(file_exists($target_file))
		{			
			$uploadPass = 0;
		}
		if($_FILES["fileToUpload2"]["size"]>10000000)
		{			
			$uploadPass = 0;
		}
		if($uploadPass==0)
		{					}
		else 
		{
			if(move_uploaded_file($_FILES["fileToUpload2"]["tmp_name"],$target_file))
			{									}
			else
			{							}
		}
		return $target_file;		     
    }

    function uploadPic2()
	{
		
		$target_dir = "../img/";
		$target_file = $target_dir.basename($_FILES["fileToUpload2"]["name"]);				
		$uploadPass = 1;
		$imgFileType=strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		if(isset($_POST["submit"]))
		{
			$check=getimagesize($_FILES["fileToUpload2"]["tmp_name"]);
			if($check!==false)
			{
				
				
				$uploadPass = 1;
			}else
			{
				
				$uploadPass = 0;
			}
		}
		if(file_exists($target_file))
		{
			
			$uploadPass = 0;
		}
		if($_FILES["fileToUpload2"]["size"]>10000000)
		{
			
			$uploadPass = 0;
		}
		if($uploadPass==0)
		{
			
		}
		else 
		{
			if(move_uploaded_file($_FILES["fileToUpload2"]["tmp_name"],$target_file))
			{
					
			}
			else
			{
				
			}
		}
		return $target_file;
    } 

	function writePic3()
	{
		$target_dir = "img/";
		$target_file = $target_dir.basename($_FILES["fileToUpload3"]["name"]);				
		$uploadPass = 1;
		$imgFileType=strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		if(isset($_POST["submit"]))
		{
			$check=getimagesize($_FILES["fileToUpload3"]["tmp_name"]);
			if($check!==false)
			{
				
				
				$uploadPass = 1;
			}else
			{
				
				$uploadPass = 0;
			}
		}
		if(file_exists($target_file))
		{
			
			$uploadPass = 0;
		}
		if($_FILES["fileToUpload3"]["size"]>10000000)
		{
			
			$uploadPass = 0;
		}
		if($uploadPass==0)
		{
			
		}
		else 
		{
			if(move_uploaded_file($_FILES["fileToUpload3"]["tmp_name"],$target_file))
			{
						
			}
			else
			{
				
			}
		}
		return $target_file;		     
    }

    function uploadPic3()
	{
		
		$target_dir = "../img/";
		$target_file = $target_dir.basename($_FILES["fileToUpload3"]["name"]);				
		$uploadPass = 1;
		$imgFileType=strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		if(isset($_POST["submit"]))
		{
			$check=getimagesize($_FILES["fileToUpload3"]["tmp_name"]);
			if($check!==false)
			{
								
				$uploadPass = 1;
			}else
			{				
				$uploadPass = 0;
			}
		}
		if(file_exists($target_file))
		{			
			$uploadPass = 0;
		}
		if($_FILES["fileToUpload3"]["size"]>10000000)
		{			
			$uploadPass = 0;
		}
		if($uploadPass==0)
		{
			
		}
		else 
		{
			if(move_uploaded_file($_FILES["fileToUpload3"]["tmp_name"],$target_file))
			{
						
			}
			else
			{
				
			}
		}
		return $target_file;
    } 


	uploadPic();
	uploadPic2();
	uploadPic3();
	$pic = writePic();
	$pic2 = writePic2();
	$pic3 = writePic3();

	$sqlu ="UPDATE $tablename SET pic ='$pic' WHERE name ='$name'";
	$sqlu2 ="UPDATE $tablename SET pic2 ='$pic2' WHERE name ='$name'";
	$sqlu3 ="UPDATE $tablename SET pic3 ='$pic3' WHERE name ='$name'";
	
	
		if($conn->query($sqlu)===TRUE)
		{
			//echo"Record update Successfully";
		}
		if($conn->query($sqlu2)===TRUE)
		{
			
		}
		if($conn->query($sqlu3)===TRUE){
		
		}

	//$_SESSION['img']=$pic;
	$conn->close();	
	header('Location:http://localhost/Shopping/home.php');
?>