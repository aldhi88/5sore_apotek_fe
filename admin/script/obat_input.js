$('#input').submit(function(e){
    
    e.preventDefault();

    var formData = new FormData(this);
    $.ajax({
        url: host+"/obat_input.php",
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            if (response.status == 200) {
                alert(response.msg);
                console.log(response.body.data);
            } else {
                alert('Gagal menyimpan data.');
            }
        },
    });
});

