<?php
include 'koneksi.php';

// Buat query SQL untuk membaca obat
$query = "SELECT * FROM obat";
$result = $koneksi->query($query);

$response = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $response['body']['data'][] = array(
            'gambar' => $row['gambar'],
            'kode' => $row['kode'],
            'obat' => $row['obat'],
            'supplier' => $row['kode_supplier'],
            'kategori' => $row['kode_kategori'],
            'harga' => $row['harga'],
        );
    }
    $response['success'] = true;
} else {
    $response['success'] = false;
    $response['message'] = "Tidak ada data obat.";
}

// Mengembalikan respons dalam format JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
