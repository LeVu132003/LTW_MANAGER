<?php
    require_once('../controllers/UserController.php');
    class Model 
    {
       
               

            public function getUserUpdate(){
                $email= isset($_POST["email"]) ? $_POST["email"]:'';
                $email_origin= isset($_POST["email_origin"]) ? $_POST["email_origin"]:'';
                $name= isset($_POST["name"]) ? $_POST["name"]:'';
                $image= isset($_POST["image"]) ? $_POST["image"]:'';
                $fullname= isset($_POST["fullname"]) ? $_POST["fullname"]:'';
                $address= isset($_POST["address"]) ? $_POST["address"]:'';
                $phone= isset($_POST["phone"]) ? $_POST["phone"]:'';
                $password= isset($_POST["password"]) ? $_POST["password"]:'';
                if($name != '' && $email!=''  && $email_origin!='')
                {
                    $usermodel=new UserController();
                    $usermodel->updateUser($email,$name,$password,$email_origin, $fullname,$address,$phone,$image);
                }           
                }

         public function getItem(){
                $email= isset($_POST["email"]) ? $_POST["email"]:'';
                $usermodel=new UserController();
                $usermodel->fetchItem($email);  
        }
        public function getClient(){
            $usermodel=new UserController();
            $usermodel->fetchClient();  
        }
        public function deleteUser(){
            $id= isset($_POST["id"]) ? $_POST["id"]:'';
            $usermodel=new UserController();
            $usermodel->deleteUsers($id);  
        }
        public function contact(){
            $name= isset($_POST["name"]) ? $_POST["name"]:'';
            $phone= isset($_POST["phone"]) ? $_POST["phone"]:'';
            $email= isset($_POST["email"]) ? $_POST["email"]:'';
            $type= isset($_POST["type"]) ? $_POST["type"]:'';
            $detail= isset($_POST["detail"]) ? $_POST["detail"]:'';
            $usermodel=new UserController();
            $usermodel->contactDB($name,$phone,$email,$type,$detail);  
        }

    }
?>