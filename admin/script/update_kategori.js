$('.btn-edit').on('click', function () {
    var categoryId = $(this).data('id');
    
    // Panggil API untuk membaca data berdasarkan ID
    $.ajax({
        url: host + "read_kategori_by_id.php?id=" + categoryId,
        success: function (data) {
            // Parsing data dan mengisi formulir edit
            $('#kode').val(data.kode);
            $('#nama').val(data.nama);
            $('#formKategori').attr('data-id', categoryId);
        },
    });
});

$('#formKategori').submit(function(e){
    e.preventDefault();
    
    // Ambil ID dari formulir
    var categoryId = $(this).data('id');
    
    // Panggil API untuk pembaruan
    $.ajax({
        type: 'POST',
        url: host + "update_kategori.php?id=" + categoryId,
        data: new FormData(this),
        cache: false,
        contentType: false, 
        processData: false, 
        dataType: 'json',
        success: function (result) {
            alert(result.msg);
        },
    });
});