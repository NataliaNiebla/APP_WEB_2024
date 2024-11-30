<?php
include("php/login.php");
include("php/auth.php");

//session_start();  // Inicio de sesión
$isLoggedIn = isset($_SESSION['user_id']);  // Verificación de login
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?> | Proyecto PHP</title>
    <link rel="stylesheet" href="css/estilos.css" type="text/css">
</head>
<body>
    <header>
        <div id="logotipo">
            <img src="uploads/image/logophp.png" alt="Imagen PHP" title="PHP">
            <h1>Proyecto Web PHP</h1>
        </div>
    </header>

    <nav>
        <ul>
            <li><a href="index.php">Inicio</a></li>

            <?php if ($isLoggedIn): ?>
                <!-- enlaces si hay LOGIN -->
                <li><a href="acercade.php">Acerca de</a></li>
                <li><a href="mision.php">Misión</a></li>
                <li><a href="vision.php">Visión</a></li>
                <li><a href="articulos.php">Artículos</a></li>
                <li><a href="categorias.php">Categorías</a></li>
                <li><a href="php/logout.php">Cerrar sesión</a></li>
            <?php else: ?>
                <!-- enlaces si NO hay login -->
                <li><a href="registro.php">Registro</a></li>
                <li><a href="inicio_sesion.php">Inicio de sesión</a></li>
            <?php endif; ?>
        </ul>
    </nav>
