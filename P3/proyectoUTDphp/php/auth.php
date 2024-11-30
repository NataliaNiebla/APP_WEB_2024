<?php
// session_start();

// si el usuario está autenticado
function verificarAutenticado() {
    if (!isset($_SESSION['user_id'])) {
        header('Location: index.php');  // Redirigir a la página de login si no está autenticado
        exit();
     }
 }

$isLoggedIn = isset($_SESSION['user_id']);

if ($isLoggedIn) {
    $user_name = $_SESSION['usuario']; 
    $user_email = $_SESSION['email'];  
} else {
    $user_name = '';  // No mostrar nada si no está autenticado
    $user_email = '';  
}

?>
