$(document).ready(function () {
  // api read
  $.ajax({
    type: "GET",
    url: host + "read_kategori.php",
    dataType: "json",
    async: true,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      var dataKategori = data.body.data;
      for (var i = 0; i < dataKategori.length; i++) {
        $("#tableKategori").append(
          `
            <tr>
            <td>` +
            (i + 1) +
            `</td>
            <td>` +
            dataKategori[i].kode +
            `</td>
            <td>` +
            dataKategori[i].Kategori +
            `</td>
            <td>
            <button id="hapus" class="btn btn-danger" value="` +
            dataKategori[i].kode +
            `">
            Hapus
            </button>
            <button id="edit" class="btn btn-primary">
            <a class="text-light" href="?page=kategori_edit&id=` +
            dataKategori[i].kode +
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
        url: host + "hapus_kategori.php",
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
