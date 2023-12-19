<?php
// Simulasi response dari read_kategori.php
$kategori = [
    ["kode_kategori" => "S1", "nama" => "kategori 1"],
    ["kode_kategori" => "S2", "nama" => "kategori 2"],
    ["kode_kategori" => "S3", "nama" => "kategori 3"],
    // ... tambahkan data lainnya sesuai kebutuhan
];

header('Content-Type: application/json');
echo json_encode($kategori);
?>