-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Reviews'
--
-- ---

DROP TABLE IF EXISTS `Reviews`;

CREATE TABLE `Reviews` (
  `product_id` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `results_id_Results` MEDIUMINT NOT NULL,
  PRIMARY KEY (`product_id`)
);

-- ---
-- Table 'Results'
--
-- ---

DROP TABLE IF EXISTS `Results`;

CREATE TABLE `Results` (
  `results_id` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `review_id` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `product_id_Reviews` MEDIUMINT NOT NULL,
  `date` DATETIME NOT NULL,
  `rating` TINYINT NOT NULL,
  `summary` VARCHAR(60) NOT NULL,
  `body` MEDIUMTEXT(1000) NOT NULL,
  `recommend` TINYINT NOT NULL,
  `helpfulness` SMALLINT NOT NULL,
  `photos_id_Photos` MEDIUMINT NULL DEFAULT NULL,
  `response` MEDIUMTEXT NULL DEFAULT NULL,
  `reviewer_name` CHAR(30) NOT NULL,
  `reviewer_email` CHAR(50) NOT NULL,
  PRIMARY KEY (`results_id`),
  CONSTRAINT review_id_unique UNIQUE (review_id)
);

-- ---
-- Table 'Photos'
--
-- ---

DROP TABLE IF EXISTS `Photos`;

CREATE TABLE `Photos` (
  `photos_id` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `review_id_Results` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `url` CHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`photos_id`)
);

-- ---
-- Table 'Metadata'
--
-- ---

DROP TABLE IF EXISTS `Metadata`;

CREATE TABLE `Metadata` (
  `product_id_Reviews` MEDIUMINT NOT NULL DEFAULT NULL,
  `characteristics_id_Characteristics` MEDIUMINT NOT NULL,
  `recommended_id_Recommended` MEDIUMINT NULL,
  `ratings_id_Ratings` MEDIUMINT NOT NULL,
  PRIMARY KEY (`product_id_Reviews`)
);

-- ---
-- Table 'Ratings'
--
-- ---

DROP TABLE IF EXISTS `Ratings`;

CREATE TABLE `Ratings` (
  `ratings_id` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `1` MEDIUMINT NOT NULL DEFAULT 0,
  `2` MEDIUMINT NOT NULL DEFAULT 0,
  `3` MEDIUMINT NOT NULL DEFAULT 0,
  `4` MEDIUMINT NOT NULL DEFAULT 0,
  `5` MEDIUMINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`ratings_id`)
);

-- ---
-- Table 'Recommended'
--
-- ---

DROP TABLE IF EXISTS `Recommended`;

CREATE TABLE `Recommended` (
  `recommended_id` MEDIUMINT NULL AUTO_INCREMENT,
  `false` MEDIUMINT NOT NULL DEFAULT 0,
  `true` MEDIUMINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`recommended_id`)
);

-- ---
-- Table 'Characteristics'
--
-- ---

DROP TABLE IF EXISTS `Characteristics`;

CREATE TABLE `Characteristics` (
  `characteristics_id` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `size_id` MEDIUMINT NULL AUTO_INCREMENT DEFAULT NULL,
  `size_value` DECIMAL NULL DEFAULT NULL,
  `width_id` MEDIUMINT NULL DEFAULT NULL,
  `width_value` DECIMAL NULL DEFAULT NULL,
  `comfort_id` MEDIUMINT NULL DEFAULT NULL,
  `comfort_value` DECIMAL NOT NULL DEFAULT 0,
  PRIMARY KEY (`characteristics_id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Reviews` ADD FOREIGN KEY (results_id_Results) REFERENCES `Results` (`results_id`);
ALTER TABLE `Results` ADD FOREIGN KEY (product_id_Reviews) REFERENCES `Reviews` (`product_id`);
ALTER TABLE `Results` ADD FOREIGN KEY (photos_id_Photos) REFERENCES `Photos` (`photos_id`);
ALTER TABLE `Metadata` ADD FOREIGN KEY (product_id_Reviews) REFERENCES `Reviews` (`product_id`);
ALTER TABLE `Metadata` ADD FOREIGN KEY (characteristics_id_Characteristics) REFERENCES `Characteristics` (`characteristics_id`);
ALTER TABLE `Metadata` ADD FOREIGN KEY (recommended_id_Recommended) REFERENCES `Recommended` (`recommended_id`);
ALTER TABLE `Metadata` ADD FOREIGN KEY (ratings_id_Ratings) REFERENCES `Ratings` (`ratings_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Reviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Results` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Metadata` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Ratings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Recommended` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Characteristics` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Reviews` (`product_id`,`results_id_Results`) VALUES
-- ('','');
-- INSERT INTO `Results` (`results_id`,`review_id`,`product_id_Reviews`,`date`,`rating`,`summary`,`body`,`recommend`,`helpfulness`,`photos_id_Photos`,`response`,`reviewer_name`,`reviewer_email`) VALUES
-- ('','','','','','','','','','','','','');
-- INSERT INTO `Photos` (`photos_id`,`review_id_Results`,`id`,`url`) VALUES
-- ('','','','');
-- INSERT INTO `Metadata` (`product_id_Reviews`,`characteristics_id_Characteristics`,`recommended_id_Recommended`,`ratings_id_Ratings`) VALUES
-- ('','','','');
-- INSERT INTO `Ratings` (`ratings_id`,`1`,`2`,`3`,`4`,`5`) VALUES
-- ('','','','','','');
-- INSERT INTO `Recommended` (`recommended_id`,`false`,`true`) VALUES
-- ('','','');
-- INSERT INTO `Characteristics` (`characteristics_id`,`size_id`,`size_value`,`width_id`,`width_value`,`comfort_id`,`comfort_value`) VALUES
-- ('','','','','','','');