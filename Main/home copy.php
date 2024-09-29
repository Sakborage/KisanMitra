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
      /* Paste your CSS code here */
      @import url("https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap");

      :root {
         --d: 700ms;
         --e: cubic-bezier(0.19, 1, 0.22, 1);
         --font-sans: "Rubik", sans-serif;
         --font-serif: "Cardo", serif;
      }

      * {
         box-sizing: border-box;
      }




      .dd_heading {
         text-align: center;
         font-family: roboto thin;
      }

      .page-content {
         display: grid;
         grid-gap: 1rem;
         padding: 1rem;
         max-width: 1024px;
         margin: 0 auto;
         font-family: var(--font-sans);
      }

      @media (min-width: 600px) {
         .page-content {
            grid-template-columns: repeat(2, 1fr);
         }
      }

      @media (min-width: 800px) {
         .page-content {
            grid-template-columns: repeat(4, 1fr);
         }
      }

      .d_card {
         position: relative;
         display: -webkit-box;
         display: flex;
         -webkit-box-align: end;
         align-items: flex-end;
         overflow: hidden;
         padding: 1rem;
         width: 100%;
         text-align: center;
         color: whitesmoke;
         background-color: whitesmoke;
         box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
            0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
            0 16px 16px rgba(0, 0, 0, 0.1);
         border-radius: 15px;
      }

      @media (min-width: 600px) {
         .d_card {
            height: 350px;
         }
      }

      .d_card:before {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 110%;
         background-size: cover;
         background-position: 0 0;
         -webkit-transition: -webkit-transform calc(var(--d) * 1.5) var(--e);
         transition: -webkit-transform calc(var(--d) * 1.5) var(--e);
         transition: transform calc(var(--d) * 1.5) var(--e);
         transition: transform calc(var(--d) * 1.5) var(--e),
            -webkit-transform calc(var(--d) * 1.5) var(--e);
         pointer-events: none;
      }

      .d_card:after {
         content: "";
         display: block;
         position: absolute;
         top: 0;
         left: -100;
         width: 100%;
         height: 200%;
         pointer-events: none;
         background-image: -webkit-gradient(linear,
               left top,
               left bottom,
               from(rgba(0, 0, 0, 0)),
               color-stop(11.7%, rgba(0, 0, 0, 0.009)),
               color-stop(22.1%, rgba(0, 0, 0, 0.034)),
               color-stop(31.2%, rgba(0, 0, 0, 0.072)),
               color-stop(39.4%, rgba(0, 0, 0, 0.123)),
               color-stop(46.6%, rgba(0, 0, 0, 0.182)),
               color-stop(53.1%, rgba(0, 0, 0, 0.249)),
               color-stop(58.9%, rgba(0, 0, 0, 0.32)),
               color-stop(64.3%, rgba(0, 0, 0, 0.394)),
               color-stop(69.3%, rgba(0, 0, 0, 0.468)),
               color-stop(74.1%, rgba(0, 0, 0, 0.54)),
               color-stop(78.8%, rgba(0, 0, 0, 0.607)),
               color-stop(83.6%, rgba(0, 0, 0, 0.668)),
               color-stop(88.7%, rgba(0, 0, 0, 0.721)),
               color-stop(94.1%, rgba(0, 0, 0, 0.762)),
               to(rgba(0, 0, 0, 0.79)));
         background-image: linear-gradient(to bottom,
               rgba(0, 0, 0, 0) 0%,
               rgba(0, 0, 0, 0.009) 11.7%,
               rgba(0, 0, 0, 0.034) 22.1%,
               rgba(0, 0, 0, 0.072) 31.2%,
               rgba(0, 0, 0, 0.123) 39.4%,
               rgba(0, 0, 0, 0.182) 46.6%,
               rgba(0, 0, 0, 0.249) 53.1%,
               rgba(0, 0, 0, 0.32) 58.9%,
               rgba(0, 0, 0, 0.394) 64.3%,
               rgba(0, 0, 0, 0.468) 69.3%,
               rgba(0, 0, 0, 0.54) 74.1%,
               rgba(0, 0, 0, 0.607) 78.8%,
               rgba(0, 0, 0, 0.668) 83.6%,
               rgba(0, 0, 0, 0.721) 88.7%,
               rgba(0, 0, 0, 0.762) 94.1%,
               rgba(0, 0, 0, 0.79) 100%);
         -webkit-transform: translateY(-50%);
         transform: translateY(-50%);
         -webkit-transition: -webkit-transform calc(var(--d) * 2) var(--e);
         transition: -webkit-transform calc(var(--d) * 2) var(--e);
         transition: transform calc(var(--d) * 2) var(--e);
         transition: transform calc(var(--d) * 2) var(--e),
            -webkit-transform calc(var(--d) * 2) var(--e);
      }

      .d_card:nth-child(1):before {
         background-image: url(https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
      }

      .d_card:nth-child(2):before {
         background-image: url(https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
      }

      .d_card:nth-child(3):before {
         background-image: url(https://images.unsplash.com/photo-1614173417106-242690007604?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
      }

      .d_card:nth-child(4):before {
         background-image: url(https://images.unsplash.com/photo-1546630392-db5b1f04874a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
      }

      .content1 {
         position: relative;
         display: -webkit-box;
         display: flex;
         -webkit-box-orient: vertical;
         -webkit-box-direction: normal;
         flex-direction: column;
         -webkit-box-align: center;
         align-items: center;
         width: 100%;
         padding: 1rem;
         -webkit-transition: -webkit-transform var(--d) var(--e);
         transition: -webkit-transform var(--d) var(--e);
         transition: transform var(--d) var(--e);
         transition: transform var(--d) var(--e), -webkit-transform var(--d) var(--e);
         z-index: 1;
      }

      .content1>*+* {
         margin-top: 1rem;
      }

      .heading {
         font-size: 1.3rem;
         font-weight: bold;
         line-height: 1.2;

      }

      .data-content {
         font-family: var(--font-serif);
         font-size: 1.125rem;
         font-style: italic;
         line-height: 1.35;
      }

      @media (hover: hover) and (min-width: 600px) {
         .d_card:after {
            -webkit-transform: translateY(0);
            transform: translateY(0);
         }

         .content1 {
            -webkit-transform: translateY(calc(100% - 4.5rem));
            transform: translateY(calc(100% - 4.5rem));
         }

         .content1>*:not(.heading) {
            opacity: 0;
            -webkit-transform: translateY(1rem);
            transform: translateY(1rem);
            -webkit-transition: opacity var(--d) var(--e),
               -webkit-transform var(--d) var(--e);
            transition: opacity var(--d) var(--e), -webkit-transform var(--d) var(--e);
            transition: transform var(--d) var(--e), opacity var(--d) var(--e);
            transition: transform var(--d) var(--e), opacity var(--d) var(--e),
               -webkit-transform var(--d) var(--e);
         }

         .d_card:hover,
         .d_card:focus-within {
            -webkit-box-align: center;
            align-items: center;
         }

         .d_card:hover:before,
         .d_card:focus-within:before {
            -webkit-transform: translateY(-4%);
            transform: translateY(-4%);
         }

         .d_card:hover:after,
         .d_card:focus-within:after {
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
         }

         .d_card:hover .content1,
         .d_card:focus-within .content1 {
            -webkit-transform: translateY(0);
            transform: translateY(0);
         }

         .d_card:hover .content1>*:not(.heading),
         .d_card:focus-within .content1>*:not(.heading) {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-transition-delay: calc(var(--d) / 8);
            transition-delay: calc(var(--d) / 8);
         }

         .d_card:focus-within:before,
         .d_card:focus-within:after,
         .d_card:focus-within .content1,
         .d_card:focus-within .content1>*:not(.heading) {
            -webkit-transition-duration: 0s;
            transition-duration: 0s;
         }
      }
   </style>

</head>

<body>

   <?php include 'header.php'; ?>

   <div class="home-bg">

      <section class="home">

         <div class="content">
            <span>Don't Panic, Go Organize</span>
            <h3>Grow & Go: Crop Purchases, Tractor Rentals</h3>

            <a href="about.php" class="btn" style="background-color: lime;">about us</a>
         </div>

      </section>

   </div>

   <section class="placed-orders">

      <h1 class="title">Articles</h1>

      <main class="page-content">
         <div class="d_card">
            <div class="content1">
               <a href="fertilizers.php">
                  <h2 class="heading" style="color: beige;">Fertilizers</h2>
               </a>

            </div>


         </div>
         <div class="d_card">
            <div class="content1">
               <a href="crops.php">
                  <h2 class="heading" style="color: beige;">Crops</h2>
               </a>

               <p class="data-content"></p>
            </div>

         </div>
         <div class="d_card">
            <div class="content1">
               <a href="vegies.php">
                  <h2 class="heading" style="color: beige;">Vegetables</h2>
               </a>

               <p class="data-content"></p>
            </div>
         </div>
         <div class="d_card">
            <div class="content1">
               <a href="fruits.php">
                  <h2 class="heading" style="color: beige;">Fruits</h2>
               </a>

               <p class="data-content"></p>
            </div>
            <p class="card-name">Fruits Card</p>
         </div>
      </main>

   </section>

   <section class="home-category">

      <h1 class="title">shop by category</h1>

      <div class="box-container">



         <div class="box">
            <img src="images/cat-3.png" alt="">
            <h3>Crops</h3>
            <p>Cultivating Your Desired Crop, Year-Round Harvests from Diverse Locations.</p>
            <a href="category.php?category=vegitables" class="btn" style="background-color: lime;">Crops</a>
         </div>

         <div>
         </div>
         <div class="box">
            <img src="images/tractor.jpg" alt="">
            <h3>Tractors</h3>
            <p>Renting Made Easy: Access Tractors On-Demand, Anytime, Anywhere Online!

            </p>
            <a href="category.php?category=fish" class="btn" style="background-color: lime;">Tractors</a>
         </div>

      </div>

   </section>

   <section class="products">

      <h1 class="title">latest products</h1>

      <div class="box-container">

         <?php
         $select_products = $conn->prepare("SELECT * FROM `products` LIMIT 6");
         $select_products->execute();
         if ($select_products->rowCount() > 0) {
            while ($fetch_products = $select_products->fetch(PDO::FETCH_ASSOC)) {
         ?>
               <form action="" class="box" method="POST">
                  <div class="price">$<span><?= $fetch_products['price']; ?></span>/-</div>
                  <a href="view_page.php?pid=<?= $fetch_products['id']; ?>" class="fas fa-eye"></a>
                  <img src="uploaded_img/<?= $fetch_products['image']; ?>" alt="">
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

   <script src="js/script.js"></script>

</body>

</html>