<?php
   require_once('../model/DbModel.php');
    class UserController extends DbModel {
    
    public function updateUser($username,$password,$phone_number,$address,$full_name,$email,$image){
        $con = $this->connect();     
        $query = "UPDATE  account SET `image`='$image', `full_name`='$full_name' , `address`='$address' ,`password`='$password',`phone_number`='$phone_number' , `username`='$username' ,  `email`='$email' WHERE  `email`='$email'";
        $result = mysqli_query($con, $query);
        if($result)
            echo ('UpdateSuccess');
    }
    
    public function addUser($id,$username,$password,$phone_number, $address,$role,$full_name,$email,$image){
        $con = $this->connect();     
        $query = "INSERT INTO `account` (`id`, `username`, `password`,`phone_number`,`address`,`role`, `full_name`,`email`,`image`) VALUES 
        ('$id','$username','$password','$phone_number', '$address','$role','$full_name','$email','$image')";
        $result = mysqli_query($con, $query);

       
        if($result)
            echo ('UpdateSuccess');
    }
    
    public function deleteUsers($id){
        $con = $this->connect();
        // $id = $_POST["id"];
        $sql = "DELETE FROM `account` WHERE `id`='$id'";
        $retval = mysqli_query( $con,$sql );
    }   
    public function fetchClient(){
        $myArray = [];
        $con = $this->connect();
        $sql = 'SELECT `id`, `username`, `password`,`phone_number`,`address`,`role`, `full_name`,`email`,`image` FROM `account`';
      
        $retval = mysqli_query( $con,$sql );
        if(! $retval ) {
            die('Could not get data: ' );
         }
         
         while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'id' => "{$row['id']}",
                'username' =>  "{$row['username']}",
                'password' =>  "{$row['password']}",
                'phone_number' =>  "{$row['phone_number']}",
                'address' =>  "{$row['address']}",
                'role' =>  "{$row['role']}",
                'full_name' =>  "{$row['full_name']}",
                'email' =>  "{$row['email']}",
                'image' =>  "{$row['image']}"
        ]);
         }
         echo json_encode($myArray);
    }
  




    public function uploadAvt($image){
        $con=$this->connect();
        $image = $_POST["image"];
        $email = $_POST["email"];
        $sql = "UPDATE `account` SET `image` = '$image' WHERE `email`='$email'";
      
        $retval = mysqli_query( $con,$sql );
       echo('updateAvtSuccess');
    }
    public function setPayment($item , $email , $total,$image,$time,$name,$amount){
        $con=$this->connect();
        $sql = "UPDATE `account` SET `item` = '$item' , `total` = '$total' WHERE `email`='$email'";
        $sql2 = "INSERT INTO `transaction` ( `email`, `item`,`time`,`username`,`image`,`amount`) VALUES  ('$email','$item','$time','$name','$image','$amount')";
        $retval = mysqli_query( $con,$sql );
        $retval2 = mysqli_query( $con,$sql2 );
        
    }
    public function fetchItem(){
        $con=$this->connect();
        $myArray = [];
        $email = $_POST["email"];
        $sql = "SELECT  `item`,`total` FROM `account` WHERE `email`='$email'";
        $retval = mysqli_query( $con,$sql );
        while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'item' => "{$row['item']}",   
                'total' => "{$row['total']}",   
        ]);      
         }
         echo json_encode($myArray);
    }




    public function fetchProduct(){
        $con=$this->connect();
        $myArray = [];
        $sql = "SELECT `category_id`,`title`,`rating`,`thumbnail`,`color`,`rom`,`description`,`remain_amount`,`price`,`discount_id`,`bought_num`,`created_at` FROM `product`";
        $retval = mysqli_query( $con,$sql );
        while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                // 'id' => "{$row['id']}",   
                'category_id' => "{$row['category_id']}", 
                'title' => "{$row['title']}",   
                'rating' => "{$row['rating']}",  
                'thumbnail' => "{$row['thumbnail']}",  
                'color' => "{$row['color']}",  
                'rom' => "{$row['rom']}",  
                'description' => "{$row['description']}",  
                'remain_amount' => "{$row['remain_amount']}",  
                'price' => "{$row['price']}",  
                'discount_id' => "{$row['discount_id']}",  
                'bought_num' => "{$row['bought_num']}",  
                'created_at' => "{$row['created_at']}",  
        ]);      
         }
         echo json_encode($myArray);
    }
     public function updateProduct($username,$password,$phone_number,$address,$full_name,$email,$image){
        $con = $this->connect();     
        $query = "UPDATE  account SET `image`='$image', `full_name`='$full_name' , `address`='$address' ,`password`='$password',`phone_number`='$phone_number' , `username`='$username' ,  `email`='$email' WHERE  `email`='$email'";
        $result = mysqli_query($con, $query);
        if($result)
            echo ('UpdateSuccess');
    }
    
    public function addProduct($id,$username,$password,$phone_number, $address,$role,$full_name,$email,$image){
        $con = $this->connect();     
        $query = "INSERT INTO `account` (`id`, `username`, `password`,`phone_number`,`address`,`role`, `full_name`,`email`,`image`) VALUES 
        ('$id','$username','$password','$phone_number', '$address','$role','$full_name','$email','$image')";
        $result = mysqli_query($con, $query);

       
        if($result)
            echo ('UpdateSuccess');
    }
    
    public function deleteProduct($id){
        $con = $this->connect();
        // $id = $_POST["id"];
        $sql = "DELETE FROM `account` WHERE `id`='$id'";
        $retval = mysqli_query( $con,$sql );
    }   


    public function contactDB($name,$phone,$email,$type,$detail){
        $con = $this->connect();
        $query = "INSERT INTO `contact` (`name`, `phone`, `email`,`type`,`detail`) 
                     VALUES ('$name', '$phone', '$email','$type','$detail')";
            $result = mysqli_query($con, $query);
            echo 'success';
    }  

 }

?>
<?php
     $usermodel=new UserController();

    echo "</br>";
   

    // $usermodel->deleteUsers(5);    
    $usermodel->fetchClient();
    $usermodel->updateUser('admin03', '25f9e794323b453885f5181f1b624d0b', 0000000, NULL, 'admin', 'admin02@gmail.com','admin03@gmail.com');
    $usermodel->fetchClient();
    // $usermodel->fetchProduct();
?>

