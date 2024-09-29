<?php

include 'config.php';

if (isset($_POST['submit'])) {

   $name = $_POST['name'];
   $name = filter_var($name, FILTER_SANITIZE_STRING);
   $email = $_POST['email'];
   $email = filter_var($email, FILTER_SANITIZE_STRING);
   $pass = md5($_POST['pass']);
   $pass = filter_var($pass, FILTER_SANITIZE_STRING);
   $cpass = md5($_POST['cpass']);
   $cpass = filter_var($cpass, FILTER_SANITIZE_STRING);

   $contact = $_POST['contact'];
   $contact = filter_var($contact, FILTER_SANITIZE_STRING);

   $image = $_FILES['image']['name'];
   $image = filter_var($image, FILTER_SANITIZE_STRING);
   $image_size = $_FILES['image']['size'];
   $image_tmp_name = $_FILES['image']['tmp_name'];
   $image_folder = 'uploaded_img/' . $image;

   // Validation for contact number
   if (strlen($contact) !== 10) {
      $message[] = 'Contact number should be exactly 10 digits.';
   }

   $select = $conn->prepare("SELECT * FROM `users` WHERE email = ?");
   $select->execute([$email]);

   if ($select->rowCount() > 0) {
      $message[] = 'User email already exists!';
   } else {
      if ($pass != $cpass) {
         $message[] = 'Confirm password not matched!';
      } else {
         // Generate and send OTP here (you need to implement this)
         $insert = $conn->prepare("INSERT INTO `users`(name, email, password, image, contact) VALUES(?,?,?,?,?)");
         $insert->execute([$name, $email, $pass, $image, $contact]);

         if ($insert) {
            if ($image_size > 2000000) {
               $message[] = 'Image size is too large!';
            } else {
               move_uploaded_file($image_tmp_name, $image_folder);
               $message[] = 'Registered successfully!';
               header('location:login.php');
            }
         }
         
      }
   }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Register</title>

   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/components.css">

</head>

<body>


   <div style="display: flex; justify-content: center; align-items: center; height: 300px; ">
      <img src="images/kisanlogo.JPG" style="max-width: 100%; max-height: 100%; margin-bottom:-4%; " alt="Kisan Logo">
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

      <form action="" enctype="multipart/form-data" method="POST" style="background-color: lime;">
         <h3>Register Now</h3>
         <input type="text" name="name" class="box" placeholder="Enter your name" required>
         <input type="email" name="email" class="box" placeholder="Enter your email" required>
         <input type="password" name="pass" class="box" placeholder="Enter your password" required>
         <input type="password" name="cpass" class="box" placeholder="Confirm your password" required>
         <input type="text" id="phoneNumber" name="contact" class="box" placeholder="Enter your contact number" required>
         <button type="button" class="btn" onclick="sendOTP()">Send OTP</button>
         <input type="text" name="otp" id="otp" class="box" placeholder="Enter OTP" style="display: none;">
         <button type="button" id="myButton" class="btn" onclick="verifyCode()" style="display: none;">Verify OTP</button>
         <input type="file" name="image" class="box" required accept="image/jpg, image/jpeg, image/png">
         <input type="submit" id="reg" value="Register Now" class="btn" name="submit" style="background-color: white; color: black;"  disabled>
         <p style="color: white">Already have an account? <a href="login.php" style="color: red;">Login Now</a></p>
         <div id="recaptcha-container"></div>
      </form>

   </section>
   <script src="https://www.gstatic.com/firebasejs/4.4.0/firebase.js"></script>
  <script>

  const config = {  
    apiKey: "AIzaSyAq51kE7d3xd6DOJsxvEPWEXVpgtTgAHrU",
    authDomain: "agro-4d833.firebaseapp.com",
    projectId: "agro-4d833",
    storageBucket: "agro-4d833.appspot.com",
    messagingSenderId: "402236257962",
    appId: "1:402236257962:web:e51751612ec60ea76c02d3",
    measurementId: "G-LS3R91EVC2"
  };

  firebase.initializeApp(config);
  let verificationId;

    function sendVerificationCode() {
      const phoneNumber = document.getElementById('phoneNumber').value;
       const appVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  .then((confirmationResult) => {
    alert("OTP send to your mobile number")
    verificationId=confirmationResult;
    document.getElementById("myButton").style.display = "block";
  })
  .catch((error) => {
    // Error; SMS not sent
    console.error(error);
  });
}
    function verifyCode() {
      const code = document.getElementById('otp').value;
      verificationId.confirm(code).then((result) => {
  // User signed in successfully
  const user = result.user;
  document.getElementById('reg').disabled = false;
  alert("verified successfully")
  document.getElementById("myButton").style.display = "none";
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  console.error(error);
});
     
    }
      function sendOTP() {
         sendVerificationCode()
         document.getElementById("otp").style.display = "block";

      }
   </script>

</body>

</html>