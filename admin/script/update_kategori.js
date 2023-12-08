$('.btn-edit').on('click', function () {
    var categoryId = $(this).data('id');
    
    $.ajax({
        url: host+"read_kategori.php",
        type: 'GET',
        success: function (data) {
            $('#kode').val(data.kode);
            $('#nama').val(data.nama);
            $('#formKategori').attr('data-id', categoryId);
        },
    });
});
$('#formKategori').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host+"update_kategori.php",
        data: formData,
        cache: false,
        contentType: false, 
        processData: false, 
        dataType: 'json',
        success: (result) => {
            alert(result.msg);
        },
    });
})
