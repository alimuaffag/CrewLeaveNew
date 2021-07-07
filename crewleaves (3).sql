-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 07, 2021 at 09:06 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crewleaves`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `ID` int(11) NOT NULL,
  `SSN` int(11) NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Age` int(11) NOT NULL,
  `pass` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`Name`, `ID`, `SSN`, `Email`, `Age`, `pass`) VALUES
('3lesh', 0, 106310699, 'alimuaffag@gmail.com', 23, '123');

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE `complaint` (
  `id` int(11) NOT NULL,
  `Id_Sender` int(11) NOT NULL,
  `Id_Reciver` int(11) NOT NULL,
  `Response_Message` int(255) NOT NULL,
  `Complaint_Message` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `crew`
--

CREATE TABLE `crew` (
  `Name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ID` int(11) NOT NULL,
  `SSN` int(11) NOT NULL,
  `Email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Age` int(11) NOT NULL,
  `Date_of_hiring` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Date_of_Vocation` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Remainig_Day` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pass` varchar(100) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `crew`
--

INSERT INTO `crew` (`Name`, `ID`, `SSN`, `Email`, `Age`, `Date_of_hiring`, `Date_of_Vocation`, `Remainig_Day`, `pass`) VALUES
('Elaf', 1, 1107621078, 'Elaf@gmail.com', 21, '2010/1/4', 'null', 'null', '123'),
('Mesh', 2, 1102216296, 'mesh@gmail.com', 22, '2011/8/4', 'null', 'null', '123'),
('lamia', 3, 1234567896, 'Lamia@gmail.com', 45, '2007/5/4', 'null', 'null', '123'),
('Muaffag', 4, 1234567890, 'Muaffag@gmail.com', 45, '2007/2/4', 'null', 'null', '123'),
('Sulafh', 5, 741852550, 'Sulafh@gmail.com', 20, '2017/11/20', 'null', 'null', '123'),
('Abdulaziz', 6, 741852961, 'Abdulaziz@gmail.com', 26, '2015/2/20', 'null', 'null', '123'),
('Moni', 7, 741852960, 'moni@gmail.com', 17, '2020/2/20', 'null', 'null', '123'),
('majid', 8, 771852960, 'majid@gmail.com', 24, '2021/2/20', 'null', 'null', '123'),
('k3bol', 9, 741666960, 'k3bol@gmail.com', 24, '2016/4/20', 'null', 'null', '123'),
('omar', 10, 741852966, 'omar@gmail.com', 22, '2019/2/30', 'null', 'null', '123'),
('ammar', 11, 741862960, 'ammr@gmail.com', 24, '2015/2/12', 'null', 'null', '123'),
('Basil', 12, 741552960, 'Basil@gmail.com', 26, '2014/4/20', 'null', 'null', '123'),
('Esmaeil', 13, 1123694356, 'Esmaeil@gmail.com', 23, '2011/5/4', 'null', 'null', '123'),
('Ali', 14, 1106310699, 'ali@gmail.com', 18, '2011/7/4', 'null', 'null', '123'),
('sohaib', 15, 521119635, 'sohaib@gmail.com', 23, '2021/6/7', 'null', 'null', '123'),
('mjed', 16, 521119555, 'mjed@gmail.com', 21, '2020/8/7', 'null', 'null', '123'),
('Loay', 17, 52111665, 'loay@gmail.com', 27, '2011/6/7', 'null', 'null', '123'),
('sultan', 18, 511111635, 'sultan@gmail.com', 32, '2013/6/7', 'null', 'null', '123'),
('lofa', 19, 55559635, 'lofa@gmail.com', 21, '2020/11/10', 'null', 'null', '123'),
('beela', 20, 521119555, 'beela@gmail.com', 23, '2014/8/7', 'null', 'null', '123'),
('moayad', 21, 522219635, 'moayad@gmail.com', 25, '2021/6/7', 'null', 'null', '123'),
('laila', 22, 521119935, 'laila@gmail.com', 49, '2012/9/25', 'null', 'null', '123'),
('Eyad', 23, 52111335, 'Eyad@gmail.com', 40, '2020/1/12', 'null', 'null', '123'),
('salih', 24, 529885535, 'salih@gmail.com', 22, '2018/2/12', 'null', 'null', '123'),
('Aziz', 25, 229883335, 'Aziz@gmail.com', 21, '2012/9/12', 'null', 'null', '123'),
('abdu', 26, 529883335, 'abdu@gmail.com', 22, '2020/12/12', 'null', 'null', '123'),
('shadi', 27, 529999935, 'shadi@gmail.com', 27, '2014/12/25', 'null', 'null', '123'),
('brhom', 28, 529883335, 'brhom@gmail.com', 25, '2020/3/3', 'null', 'null', '123'),
('Yazeed', 29, 583335, 'abdu@gmail.com', 25, '2020/10/10', 'null', 'null', '123'),
('mazen', 30, 533883335, 'mazen@gmail.com', 26, '2009/12/12', 'null', 'null', '123'),
('umar', 31, 333883335, 'umar@gmail.com', 22, '2011/15/12', 'null', 'null', '123'),
('qusai', 32, 537773335, 'qusai@gmail.com', 22, '2013/7/12', 'null', 'null', '123');

-- --------------------------------------------------------

--
-- Table structure for table `slots`
--

CREATE TABLE `slots` (
  `Monthe` int(11) NOT NULL,
  `slot` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vocation`
--

CREATE TABLE `vocation` (
  `id` int(11) NOT NULL,
  `id_sender` int(11) NOT NULL,
  `Month_Priority` varchar(150) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vocation`
--

INSERT INTO `vocation` (`id`, `id_sender`, `Month_Priority`) VALUES
(1, 2, 'January,February,March'),
(2, 2, 'January,May,December,June,April,August,Month,August,February,July,November,October,March,September'),
(3, 2, 'January,May,December,June,April,August,Month,August,February,July,November,October,March,September,Month,January'),
(4, 2, 'March,June,August,September,October,November,December,February,January,May,April,July'),
(5, 2, 'January,February,March,May,April,May,June,July,August,September,October,November,December');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `complaint`
--
ALTER TABLE `complaint`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `crew`
--
ALTER TABLE `crew`
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `slots`
--
ALTER TABLE `slots`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `vocation`
--
ALTER TABLE `vocation`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `vocation`
--
ALTER TABLE `vocation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
