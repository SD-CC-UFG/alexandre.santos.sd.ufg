-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


create database db_users;
-- --------------------------------------------------------
use db_users;


--
-- Database: `db_users`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users` (Modelo)
--

CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(60) NOT NULL,
  `full_name` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `username`, `password`, `full_name`) VALUES
(1, 'john', '6607a999607711cd339dce1de6d64425a0985cfd', 'John Doe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;


-- --------------------------------------------------------

--
-- Table structure for table `tbl_students`
--

CREATE TABLE `tbl_students` (
  `tipo` varchar(60) DEFAULT 'estudante',
  `matricula` int(11) NOT NULL,
  `nome` varchar(60) NOT NULL,
  `sobrenome` varchar(60) NOT NULL,
  `turma` varchar(2) NOT NULL,
  `age` int(3) NOT NULL,
  `cpf_responsavel` varchar(60) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_students` (`nome`, `sobrenome`, `turma`, `age`, `cpf_responsavel`, `username`, `password`) VALUES
('Paulo', 'Otavio Neto', 'A', '11', '04384298100', 'pauloOtavio', '6607a999607711cd339dce1de6d64425a0985cfd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_students`
--
ALTER TABLE `tbl_students`
  ADD PRIMARY KEY (`matricula`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_students`
--
ALTER TABLE `tbl_students`
  MODIFY `matricula` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;



  -- --------------------------------------------------------


--
-- Table structure for table `tbl_responsaveis`
--

CREATE TABLE `tbl_responsaveis` (
  `tipo` varchar(60) DEFAULT 'responsavel',
  `nome` varchar(60) NOT NULL,
  `sobrenome` varchar(60) NOT NULL,
  `age` int(3) NOT NULL,
  `cpf` varchar(60) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_responsaveis` (`nome`, `sobrenome`, `age`, `cpf`, `username`, `password`) VALUES
('Ricardo', 'Otavio Junior', '40', '04384298100', 'pauloOtavio', '6607a999607711cd339dce1de6d64425a0985cfd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_responsaveis`
--
ALTER TABLE `tbl_responsaveis`
  ADD PRIMARY KEY (`cpf`);



-- --------------------------------------------------------

--
-- Table structure for table `tbl_secretaria`
--

CREATE TABLE `tbl_secretaria` (
  `tipo` varchar(60) DEFAULT 'secretaria',
  `nome` varchar(60) NOT NULL,
  `sobrenome` varchar(60) NOT NULL,
  `age` int(3) NOT NULL,
  `cpf_secretaria` varchar(60) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_secretaria` (`nome`, `sobrenome`, `age`, `cpf_secretaria`, `username`, `password`) VALUES
('Flavia', 'Ribeiro Freitas', '22', '02233344455', 'flaviaRibeiro', '6607a999607711cd339dce1de6d64425a0985cfd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_students`
--
ALTER TABLE `tbl_secretaria`
  ADD PRIMARY KEY (`cpf_secretaria`);

--
-- AUTO_INCREMENT for dumped tables
--

