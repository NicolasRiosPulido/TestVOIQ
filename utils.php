<?php

function cvs2Array($file_name) {

    //return $csv = array_map('str_getcsv', file('data.csv'));;


    $return = array();
    if (($gestor = fopen("clients.csv", "r")) !== FALSE) {
        while (($datos = fgetcsv($gestor)) !== FALSE) {
            $numero = count($datos);
            $fila = array();
            $fila['name'] = $datos[0];
            $fila['zip'] = $datos[1];

            array_push($return, $fila);
        }
        fclose($gestor);
        return $return;
    }
}

?>