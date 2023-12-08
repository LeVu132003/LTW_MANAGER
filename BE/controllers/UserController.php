<?php
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin:* ");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    

    // include_once("../config/Database.php");
    // include_once("../models/User.php");

    require_once("D:\BTL_LTW\LTW_MANAGER\BE\config\Database.php");
    require_once("D:\BTL_LTW\LTW_MANAGER\BE\models\User.php");

    class UserController 
    {
        public function getListUser()
        {
            $user = new User();
            $result = $user->read();
            echo json_encode($result);
        }
        public function getUser()
        {
            $id= isset($_POST["id"]) ? $_POST["id"]:'';
            $user = new User();
            $result = $user->read_single($id);
            echo json_encode($result);
        }
        public function updateInfo()
        {
            $id= isset($_POST["id"]) ? $_POST["id"]:'';
            $full_name= isset($_POST["full_name"]) ? $_POST["full_name"]:'';
            $email= isset($_POST["email"]) ? $_POST["email"]:'';
            $phone_number= isset($_POST["phone_number"]) ? $_POST["phone_number"]:'';
            $address= isset($_POST["address"]) ? $_POST["address"]:'';
            $user = new User();
            $result = $user->updateInfo($id,$full_name,$email,$phone_number,$address);
            echo json_encode($result);
        }
        public function updatePass()
        {
            $id = isset($_POST["id"])?$_POST["id"]:'';
            $oldPass = md5(isset($_POST["oldPass"])?$_POST["oldPass"]:'');
            $newPass = md5(isset($_POST["newPass"])?$_POST["newPass"]:'');
            $user = new User();
            $result = $user->updatePass($id,$oldPass,$newPass);
            echo json_encode($result);
        }
        public function updateUsername()
        {
            $id = isset($_POST["id"])?$_POST["id"]:'';
            $username = isset($_POST["username"])?$_POST["username"]:'';
            $password = md5(isset($_POST["password"])?$_POST["password"]:'');
            $user = new User();
            $result = $user->updateUsername($id,$username,$password);
            echo json_encode($result);
        }
        public function getPassword()
        {
            $id = isset($_POST["id"])?$_POST["id"]:'';
            $user = new User();
            $result = $user->getPassword($id);
            echo json_encode($result);
        }
        public function createUser()
        {
            $user = new User();
            $input = json_decode(file_get_contents("php://input"),true);
        //     $user->username = $_POST['username'];
        // $user->password = $_POST['password'];
        // $user->phone_number = $_POST['phone_number'];
        // $user->address = $_POST['address'];
        // $user->role = $_POST['role'];
        // $user->full_name = $_POST['full_name'];
        // $user->email = $_POST['email'];
        // $user->image = $_POST['image'];

        if ( $user->create($input)) {
            echo json_encode(["success"=>"User Added Successfully"]);
        }
        else {
            echo json_encode(["success"=>"Please Check the User Data!"]);
        }


        }
    }


//     $user = new UserController();

//    $user->getListUser();
?>