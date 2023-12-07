$(document).ready(function () {
    // api read
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
                        dataSupplier[i].id +
                        `">
                            Hapus
                            </button>
                            <button id="edit" class="btn btn-primary">
                                <a class="text-light" href="?page=supplier_edit&id=` +
                        dataSupplier[i].id +
                        `">Edit</a>
                            </button>
                        </td>
                    </tr>
                    `
                );
            }
        },
    });

    // api hapus
    $(document).on("click", "#hapus", function () {
        var kode = $(this).val();

        if (confirm("Yakin ingin hapus data dengan kode=" + kode + "?")) {
            $.ajax({
                type: "POST",
                url: host + "hapus_supplier.php",
                data: { kode: kode },
                dataType: "json",
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                success: function (response) {
                    alert(response.msg);
                },
            });
        }
    });
});
