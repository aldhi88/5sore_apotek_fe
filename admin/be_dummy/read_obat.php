<?php

$response = [
    'status' => 200,
    'msg' => 'success',
    'body' => [
        'data' => [
            [
                'gambar' => 'flu.jpeg',
                'kode' => 'OB1',
                'obat' => 'obat 1',
                'supplier' => 'supplier 1',
                'kategori' => 'kategori 1',
                'harga' => '1000',
            ],
            [
                'gambar' => 'flu.jpeg',
                'kode' => 'OB2',
                'obat' => 'obat 2',
                'supplier' => 'supplier 2',
                'kategori' => 'kategori 2',
                'harga' => '2000',
            ]
        ],
    ]
];

echo json_encode($response);
