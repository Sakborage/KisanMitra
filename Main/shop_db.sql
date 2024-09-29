-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2024 at 01:47 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `pid` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `quantity` int(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `number` varchar(12) NOT NULL,
  `message` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `user_id`, `name`, `email`, `number`, `message`) VALUES
(5, 1, 'Swapnil Bhoite', 'sanketbhoite06@gmail.com', '9284809323', 'Please deliver my order as soon as possible\r\nThank You!'),
(6, 21, 'radhika Joshi', 'radhikajoshi30.a@gmail.com', '123455788', 'Thank you Recieved delivery');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `number` varchar(12) NOT NULL,
  `email` varchar(100) NOT NULL,
  `method` varchar(50) NOT NULL,
  `address` varchar(500) NOT NULL,
  `total_products` varchar(1000) CHARACTER SET utf8 NOT NULL,
  `total_price` int(100) NOT NULL,
  `placed_on` varchar(50) NOT NULL,
  `payment_status` varchar(20) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `name`, `number`, `email`, `method`, `address`, `total_products`, `total_price`, `placed_on`, `payment_status`) VALUES
(6, 17, 'sanket', '6', 'sanketbhoite06@gmail.com', 'cash on delivery', 'flat no. 09 m l  l l  l  , ,  - 989', ', tomato seed ( 1 ), Mahindra ( 1 )', 10300, '23-Mar-2024', 'pending'),
(7, 17, 'sanket', '9', 'sanketbhoite06@gmail.com', 'cash on delivery', 'flat no. 09 m l l l l India - 989', ', Mahindra ( 1 )', 10000, '23-Mar-2024', 'pending'),
(8, 17, 'Radhika Joshi', '6979034567', 'sanketbhoite06@gmail.com', 'cash on delivery', 'flat no. 11 rahuri road nagar maharashtra India - 989890', ', tomato seed ( 1 ), Mahindra ( 1 )', 10300, '23-Mar-2024', 'pending'),
(9, 17, 'sanket', '69696969', 'sanketbhoite06@gmail.com', 'cash on delivery', 'flat no. 09 m l l l l India - 989', ', Mahindra ( 1 ), Mahindra 265 DI ( 6 ), tomato seed ( 1 ), Pumpkin seeds ( 1 )', 130350, '23-Mar-2024', 'completed'),
(10, 17, 'Swapnil Bhoite', '9284809323', 'sanketbhoite06@gmail.com', 'credit card', 'flat no. 09 m l l l l India - 989', ', Mahindra ( 1 )', 10000, '23-Mar-2024', 'pending'),
(11, 1, 'Swapnil Bhoite', '9284809323', 'sanketbhoite06@gmail.com', 'cash on delivery', 'flat no. Dehu phata, Alandi (D) Near Aanand Multispeciality Hospital Alandi-Moshi road Pune Maharashtra India - 412105', ', Mahindra ( 2 ), Mahindra 265 DI ( 4 )', 100000, '23-Mar-2024', 'pending'),
(12, 21, 'Radhika Joshi', '1234567890', 'radha@gmail.com', 'cash on delivery', 'flat no. 11 saidham Alandi maharashtra India - 412105', ', tomato seed ( 2 ), Wheat Seed ( 2 ), Mung ( 1 ), Peanut ( 2 ), Mango seed ( 2 ), Tata Signa 5530.S Truck ( 2 )', 17350, '23-Mar-2024', 'completed'),
(13, 20, 'Pranay Bhoite', '9284809323', 'sanketbhoite06@gmail.com', 'cash on delivery', 'flat no. Dehu phata, Alandi (D) Near Aanand Multispeciality Hospital Alandi-Moshi road Pune Maharashtra India - 412105', ', Mahindra 475 DI ( 1 ), Wheat Seed ( 1 )', 700, '23-Mar-2024', 'pending'),
(14, 20, 'pranay Bhoite', '09284809323', 'sanketbhoite06@gmail.com', 'cash on delivery', 'flat no. Dehu phata, Alandi (D) Near Aanand Multispeciality Pune Maharashtra India - 412105', ', Mahindra 265 DI ( 1 )', 20000, '23-Mar-2024', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `category` varchar(20) NOT NULL,
  `details` varchar(500) NOT NULL,
  `price` int(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `details`, `price`, `image`) VALUES
(8, 'Mahindra', 'fish', 'Mahindra Tractors is an Indian agricultural machinery manufacturer. It is part of the Mahindra & Mahindra corporation.[4] In 2010, Mahindra became the world&#39;s highest-selling tractor brand by volume. Mahindra&#39;s largest consumer base is in India. It also has a growing market in North America and Australia. The company is the largest tractor manufacturer in India[5] and has the capacity to build 150,000 tractors a year.[6]\r\n\r\nM&M produced its first tractor in 1963, the Mahindra B-275, by f', 10000, 'swaraj tractor.png'),
(9, 'tomato seed', 'vegitables', 'The tomato (/təmeɪtoʊ/ or /təmɑːtoʊ/) is the edible berry of the plant Solanum lycopersicum,[1][2] commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America.[2][3] The Nahuatl word tomatl gave rise to the Spanish word tomate, from which the English word tomato derives.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.[2][5] The Aztecs used tomatoes in their cooking at the time of ', 300, 'tomato seeds.jpeg'),
(10, 'Wheat Seed', 'vegitables', 'Wheat is a grass widely cultivated for its seed, a cereal grain that is a worldwide staple food. The many species of wheat together make up the genus Triticum (/ˈtrɪtɪkəm/);[3] the most widely grown is common wheat (T. aestivum). The archaeological record suggests that wheat was first cultivated in the regions of the Fertile Crescent around 9600 BC. Botanically, the wheat kernel is a caryopsis, a type of fruit.', 100, 'wheatseed.jpg'),
(11, 'Jowar Seed', 'vegitables', 'Jowar is generally madhura and kashaya in rasa and easily digestible (laghu). It can pacify the Vata and Kapha dosha and has a cold potency (Sheeta Virya). The myriad of essential nutrients in jowar include iron, calcium, potassium and phosphorus.', 100, 'jowar.jpeg'),
(12, 'Mung', 'vegitables', 'Mung beans are a type of pulse, which means they are an edible seed of the legume plant family. Similarly to all pulses, mung beans are nutritionally balanced. They contain vitamins, minerals, and beneficial enzymes, which makes them an excellent part of a healthful diet.', 50, 'mung.jpeg'),
(13, 'Peanut', 'vegitables', 'peanut, (Arachis hypogaea), legume of the pea family (Fabaceae), grown for its edible seeds. Native to tropical South America, the peanut was at an early time introduced to the Old World tropics. The seeds are a nutritionally dense food, rich in protein and fat.', 50, 'peanut.jpeg'),
(14, 'Green cardamom', 'vegitables', 'Green cardamom is one of the most expensive spices by weight, but little is needed to impart flavour. It is best stored in the pod, as exposed or ground seeds quickly lose their flavour. Grinding the pods and seeds together lowers both the quality and the price.', 400, 'caradom.jpeg'),
(15, 'Mango seed', 'vegitables', 'Mango seed is a single flat oblong seed that can be fibrous or hairy on the surface, depending on the cultivar. Inside the seed coat 1 - 2 mm thick is a thin lining covering a single embryo, 4 - 7 cm long, 3 - 4 cm wide, and 1 cm thick. Mango seed consists of a tenacious coat enclosing the kernel.', 200, 'mango.jpeg'),
(16, 'Pumpkin seeds', 'vegitables', 'Pumpkin seeds are rich in protein, fiber, vitamins, minerals, and polyunsaturated fats. Polyunsaturated fats are the &#34;good&#34; fats that the American Heart Association recommends as a replacement for foods with saturated and trans fats.', 50, 'pumpkin.jpeg'),
(17, 'Mahindra 265 DI', 'fish', 'A popular choice for medium-sized farms, offering reliable performance, durability, and ease of operation.', 20000, 'mahindra1.jpeg'),
(18, 'Mahindra 575 DI', 'fish', 'Known for its robust build and efficient power delivery, ideal for various agricultural tasks such as plowing and harvesting.', 1000, 'Mahindra 575 DI.jpg'),
(19, 'Mahindra 475 DI', 'fish', ' Designed for versatility and productivity, this model is suitable for both farming and commercial applications with its strong performance.', 600, 'Mahindra 475 DI.jpeg'),
(20, 'Tata Signa 5530.S Truck', 'fish', 'TATA Signa 5530.S, enhanced with the Power of 6 â€&#34; enhanced performance, lower operational costs, added comfort and convenience, advanced connectivity, increased choice and total peace of mind. This 4x2 tractor trailer is designed to deliver on the needs of heavy duty applications across the transportation, construction and development industries, with its superior functionality and features.', 8000, 'tatatruck.jpeg'),
(21, 'Eicher Pro 2049', 'fish', 'The iconic Sub 5T mini truck is here to rule the Indian truck industry. Its best-in-class mileage and revolutionary driver comfort puts it miles ahead of competition & its next-gen technology will remain ahead of the curve for years to come. Its best-in-class space and modern features make Pro 2049 the right choice for last mile delivery of goods in city application, and you the Badshah of your business.', 6000, 'eicher.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `contact` int(20) NOT NULL,
  `user_type` varchar(20) NOT NULL DEFAULT 'user',
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `contact`, `user_type`, `image`) VALUES
(16, 'Sanket Bhoite', 'sanketbhoite@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 2147483647, 'admin', 'sanket adhar card.jpeg'),
(20, 'Sanket Madhav Bhoite', 'sanketbhoite06@gmail.com', '', 0, 'user', 'pic.PNG'),
(21, 'Radhika Avinash Joshi', 'radhikajoshi30.a@gmail.com', 'a73ec72702166f7f685e536a910d54d9', 2147483647, 'user', 'pic2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `pid` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
