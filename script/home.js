$(document).ready(function () {
    readData();

    function readData() {
        $("#tableObat").empty();
        $.ajax({
            type: "GET",
            url: host + "read_obat.php",
            dataType: "json",
            async: true,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                var obat = data.body.data;
                
                for (var i = 0; i < obat.length; i++) {
                    $("#data-obat").append(`
                        <div class="col mb-3">
                        <div class="card" style="width: 16rem">
                            <img src="assets/img/`+obat[i].gambar+`" class="card-img-top" alt="" style="object-fit:cover;height:170px"/>
                            <div class="card-body">
                                <h5 class="card-title"><strong>`+obat[i].nama+`</strong></h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="?page=detail&kode=`+obat[i].kode+`" class="btn btn-sm btn-dark">Detail</a>
                            </div>
                        </div>
                        </div>
                    `);
                }
            },
        });
    }
});
