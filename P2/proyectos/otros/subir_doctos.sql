-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 30-10-2024 a las 04:01:17
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `subir_doctos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_docto`
--

CREATE TABLE `info_docto` (
  `folio` int(11) NOT NULL,
  `nom_archivo` varchar(60) NOT NULL,
  `size_arch` varchar(20) NOT NULL,
  `ruta` varchar(80) NOT NULL,
  `extension` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `info_docto`
--

INSERT INTO `info_docto` (`folio`, `nom_archivo`, `size_arch`, `ruta`, `extension`) VALUES
(33, 'agenda.pdf', '341798', '/appweb/parcial3/practicas/subir_doctos/files/agenda.pdf', 'pdf'),
(37, 'Idea de Negocio_Dago.docx', '13380', '/appweb/parcial3/practicas/subir_doctos/files/Idea de Negocio_Dago.docx', 'docx'),
(36, 'reporte_unidad_I_2024.pdf', '215222', '/appweb/parcial3/practicas/subir_doctos/files/reporte_unidad_I_2024.pdf', 'pdf'),
(29, 'aplicaciones_web.pdf', '2743626', '/appweb/parcial3/practicas/subir_doctos/files/aplicaciones_web.pdf', 'pdf');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `username` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `privilegio` varchar(10) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'estandar'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`username`, `password`, `privilegio`) VALUES
('root', '1234', 'admin'),
('user', '4567', 'estandar');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `info_docto`
--
ALTER TABLE `info_docto`
  ADD PRIMARY KEY (`folio`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`username`,`password`,`privilegio`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `info_docto`
--
ALTER TABLE `info_docto`
  MODIFY `folio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
