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
            console.log(result);
            alert("Data berhasil di tambahkan");
        },
    });
})