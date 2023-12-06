<?php
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin:* ");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include_once("../config/Database.php");
    include_once("../models/Product.php");

    class ProductController 
    {
        public function getListItem()
        {
            $product = new Product();
            $result = $product->read();
            echo json_encode($result);
        }
        public function getItem()
        {
            $id = isset($_GET['id'])?$_GET['id']:die() ;
            $product = new Product();
            $result = $product->read_single($id);
            echo json_encode($result);
        }
        public function createItem()
        {
            $product = new Product();
            $input = json_decode(file_get_contents("php://input"),true);

            // $product->category_id=$input->category_id;
            // $product->title=$input->title;
            // $product->rating=$input->rating;
            // $product->thumbnail=$input->thumbnail;
            // $product->color=$input->color;
            // $product->rom=$input->rom;
            // $product->description=$input->description;
            // $product->remain_amount=$input->remain_amount;
            // $product->price=$input->price;
            // $product->discount_id=$input->discount_id;
            // $product->bought_num=$input->bought_num;
            // $product->created_at=$input->created_at;



        $data=json_decode(file_get_contents("php://input"));
        if ( $product->create($data)) {
            echo json_encode(["success"=>"User Added Successfully"]);
        }
        else {
            echo json_encode(["success"=>"Please Check the User Data!"]);
        }
    

            // if($product->create())
            // {
            //     echo json_encode('Successfully');
            // }
            // else{
            //     echo json_encode('Failed');
            // }

            // $result = $product->create($input);
            // echo $result;

        }
    }


    $product = new ProductController();

    // $product->createItem();
    $product->getListItem();
?>