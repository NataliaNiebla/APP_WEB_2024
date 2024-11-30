<?php
session_start();  // Inicio de sesión
include 'conexion.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verificar que las claves de $_POST existan antes de usarlas
    if (isset($_POST['email']) && isset($_POST['password'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        $stmt = $conexion->prepare("SELECT id, usuario, email, password FROM usuarios WHERE email = ?");
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result && $result->num_rows > 0) {
            $usuario = $result->fetch_assoc();

            // Verificar contraseña  password_verify()
            if (password_verify($password, $usuario['password'])) {
                // variables de sesión
                $_SESSION['usuario'] = $usuario['usuario'];  
                $_SESSION['user_id'] = $usuario['id'];       
                $_SESSION['email'] = $usuario['email'];      

                // Redirigir a pag principal
                header("Location: index.php");  
                exit();
            } else {
                echo "Contraseña incorrecta.";
            }
        } else {
            echo "Usuario no encontrado.";
        }
        $stmt->close();
    } else {
        echo "Por favor, complete todos los campos.";
    }
}

$conexion->close();
?>
