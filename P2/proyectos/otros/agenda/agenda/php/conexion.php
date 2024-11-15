<?php
  //1.- Conectarme a la BD 
  $server="127.0.0.1";
  $user="root";
  $password="";
  $database="agenda";
  //Conexion Procedural
  $connection=mysqli_connect($servidor,$user,$password,$database);
 
  if ($connection) {
      echo "Successfully connected to the database";
  } else {
  if ($connection) {
      echo "Successfully connected to the database";
  } else {
      die("Failed to connect to the database: " . mysqli_connect_error());
  }
?>