$(document).ready(function () {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split("&"),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split("=");

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };

    var kode = getUrlParameter("kode");

    // menampilkan detail obat
    $.ajax({
        type: "GET",
        url: host + "read_one_obat.php?kode=" + kode,
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
            var data = response.body.data;

            $('#gambar-obat').append(`
                <img src="`+ host +data.gambar+`" class="img-fluid" alt="" />
                <p>`+ data.deskripsi +`</p>
            `)

            $('#detail-obat').append(`
                <li class="list-group-item">Nama &emsp;&emsp;: `+data.nama+`</li>
                <li class="list-group-item">Harga &emsp;&emsp;: Rp. `+data.harga+`</li>
                <li class="list-group-item">Supplier &emsp;: `+data.nama_supplier+`</li>
                <li class="list-group-item">Kategori &emsp;: `+data.nama_kategori+`</li>
            `)
        },
    });
});