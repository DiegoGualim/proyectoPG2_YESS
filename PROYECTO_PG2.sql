-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 18-11-2023 a las 07:29:11
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `PROYECTO_PG2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_cuenta_fb`
--

CREATE TABLE `tb_cuenta_fb` (
  `id_cuneta_fb` int(11) NOT NULL,
  `id_facebook` varchar(500) NOT NULL,
  `acces_token` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_registro_comentarios`
--

CREATE TABLE `tb_registro_comentarios` (
  `id_comentario` int(11) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `id_cuenta_fb` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_vinculacion_usuario`
--

CREATE TABLE `tb_vinculacion_usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `apellido` varchar(200) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `direccion` varchar(200) NOT NULL,
  `telefono` int(11) NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tb_vinculacion_usuario`
--

INSERT INTO `tb_vinculacion_usuario` (`id`, `nombre`, `apellido`, `edad`, `direccion`, `telefono`, `username`, `password`, `email`, `type`) VALUES
(1, 'Jorge Diego', 'Gualim Ical', 34, 'zona 11', 30431917, 'dgualim', '$2b$08$RcRlq1u3UPgUVUKbUElmXu4RiQVFnbrRq603V8JxQ1oVU41xPSJhG', 'dgualim@gmail.com', 'admin'),
(2, 'admin', 'admin', 23, 'ciudad', 30231232, 'admin', '$2b$08$DtGETfdfGRp5T6gXzy/bc.KUzSDcbARGkOTztS8gGHYP8dplfo262', 'admin@gmail.com', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tb_cuenta_fb`
--
ALTER TABLE `tb_cuenta_fb`
  ADD PRIMARY KEY (`id_cuneta_fb`);

--
-- Indices de la tabla `tb_registro_comentarios`
--
ALTER TABLE `tb_registro_comentarios`
  ADD PRIMARY KEY (`id_comentario`);

--
-- Indices de la tabla `tb_vinculacion_usuario`
--
ALTER TABLE `tb_vinculacion_usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tb_cuenta_fb`
--
ALTER TABLE `tb_cuenta_fb`
  MODIFY `id_cuneta_fb` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tb_registro_comentarios`
--
ALTER TABLE `tb_registro_comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de la tabla `tb_vinculacion_usuario`
--
ALTER TABLE `tb_vinculacion_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
