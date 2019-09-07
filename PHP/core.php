<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

include 'utils.php';
$response = array();

if (isset($_GET['service'])) {
    $service = $_GET['service'];
    switch ($service) {
        case "get_clients":
            $response['service'] = $service;
            $clients = cvs2Array('clients.csv');
            $clients_table = array();
            $count = 0;
            if (isset($_GET['agent_zip_code_1'])) {
                $agent_zip_code_1 = $_GET['agent_zip_code_1'];
                foreach ($clients as &$client) {
                    if (substr($client['zip'], 0, 2) == $agent_zip_code_1) {
                        $client['agent'] = 'agente 1';
                        array_push($clients_table, $client);
                        $count ++;
                    }
                }
            }
            $response ['agent_clients_count_1'] = $count;
            $count = 0;
            if (isset($_GET['agent_zip_code_2'])) {
                $agent_zip_code_2 = $_GET['agent_zip_code_2'];
                $agent_clients_2 = array();
                foreach ($clients as &$client) {
                    if (substr($client['zip'], 0, 2) == $agent_zip_code_2) {
                        $client['agent'] = 'agente 2';
                        array_push($clients_table, $client);
                        $count ++;
                    }
                }
            }
            
            $response ['agent_clients_count_2'] = $count;
            $response ['info'] = $clients_table;
            echo json_encode($response);
            break;
    }
} else {
    $response ['success'] = false;
}
