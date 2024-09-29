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
    <title>Vegetables</title>

    <!-- font awesome cdn link  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

    <!-- custom css file link  -->
    <link rel="stylesheet" href="css/style.css">

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

        * {
            font-family: 'Poppins', sans-serif;
        }

        body {
            height: 100vh;

        }

        .main {
            display: grid;
            padding: 2rem;
            grid-template-columns: 300px 1fr;
            gap: 1rem;
            align-items: center;
            max-width: 900px;
            margin: 5% auto;
            font: 500 100%/1.5 system-ui;
            background: #fff;
        }

        h1 {
            font-size: 42px;
            font-weight: 700;
            line-height: 1.2;
            color: #000000;
        }

        p {
            font-size: 18px;
            line-height: 1.3;

        }

        img {
            max-width: 100%;
            height: 450px;
            box-shadow: 2px 2px 42px 2px #ddd;
        }

        @media (max-width: 600px) {
            .main {
                display: block;
            }

            p {
                position: relative;
                background-color: #ffffff85
            }

            img {
                max-width: 100%;
                background-position: center;
                object-fit: cover;
            }

            h1 {
                font-size: 35px;
                padding-top: 0px;
                padding-bottom: 0px;

            }
        }
    </style>

</head>

<body>

    <?php include 'header.php'; ?>


    <div class="main">
        <img src='https://static.wixstatic.com/media/234067_2ad00da6d2ca45009adffad2aed3d15d~mv2.gif'>
        <div class="text-justify">
            <h1>Vegetable Farming From its Beginnings</h1>
            <p class="text-justify">Vegetable farming is a type of crop production intended primarily for human consumption of the crop’s edible parts such as the shoot, leaves, fruits, and roots. According to the consume part of the crop, vegetables are divided into the following groups:
                <br><br>
                Leaf vegetables (lettuce, cabbage, spinach)<br>
                Fruit vegetables (pepper, cucumber, tomato)<br>
                Root vegetables (carrot, radish, sweet potato)<br>
                Bulb vegetables (garlic, onion, fennel)<br>
                Flower vegetables (artichoke, cauliflower, broccoli)
            </p>
        </div>
    </div>
    <div class="main">
        <img src='https://plus.unsplash.com/premium_photo-1663023617160-81ecba0f7b03?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        <div>
            <h1>Differences in the Sowing and Planting of Vegetables</h1>
            <p>Growing of vegetables starts with sowing or planting. Vegetable sowing means putting a seed directly into the prepared soil. On the other hand, vegetable planting includes the practice of putting already grown seedlings into the soil. Seedlings can be grown in the field or in greenhouses.
                <br>
                There are two types of seedlings:
                <br><br>
                Bare root seedlings are grown in the field from the seed. As the name implies, their roots are separated from the soil when they are moved to the planting site.
                Root ball seedlings are grown in pots or blocks and moved to the planting site with the soil attached to the roots.

            </p>
        </div>
    </div>









    <?php include 'footer.php'; ?>

    <script src="js/script.js"></script>

</body>

</html>