<?php
require_once "../src/Models/Empleados.php";
class EmpleadoController{
    public function getAll()
    {
        $user=Empleados::all();
        echo json_encode($Empleados);
         
    }
}