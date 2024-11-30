<?php
$conexion = new mysqli('localhost', 'root', '', 'proyectoutd');

if ($conexion->connect_error) {
    die("ERROR AL GENERAR CONEXIÓN CON LA BASE DE DATOS " . $conexion->connect_error);
}
?>
