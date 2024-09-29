<?php
include 'config.php';
session_start();
if (isset($_POST['submit'])) {

   $email = $_POST['email'];
   $email = filter_var($email, FILTER_SANITIZE_STRING);
   $pass = md5($_POST['pass']);
   $pass = filter_var($pass, FILTER_SANITIZE_STRING);

   $sql = "SELECT * FROM users WHERE email = ? AND password = ?";
   $stmt = $conn->prepare($sql);
   $stmt->execute([$email, $pass]);
   $rowCount = $stmt->rowCount();

   $row = $stmt->fetch(PDO::FETCH_ASSOC);

   if ($rowCount > 0) {

      if ($row['user_type'] == 'admin') {

         $_SESSION['admin_id'] = $row['id'];
         header('location:admin_page.php');
      } elseif ($row['user_type'] == 'user') {

         $_SESSION['user_id'] = $row['id'];
         header('location:home.php');
      } else {
         $message[] = 'no user found!';
      }
   } else {
      $message[] = 'incorrect email or password!';
   }
}
// Check if the Google sign-in data is received
if (isset($_COOKIE['email'])) {


   echo '<script> alert("success"); </script> ';
   $insert = $conn->prepare("INSERT INTO users(email) VALUES(?)");
   $insert->execute([$_COOKIE['email']]);
   setcookie('email', '', time() - 3600, '/');
   header('location:home.php');
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>login</title>

   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/components.css">

</head>

<body>

   <div style="display: flex; justify-content: center; align-items: center; height: 300px; ">
      <img src="images/kisanlogo.JPG" style="max-width: 100%; max-height: 100%; margin-bottom:-28%; " alt="Kisan Logo">
   </div>

   <?php

   if (isset($message)) {
      foreach ($message as $message) {
         echo '
      <div class="message">
         <span>' . $message . '</span>
         <i class="fas fa-times" onclick="this.parentElement.remove();"></i>
      </div>
      ';
      }
   }

   ?>

   <section class="form-container">


      <form action="" method="POST" style="background-color: lime;">
         <h3>login now</h3>
         <input type="email" name="email" class="box" placeholder="enter your email" required>
         <input type="password" name="pass" class="box" placeholder="enter your password" required>
         <input type="submit" value="login now" class="btn" style="background-color: white; color: black" name="submit">
         <img src="images/google signin.png" name="gsign" style="max-width: 50%; max-height: 60%; object-fit: contain; margin-top:2.5%" alt="Google Sign In" onclick="signInWithGoogle()">
         <p>don't have an account? <a href="register.php" style="color: red;">register now</a></p>
      </form>

   </section>
   <script src="https://www.gstatic.com/firebasejs/4.4.0/firebase.js"></script>
   <script>
      const config = {
         apiKey: "AIzaSyDumHgu1fzLBMh5QcQCvHl6Qoy4WWUCat4",
         authDomain: "kisanmitra-36dec.firebaseapp.com",
         projectId: "kisanmitra-36dec",
         storageBucket: "kisanmitra-36dec.appspot.com",
         messagingSenderId: "234361719393",
         appId: "1:234361719393:web:5cf573e28ccbbcef89b820",
         measurementId: "G-4Q1MJ5EDQY"
      };
      firebase.initializeApp(config);

      function signInWithGoogle() {
         const provider = new firebase.auth.GoogleAuthProvider();
         firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = result.credential;
            const token = credential.accessToken;
            // The signed-in user info
            const user = result.user;
            console.log(user.email);
            createCookie("email", user.email, "10");
            location.reload();
            // ...
         }).catch(function(error) {
            console.error(error.message);
         });
      }


      function createCookie(name, value, days) {
         let expires;

         if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
         } else {
            expires = "";
         }

         document.cookie = escape(name) + "=" +
            escape(value) + expires + "; path=/";
      }
   </script>

</body>

</html>