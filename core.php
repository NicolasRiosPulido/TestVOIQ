<?php

include 'utils.php';
$response = array();

if (isset($_GET['service'])) {
    $service = $_GET['service'];
    switch ($service) {
        case "get_clients":
            $response['service'] = $service;
            $clients = cvs2Array('clients.csv');

            if (isset($_GET['agent_zip_code_1'])) {
                $agent_zip_code_1 = $_GET['agent_zip_code_1'];
                $agent_clients_1 = array();
                foreach ($clients as &$client) {
                    if (substr($client['zip'], 0, 2) == $agent_zip_code_1) {
                        array_push($agent_clients_1, $client);
                    }
                }
                $response ['agent_clients_1'] = $agent_clients_1;
            }
            if (isset($_GET['agent_zip_code_2'])) {
                $agent_zip_code_2 = $_GET['agent_zip_code_2'];
                $agent_clients_2 = array();
                foreach ($clients as &$client) {
                    if (substr($client['zip'], 0, 2) == $agent_zip_code_2) {
                        array_push($agent_clients_2, $client);
                    }
                }
                $response ['agent_clients_2'] = $agent_clients_2;
            }
            echo json_encode($response);
            break;
    }
} else {
    $response ['success'] = false;
}
