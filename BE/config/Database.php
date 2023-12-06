<?php

class Database
{
        public $servername;
        public $username;
        public $db_name;
        public $db_password;
        public $conn = null;
        public static $instance = null;
        public function __construct()
    {
        $this->servername = "localhost";
        $this->username = "root";
        $this->db_name = "databaseobs";
        $this->db_password = "";

        $this->conn = mysqli_connect($this->servername, $this->username, $this->db_password,$this->db_name);

    }

    public static function getInstance()
    {
        if (self::$instance == null) {
           self::$instance = new Database();
        }

        return self::$instance;
    }

    public function getConnection()
    {
        return $this->conn;
    }
}