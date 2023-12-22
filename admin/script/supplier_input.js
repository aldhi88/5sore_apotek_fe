$('#formSupplier').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host+"input_supplier.php",
        data: formData,
        cache: false,
        contentType: false, 
        processData: false, 
        dataType: 'json',
        success: (result) => {
            alert(result.msg);
            location.href = "http://localhost:821/www/kampus/20231/5sore/apotek/apotek_fe/?page=supplier";
        },
    });
})