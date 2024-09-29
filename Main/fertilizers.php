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
    <title>Fertilizers</title>

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
        <img src='https://www.buybestbrands.in/images/kisan-store/crop-protection.gif'>
        <div>
            <h1>Why fertilizers are used? </h1>
            <p>Plants need nutrients to grow which they absorb from the soil via the plant’s root system. Fertilizers provide the major nutrients (nitrogen, phosphorus and potassium and important secondary elements) that plants need. Unless the nutrients are replenished, the soil’s productive capacity declines with every harvest.</p>
        </div>
    </div>
    <div class="main">
        <img src='https://www.fertilizerseurope.com/wp-content/uploads/2019/09/Types-of-fertilizer-5.png'>
        <div>
            <h1>Nitrogen fertilizers</h1>
            <p>
                Nitrate-based fertilizers are the most commonly used straight fertilizers in Europe.

                The main products are nitrate-based fertilizers such as ammonium nitrate (AN) and calcium ammonium nitrate (CAN), which are well suited to most European soils and climatic conditions, and urea and urea ammonium nitrate (UAN) aqueous solution, which are widely used in other parts of the world.

                Other straight nitrogen fertilizers include ammonium sulphate and ammonium sulphate nitrate, calcium nitrate, sodium nitrate, Chilean nitrate and anhydrous ammonia.</p>
        </div>
    </div>

    <div class="main">
        <img src='https://images.unsplash.com/photo-1492496913980-501348b61469?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybXxlbnwwfDF8MHx8fDA%3D'>
        <div>
            <h1>Plant Fertilizer: Organic and Inorganic Sources</h1>
            <p>There are two possible sources of plant fertilizer: organic and inorganic. Organic sources of fertilizer include compost, peat moss, manure, and other natural, organic materials.

                Inorganic fertilizer, also known as synthetic fertilizer, is produced using industrial processes. The most famous is the Haber-Bosch process, which produces nitrogen fertilizer. The process was designed by German scientists in the early 20th century and is still the main method of producing the widely-used nitrogen fertilizer that is used to grow agricultural crops all over the world.

                Another commonly used synthetic plant fertilizer is ammonium phosphate. This substance is made by combining ammonia with phosphoric and nitric acid. The end result is a fertilizer that is high in phosphorus while also containing some nitrogen. </p>
        </div>
    </div>







    <?php include 'footer.php'; ?>

    <script src="js/script.js"></script>

</body>

</html>