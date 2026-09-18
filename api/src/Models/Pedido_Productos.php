<?php
include_once __DIR__ . "/../Config/conexionDB.php";
class Pedido_productos
{
    public static function all()
    {
        $sql = "SELECT * FROM PEDIDO_PRODUCTO";
        return ConexionPDO::query($sql); //self::Pedido_productos;
    }
}