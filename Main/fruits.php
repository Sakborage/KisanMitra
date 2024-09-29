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
    <title>Fruits</title>

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
        <img src='https://i.pinimg.com/originals/d7/7d/2c/d77d2cdfae64a04ad501dfea5672dfb6.gif'>
        <div class="text-justify">

            <p class="text-justify">
                Fruit production
                Fruit crops are a major part of agricultural production. Based on production quantities, the most popular fresh fruits worldwide in order are bananas, apples and grapes. Bananas and apples are grown on trees, and watermelons are grown on thick vines.
                For cultivation, the tropical banana plant requires a warm and humid climate and rich, dark and fertile soils. The most common banana types which are grown globally include Cavendish, Lady Fingers, and Plantains. The last variety is also known as cooking banana. Their characteristics include a drier texture and they tend to contain more starch. In many tropical countries Plantains are a staple food.
                According to the Food and Agricultural Organization (FAO), countries with a significant production amount include China, the United States and Turkey. Rated among the most popular apple varieties in the United States are Gala, Honeycrisp and Fuji.
                Fruit and vegetables are seen as a strong part of a healthy and balanced diet. The Dietary Guidelines for Americans, which are created and published every five years by the United States Department of Agriculture (USDA) and the U.S. Department of Health and Human Services (HHS), recommend increasing fruit and vegetable intake.</p>

        </div>
    </div>










    <?php include 'footer.php'; ?>

    <script src="js/script.js"></script>

</body>

</html>