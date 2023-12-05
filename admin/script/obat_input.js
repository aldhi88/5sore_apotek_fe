$('#input').submit(function(e){
    
    e.preventDefault();

    var formData = new FormData(this);

    $.ajax({
        type: 'POST',
        url: host+"/obat_input.php",
        data: formData,
        cache: false, contentType: false, processData: false, dataType: 'json',
        success: (result) => {
            console.log(result);
        },
    });
});