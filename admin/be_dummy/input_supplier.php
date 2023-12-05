<?php

$condition = true;

if ($condition) {
    $res = [
        "status" => 200,
        "msg" => "Data berhasil di insert",
        "body" => [
            "data" => [
                ["kode" => "1"],
                ["nama" => "Supplier 1"],
                ["alamat" => "Dumai"],
                ["hp" => "12"]
            ]
        ]
    ];
} else {
    // If false, it means failure
    $res = [
        "status" => 200,
        "msg" => "Gagal membuat kategori",
        "body" => [
            "data" => [
                ["kode" => "1"],
                ["nama" => "Supplier 1"],
                ["alamat" => "Dumai"],
                ["hp" => "12"]
            ]
        ]
    ];
}

echo json_encode($res);
