<?php
@include 'config.php';

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $id = $_POST['id'];

    // Process the data as needed, e.g., store it in session variables or a database
    $_SESSION['google_email'] = $email;
    $_SESSION['google_id'] = $id;

    // Perform any other actions here
    $insert = $conn->prepare("INSERT INTO users(email) VALUES(?)");
    $insert->execute([$email]);
    header('location: home.php');
    // Send a response back to the client if needed
    echo 'Data received successfully.';
}
