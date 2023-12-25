$(document).ready(function () {
    readData();

    // api read
    function readData() {
        $("#tableSupplier").empty();
        $.ajax({
            type: "GET",
            url: host + "read_supplier.php",
            dataType: "json",
            async: true,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                var dataSupplier = data.body.data;
                for (var i = 0; i < dataSupplier.length; i++) {
                    $("#tableSupplier").append(
                        `
                        <tr>
                            <td>` +
                            (i + 1) +
                            `</td>
                            <td>` +
                            dataSupplier[i].kode +
                            `</td>
                            <td>` +
                            dataSupplier[i].nama +
                            `</td>
                            <td>` +
                            dataSupplier[i].alamat +
                            `</td>
                            <td>` +
                            dataSupplier[i].hp +
                            `</td>
                            <td>
                                <button id="hapus" class="btn btn-danger" value="` +
                            dataSupplier[i].kode +
                            `">
                                Hapus
                                </button>
                                <button id="edit" class="btn btn-primary">
                                    <a class="text-light" href="?page=supplier_edit&kode=` +
                            dataSupplier[i].kode +
                            `">Edit</a>
                                </button>
                            </td>
                        </tr>
                        `
                    );
                }
            },
        });
    }

    // api hapus
    $(document).on("click", "#hapus", function () {
        var kode = $(this).val();

        if (confirm("Yakin ingin hapus data dengan kode=" + kode + "?")) {
            $.ajax({
                type: "POST",
                url: host + "delete_supplier.php",
                data: { kode: kode },
                dataType: "json",
                async: true,
                success: function (response) {
                    alert(response.msg);
                },
            });
            readData();
        }
    });
});
