<?php

@include 'config.php';

session_start();

$user_id = $_SESSION['user_id'];

if (!isset($user_id)) {
   header('location:login.php');
};

if (isset($_POST['add_to_wishlist'])) {

   $pid = $_POST['pid'];
   $pid = filter_var($pid, FILTER_SANITIZE_STRING);
   $p_name = $_POST['p_name'];
   $p_name = filter_var($p_name, FILTER_SANITIZE_STRING);
   $p_price = $_POST['p_price'];
   $p_price = filter_var($p_price, FILTER_SANITIZE_STRING);
   $p_image = $_POST['p_image'];
   $p_image = filter_var($p_image, FILTER_SANITIZE_STRING);

   $check_wishlist_numbers = $conn->prepare("SELECT * FROM `wishlist` WHERE name = ? AND user_id = ?");
   $check_wishlist_numbers->execute([$p_name, $user_id]);

   $check_cart_numbers = $conn->prepare("SELECT * FROM `cart` WHERE name = ? AND user_id = ?");
   $check_cart_numbers->execute([$p_name, $user_id]);

   if ($check_wishlist_numbers->rowCount() > 0) {
      $message[] = 'already added to wishlist!';
   } elseif ($check_cart_numbers->rowCount() > 0) {
      $message[] = 'already added to cart!';
   } else {
      $insert_wishlist = $conn->prepare("INSERT INTO `wishlist`(user_id, pid, name, price, image) VALUES(?,?,?,?,?)");
      $insert_wishlist->execute([$user_id, $pid, $p_name, $p_price, $p_image]);
      $message[] = 'added to wishlist!';
   }
}

if (isset($_POST['add_to_cart'])) {

   $pid = $_POST['pid'];
   $pid = filter_var($pid, FILTER_SANITIZE_STRING);
   $p_name = $_POST['p_name'];
   $p_name = filter_var($p_name, FILTER_SANITIZE_STRING);
   $p_price = $_POST['p_price'];
   $p_price = filter_var($p_price, FILTER_SANITIZE_STRING);
   $p_image = $_POST['p_image'];
   $p_image = filter_var($p_image, FILTER_SANITIZE_STRING);
   $p_qty = $_POST['p_qty'];
   $p_qty = filter_var($p_qty, FILTER_SANITIZE_STRING);

   $check_cart_numbers = $conn->prepare("SELECT * FROM `cart` WHERE name = ? AND user_id = ?");
   $check_cart_numbers->execute([$p_name, $user_id]);

   if ($check_cart_numbers->rowCount() > 0) {
      $message[] = 'already added to cart!';
   } else {

      $check_wishlist_numbers = $conn->prepare("SELECT * FROM `wishlist` WHERE name = ? AND user_id = ?");
      $check_wishlist_numbers->execute([$p_name, $user_id]);

      if ($check_wishlist_numbers->rowCount() > 0) {
         $delete_wishlist = $conn->prepare("DELETE FROM `wishlist` WHERE name = ? AND user_id = ?");
         $delete_wishlist->execute([$p_name, $user_id]);
      }

      $insert_cart = $conn->prepare("INSERT INTO `cart`(user_id, pid, name, price, quantity, image) VALUES(?,?,?,?,?,?)");
      $insert_cart->execute([$user_id, $pid, $p_name, $p_price, $p_qty, $p_image]);
      $message[] = 'added to cart!';
   }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>home page</title>

   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

   <style>
      * {
         box-sizing: border-box;
      }

      body {
         font-family: Arial, Helvetica, sans-serif;
      }

      /* Float four columns side by side */
      .column {
         float: left;
         width: 25%;
         padding: 0 10px;
      }

      /* Remove extra left and right margins, due to padding */
      .row {
         margin: 0 -5px;
      }

      /* Clear floats after the columns */
      .row:after {
         content: "";
         display: table;
         clear: both;
      }

      /* Responsive columns */
      @media screen and (max-width: 600px) {
         .column {
            width: 100%;
            display: block;
            margin-bottom: 20px;
         }
      }

      /* Style the counter cards */
      .card {
         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
         padding: 16px;
         text-align: center;
         background-color: #f1f1f1;
      }

      .innerheading {
         margin-top: 5%;
         text-shadow: brown;
      }

      .card-image {
         width: 100%;
         height: auto;
         /* This will maintain the aspect ratio */
      }
   </style>

</head>

<body>

   <?php include 'header.php'; ?>

   <div class="home-bg">

      <section class="home">

         <div class="content">
            <h3>Grow & Go: Crop Purchases, Tractor Rentals</h3>
            
            <div id="temp" style="color:white; font-size:20px;"> </div>
            <div id="hum" style="color:white; font-size:20px;"> </div>

            <a href="about.php" class="btn" style="background-color: lime;">about us</a>
         </div>

      </section>

   </div>
   <section>
      <h1 class="title">Articles</h1>

      <div class="row" style="background-color: lime;">
         <div class="column">
            <div class="card">

               <img class="card-image" src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 4">
               <a href="fertilizers.php">
                  <h2 class="innerheading">Fertilizers</h2>
               </a>
            </div>

         </div>

         <div class="column">
            <div class="card">
               <img class="card-image" src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 4">
               <a href="crops.php">
                  <h2 class="innerheading">Crops</h2>
               </a>

            </div>
         </div>

         <div class="column">
            <div class="card">

               <img class="card-image" src="https://images.unsplash.com/photo-1614173417106-242690007604?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 4">
               <a href="vegies.php">
                  <h2 class="innerheading">Vegetables</h2>
               </a>

            </div>
         </div>

         <div class="column">
            <div class="card">
               <img class="card-image" src="https://images.unsplash.com/photo-1546630392-db5b1f04874a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 4">
               <a href="fruits.php">
                  <h2 class="innerheading">Fruits</h2>
               </a>

            </div>
         </div>
      </div>

   </section>
   <section class="home-category">

      <h1 class="title">shop by category</h1>

      <div class="box-container" style="background-color: lime;">



         <div class="box">
            <img src="images/cat-3.png" alt="">
            <h3>Crops</h3>
            <p>Cultivating Your Desired Crop, Year-Round Harvests from Diverse Locations.</p>
            <a href="category.php?category=vegitables" class="btn" style="background-color: lime;">Crops</a>
         </div>


         <div class="box">
            <img src="images/tractor.jpg" alt="">
            <h3>Tractors</h3>
            <p>Renting Made Easy: Access Tractors On-Demand, Anytime, Anywhere Online!

            </p>
            <a href="category.php?category=tractor" class="btn" style="background-color: lime;">Tractors</a>
         </div>

      </div>

   </section>



   <section class="products">

      <h1 class="title">Newly added</h1>

      <div class="box-container" style="background-color: lime;">

         <?php
         $select_products = $conn->prepare("SELECT * FROM `products` LIMIT 6");
         $select_products->execute();
         if ($select_products->rowCount() > 0) {
            while ($fetch_products = $select_products->fetch(PDO::FETCH_ASSOC)) {
         ?>
               <form action="" class="box" method="POST">
                  <div class="price">
                     <?php
                     if ($fetch_products['category'] == "fish" || $fetch_products['category'] == "tractor") {
                        echo "Rent Rs" . $fetch_products['price'] . "/- per day";
                     } else {
                        echo "Rs" . $fetch_products['price'] . "/- per kg.";
                     }
                     ?>
                  </div>
                  <a href="view_page.php?pid=<?= $fetch_products['id']; ?>" class="fas fa-eye"></a>
                  <div class="image-container">
                     <img src="uploaded_img/<?= $fetch_products['image']; ?>" alt="" class="product-image">
                  </div>
                  <div class="name"><?= $fetch_products['name']; ?></div>
                  <input type="hidden" name="pid" value="<?= $fetch_products['id']; ?>">
                  <input type="hidden" name="p_name" value="<?= $fetch_products['name']; ?>">
                  <input type="hidden" name="p_price" value="<?= $fetch_products['price']; ?>">
                  <input type="hidden" name="p_image" value="<?= $fetch_products['image']; ?>">
                  <input type="number" min="1" value="1" name="p_qty" class="qty">
                  <input type="submit" value="add to wishlist" class="option-btn" name="add_to_wishlist">
                  <input type="submit" value="add to cart" class="btn" style="background-color: lime;" name="add_to_cart">
               </form>
         <?php
            }
         } else {
            echo '<p class="empty">no products added yet!</p>';
         }
         ?>

      </div>

   </section>








   <?php include 'footer.php'; ?>
   <script>
      const apiKey = '570c4175934e25b80b67e2218c6d1ef1'; // Your API key goes here

// Get user's location using Geolocation API
navigator.geolocation.getCurrentPosition(position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Construct the API URL using the user's coordinates
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  // Fetch weather data
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity= data.main.humidity;
      const location= data.name
      const temp=`🫧🌤️☁ Weather: ${weatherDescription} , ${location}`;
      const temp2=`Temperature: ${temperature} Celsius Humidity: ${humidity}`;
      document.getElementById("temp").innerHTML=temp;
      document.getElementById("hum").innerHTML=temp2;

      // Display the weather information
      console.log(`Weather: ${weatherDescription}`);
      console.log(`Temperature: ${temperature} Celsius`);
      console.log(data.name);
    })
    .catch(error => {
      console.error('There was a problem fetching the weather data:', error);
    });
}, error => {
  console.error('Error getting user location:', error);
});
      </script>

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