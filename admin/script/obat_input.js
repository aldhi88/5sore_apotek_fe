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

    var id = getUrlParameter("kode");

    // menampilkan data by=id
    $.ajax({
        type: "GET",
        url: host + "/read_one_obat.php?id=" + id,
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
            var data = response.body.data[0];

            $("#kode").val(data.kode);
            $("#nama").val(data.nama);
            $("#kode_kategori").val(data.kode_kategori);
            $("#kode_supplier").val(data.kode_supplier);
            $("#harga").val(data.harga);
        },
    });

    // update data
    $("#formObat").submit(function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            type: "POST",
            url: host + "update_obat.php",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            dataType: "json",
            success: function (response) {
                alert(response.msg);
            },
        });
    });
});