<?php
// $conn = mysqli_connect('localhost', 'root', '', 'showroom');
$response = [
    'status' => 200,
    'msg' => 'Data berhasil diinsert',
    'body' => [
        'data' => [
            'kode' => 1,
            'nama' => 'Panadol',
            'kode_kategori' => 1,
            'kode_supplier' => 2,
            'gambar' => '1.jpg',
            'harga' => 20000,
        ]
    ]
];

// $result = mysqli_query($conn, "SELECT * FROM tb_merek ORDER BY id_merek ASC");
// while ($row = mysqli_fetch_assoc($result)) {
//     $data[] = $row;
// }

// $response['body']['data'] = $data;

echo json_encode($response);
