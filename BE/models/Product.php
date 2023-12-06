<?php
require_once ("../config/Database.php");

$connection = Database::getInstance()->getConnection();

class Product {
    public $category_id;
    public $title;
    public $rating;
    public $thumbnail;
    public $color;
    public $rom;

    public $description;
    public $remain_amount;
    public $price;
    public $discount_id;
    public $bought_num;
    public $created_at;
    function __construct() {
        
    }
    public function read()
    {   
        global $connection;
        $myArray = [];
        $sql = "SELECT `category_id`,`title`,`rating`,`thumbnail`,`color`,`rom`,`description`,`remain_amount`,`price`,`discount_id`,`bought_num`,`created_at` FROM `product`";
        $retval = mysqli_query( $connection,$sql );
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
         return $myArray;
        //  echo json_encode($myArray);
    }
    public function read_single($id)
    {
        
        global $connection;
        $myArray = [];
        $sql = "SELECT `category_id`,`title`,`rating`,`thumbnail`,`color`,`rom`,`description`,`remain_amount`,`price`,`discount_id`,`bought_num`,`created_at` 
        FROM `product` WHERE `id`='$id'";
        $result = mysqli_query( $connection,$sql );
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
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
        return $myArray;
    }
    public function create()
    {
        global $connection;
        $this->category_id = htmlspecialchars(strip_tags($this->category_id));
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->rating = htmlspecialchars(strip_tags($this->rating));
        $this->thumbnail = htmlspecialchars(strip_tags($this->thumbnail));
        $this->color = htmlspecialchars(strip_tags($this->color));
        $this->rom = htmlspecialchars(strip_tags($this->rom));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->remain_amount = htmlspecialchars(strip_tags($this->remain_amount));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->discount_id = htmlspecialchars(strip_tags($this->discount_id));
        $this->bought_num = htmlspecialchars(strip_tags($this->bought_num));
        $this->created_at = htmlspecialchars(strip_tags($this->created_at));



        $query = "INSERT INTO product(`category_id`,`title`,`rating`,`thumbnail`,`color`,`rom`,`description`,`remain_amount`,`price`,`discount_id`,`bought_num`,`created_at`) 
        VALUES('$this->category_id','$this->title','$this->rating','$this->thumbnail','$this->color','$this->rom','$this->description','$this->remain_amount','$this->price','$this->discount_id','$this->bought_num','$this->created_at')  ";

        if ($connection->query($query)) {
            return true;
        }
        return false;
    }


    
}
