$('#input').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: "read.php",
        data: formData,
        cache: false,
        contentType: false, 
        processData: false, 
        dataType: 'json',
        success: function (response) {
           console.log(response) ;
        },
    });
})