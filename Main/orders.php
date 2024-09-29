<?php

@include 'config.php';

session_start();

$user_id = $_SESSION['user_id'];

if (!isset($user_id)) {
   header('location:login.php');
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>orders</title>

   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

</head>

<body>

   <?php include 'header.php'; ?>

   <section class="placed-orders">

      <h1 class="title">placed orders</h1>

      <div class="box-container">

         <?php
         $select_orders = $conn->prepare("SELECT * FROM `orders` WHERE user_id = ?");
         $select_orders->execute([$user_id]);
         if ($select_orders->rowCount() > 0) {
            while ($fetch_orders = $select_orders->fetch(PDO::FETCH_ASSOC)) {
         ?>
               <div class="box" style="background-color: lime;">

                  <p style="color: black;" style="color: black;"> <b>placed on :</b> <span style="color: black;"><?= $fetch_orders['placed_on']; ?></span> </p>
                  <p style="color: black;"> <b>name :</b> <span style="color: black;"><?= $fetch_orders['name']; ?></span> </p>
                  <p style="color: black;"> <b>number : </b><span style="color: black;"><?= $fetch_orders['number']; ?></span> </p>
                  <p style="color: black;"> <b> email : </b><span style="color: black;"><?= $fetch_orders['email']; ?></span> </p>
                  <div class="details-box">
                  <p style="color: black;"> <b> address : </b> </p>
                     <div class="details">
                     <p style="color: black;"><span style="color: black;"><?= $fetch_orders['address']; ?></span> </p>
                     </div>
                  </div>

                  <p style="color: black;"> <b>payment method : </b><span style="color: black;"><?= $fetch_orders['method']; ?></span> </p>
                  <div class="details-box">
                  <p style="color: black;"> <b> your orders :  </b> </p>
                     <div class="details">
                     <p style="color: black;"><span style="color: black;"><?= $fetch_orders['total_products']; ?></span> </p>
                     </div>
                  </div>
                  <p style="color: black;"><b> total price : </b><span style="color: black;">Rs<?= $fetch_orders['total_price']; ?>/-</span> </p>
                  <p style="color: black;"> <b>payment status : </b><span style="color:<?php if ($fetch_orders['payment_status'] == 'pending') {
                                                                                    echo 'red';
                                                                                 } else {
                                                                                    echo 'blue';
                                                                                 }; ?>"><?= $fetch_orders['payment_status']; ?></span> </p>
               </div>
         <?php
            }
         } else {
            echo '<p class="empty">no orders placed yet!</p>';
         }
         ?>

      </div>

   </section>









   <?php include 'footer.php'; ?>

   <script src="js/script.js"></script>
   <script>
window.embeddedChatbotConfig = {
chatbotId: "2m9zwEk5WY1a3ePdCjr8j",
domain: "www.chatbase.co"
}
</script>
<script
src="https://www.chatbase.co/embed.min.js"
chatbotId="2m9zwEk5WY1a3ePdCjr8j"
domain="www.chatbase.co"
defer>
</script>
</body>

</html>