<?php
// Simulasi response dari read_supplier.php
$supplier = [
    ["kode_supplier" => "S1", "nama" => "Supplier 1"],
    ["kode_supplier" => "S2", "nama" => "Supplier 2"],
    ["kode_supplier" => "S3", "nama" => "Supplier 3"],
    // ... tambahkan data lainnya sesuai kebutuhan
];

header('Content-Type: application/json');
echo json_encode($supplier);
?>