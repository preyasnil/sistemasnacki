<?php
require_once "../src/Models/Pedido_Productos.php";
class Pedido_ProductoController{
    public function getAll()
    {
        $user=Pedido_Productoss::all();
        echo json_encode($Pedido_Producto);
         
    }
}