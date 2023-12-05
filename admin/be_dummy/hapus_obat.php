<?php

$response = [
    'status' => 200,
    'msg' => 'data berhasil dihapus',
    'body' => [
        'data' => [
            'kode' => 'OB1'
        ]
    ]
];

echo json_encode($response);
