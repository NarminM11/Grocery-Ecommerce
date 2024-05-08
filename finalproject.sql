SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



--
-- Database: `finalproject`
--

-- --------------------------------------------------------


CREATE TABLE `products` (
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `image_url` text,
  `description` text,
  `price` decimal(10,0) DEFAULT NULL,
  `seller_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `category`, `image_url`, `description`, `price`, `seller_name`) VALUES
(21, 'Pepper', 'vegetables', 'https://hips.hearstapps.com/hmg-prod/images/close-up-of-green-red-and-orange-bell-peppers-royalty-free-image-622418542-1558536290.jpg?crop=0.667xw:1.00xh;0.333xw,0&resize=980:*', 'Vegetable', '1', 'vendor'),
(22, 'Apple', 'fruits', 'https://balconygardenweb.b-cdn.net/wp-content/uploads/2023/05/Gravenstein-Apple-copy.jpg', 'Fruit', '4', 'vendor'),
(23, 'Carrot', 'vegetables', 'https://img.taste.com.au/ijyhNEs4/w720-h480-cfill-q80/taste/2007/03/carrots-181856-2.jpg', 'Vegetable', '4', 'vendor'),
(24, 'Orange', 'fruits', 'https://cdn.mos.cms.futurecdn.net/UaBq5LGpJQd3DDo6ve2dFW-1200-80.jpg.webp', 'Fruit', '8', 'vendor'),
(25, 'Cherry', 'fruits', 'https://images.immediate.co.uk/production/volatile/sites/10/2021/10/2048x1365-SEO-Morello-cherry-GettyImages-1330319873-e389763.jpg?quality=90&webp=true&resize=1880,1254', 'Fruit', '5', 'vendor'),
(26, 'Strawberry', 'fruits', 'https://www.thespruce.com/thmb/IeOkQSpwg5IyFk_P6baJhqpGxFc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/everbearing-strawberries-guide-7090673-01-dea79ec691fa4a1e9c92aef37b1b5d57.jpg', 'Fruit', '20', 'vendor'),
(27, 'Watermelon', 'fruits', 'https://www.veseys.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/1/5/15890a-15890a-image-1589_ruby_ripe.jpg', 'Fruit', '16', 'vendor'),
(28, 'Pineapple', 'fruits', 'https://media.self.com/photos/5b4371cc4d0c3c282a8878d3/4:3/w_2240,c_limit/pineapple.jpg', 'Fruit', '10', 'vendor'),
(29, 'Mango', 'fruits', 'https://www.reyesgutierrez.com/wp-content/uploads/2020/07/Mango-Noticias-800x620.jpg', 'Fruit', '16', 'vendor'),
(30, 'Peach', 'fruits', 'https://images.immediate.co.uk/production/volatile/sites/10/2023/11/2048x1365-Peach-SEO-GOTY-Competition-2017-Wildlife-Helen-Rushton-PDB197170856-2552de3.jpg?quality=90&webp=true&resize=1880,1254', 'Fruit', '13', 'vendor'),
(31, 'Eggplant', 'vegetables', 'https://www.bradleysmoker.com/cdn/shop/articles/Smoked-Marinated-Eggplant-Recipe-scaled.jpg?v=1675739133&width=1500', 'Vegetable', '5', 'vendor'),
(32, 'Blueberry', 'fruits', 'https://www.verywellhealth.com/thmb/lbVc2vOO6MZ4Nys01f0aidFHOgs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1447146958-a7a7d488331045eebf08dd6b8fe80460.jpg', 'Fruit', '42', 'vendor'),
(33, 'Tomato', 'vegetables', 'https://cdn.shopify.com/s/files/1/0085/2344/8371/files/beautiful-red-ripe-tomatoes-grown-greenhouse_480x480.jpg?v=1691653442', 'Vegetable', '3', 'vendor'),
(34, 'Potato', 'vegetables', 'https://www.hsph.harvard.edu/nutritionsource/wp-content/uploads/sites/30/2014/01/potatoes-411975_1280.jpg', 'Vegetable', '2', 'vendor'),
(35, 'Cucumber', 'vegetables', 'https://bonnieplants.com/cdn/shop/articles/BONNIE_cucumbers_iStock-900811876_1800px_b9d244a1-2373-4a4c-9626-0fa56af6cb44.jpg?v=1642541967&width=1000', 'Vegetable', '4', 'vendor'),
(36, 'Onion', 'vegetables', 'https://hub.suttons.co.uk/wp-content/uploads/2021/03/dried-onions-table.jpg', 'Vegetable', '3', 'vendor');


--------------------------------------------------------------

ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `product_id` (`product_id`);


ALTER TABLE `products`
  MODIFY `product_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;
