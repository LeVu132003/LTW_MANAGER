<?php
require_once ("D:\BTL_LTW\LTW_MANAGER\BE\config\Database.php");

$connection = Database::getInstance()->getConnection();

class User {
    public $id;
    public $username;
    public $password;
    public $phone_number;
    public $address;
    public $role;

    public $full_name;
    public $email;
    public $image;

    function __construct() {
        
    }
    public function read()
    {   
        global $connection;
        $myArray = [];
        $sql = "SELECT `id`,`username`,`password`,`phone_number`,`address`,`role`,`full_name`,`email`,`image` FROM `account`";
        $retval = mysqli_query( $connection,$sql );
        while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                // 'id' => "{$row['id']}",   
                'id' => "{$row['id']}", 
                'username' => "{$row['username']}",   
                'password' => "{$row['password']}",  
                'phone_number' => "{$row['phone_number']}",  
                'address' => "{$row['address']}",  
                'role' => "{$row['role']}",  
                'full_name' => "{$row['full_name']}",  
                'email' => "{$row['email']}",  
                'image' => "{$row['image']}",              
        ]);      
         }
         return $myArray;
    }
    public function updateInfo($id,$full_name,$email,$phone_number,$address)
    {
        global $connection;
        $sql = "UPDATE account SET `full_name`='$full_name', `email`='$email', `phone_number`='$phone_number', `address`='$address' WHERE `id`= $id";
        if ($connection->query($sql)) {
            return true;
        }
        return false;
    }
    public function updatePass($id,$password)
    {
        global $connection;
        $sql = "UPDATE account SET `password`='$password' WHERE `id`= $id";
        if ($connection->query($sql))
        {
            return true;
        }
        return false;
    }
    public function updateUsername($id,$username)
    {
        global $connection;
        $sql = "UPDATE account SET `username`='$username' WHERE `id`= $id";
        if ($connection->query($sql))
        {
            return true;
        }
        return false; 
    }
    public function getPassword($id)
    {
        global $connection;
        $myArray = [];
        $sql = "SELECT `id`, `password` FROM `account` WHERE `id`= $id";
        $retval = mysqli_query( $connection,$sql );
        while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                // 'id' => "{$row['id']}",   
                'id' => "{$row['id']}", 
                'password' => "{$row['password']}",            
        ]);      
         }
         return $myArray;
    }
    public function read_single($id)
    {
        
        global $connection;
        $myArray = [];
        $sql = "SELECT `id`,`username`,`password`,`phone_number`,`address`,`role`,`full_name`,`email`,`image`
        FROM `account` WHERE `id`='$id'";
        $result = mysqli_query( $connection,$sql );
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                // 'id' => "{$row['id']}",   
                'id' => "{$row['id']}", 
                'username' => "{$row['username']}",   
                'password' => "{$row['password']}",  
                'phone_number' => "{$row['phone_number']}",  
                'address' => "{$row['address']}",  
                'role' => "{$row['role']}",  
                'full_name' => "{$row['full_name']}",  
                'email' => "{$row['email']}",  
                'image' => "{$row['image']}",    
        ]);      
         }
        return $myArray;
    }
    public function create($input)
    {
        global $connection;
        

        $this->username = $input->username;
        $this->password = $input->password;
        $this->phone_number =$input->phone_number;
        $this->address = $input->address;
        $this->role = $input->role;
        $this->full_name = $input->full_name;
        $this->email = $input->email;
        $this->image = $input->image;

        // $this->username = htmlspecialchars(strip_tags($this->username));
        // $this->password = htmlspecialchars(strip_tags($this->password));
        // $this->phone_number = htmlspecialchars(strip_tags($this->phone_number));
        // $this->address = htmlspecialchars(strip_tags($this->address));
        // $this->role = htmlspecialchars(strip_tags($this->role));
        // $this->full_name = htmlspecialchars(strip_tags($this->full_name));
        // $this->email = htmlspecialchars(strip_tags($this->email));
        // $this->image = htmlspecialchars(strip_tags($this->image));

        $query = "INSERT INTO account(`username`,`password`,`phone_number`,`address`,`role`,`full_name`,`email`,`image`) 
        VALUES('$this->username','$this->password','$this->phone_number','$this->address','$this->role','$this->full_name','$this->email','$this->image')  ";

        if ($connection->query($query)) {
            return true;
        }
        return false;
    }


    
}
