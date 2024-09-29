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
    <title>Crops</title>

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
        <img src='https://scitechdaily.com/images/Alfalfa-Sprouts-Growth-Timelapse.gif'>
        <div class="text-justify">
            <h1>Types of Crops</h1>
            <p class="text-justify">The crops are of the following types depending upon the season in which they are grown:
                <br><br>
                <b>Kharif Crops</b><br>
                The crops which are grown in the monsoon season are known as Kharif crops. For eg., maize, millet, and cotton.

                The seeds are sown at the beginning of monsoon season and harvested at the end of the monsoon season.

                Such crops require a lot of water and hot weather for proper growth.
                <br><br>
                <b>Rabi Crops</b><br>
                The name “Rabi” means “spring” – a word derived from Arabic.

                The crops that are grown in the winter season and harvested in the spring are called Rabi crops.

                Wheat, gram, and mustard are some of the Rabi crops.

                Various agricultural practices are carried out to produce new crop varieties.

                Such crops require a warm climate for the germination and maturation of seeds. They, however, require a cold climate for their growth.
                <br><br>
                <b>Zaid Crops</b><br>
                Such crops are grown between the Kharif and Rabi seasons, i.e., between March and June.

                These crops mature early.

                Cucumber, pumpkin, bitter gourd, and watermelon are zaid crops.
            </p>
        </div>
    </div>
    <div class="main">
        <img src='https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        <div>
            <h1></h1>
            <p>
                Crop production has a wide range of effects on the environment and can impact the quality of soil, water, and air resources directly and indirectly. Management decisions that improve nutrient and water use efficiency generally help reduce resource losses and improve quality. Some impacts such as nutrient loading into watersheds or the atmosphere are extremely important but difficult to monitor at the farm level. Biodiversity and ecosystem services such as natural insect predators and pollinators or links to hunting, fishing, and outdoor activities are likewise difficult to quantify, and usually, assistance from multiple stakeholders is required for assessment.</p>
        </div>
    </div>









    <?php include 'footer.php'; ?>

    <script src="js/script.js"></script>

</body>

</html>