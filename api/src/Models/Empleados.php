<?php
include_once __DIR__ . "/../Config/conexionDB.php";
class Empleados
{
    public static function all()
    {
        $sql = "SELECT * FROM EMPLEADOS";
        return ConexionPDO::query($sql); //self::$Empleados;
    }
}