<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3">
    <h6><a href="?page=obat_data">Kembali</a></h6>
</div>
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Edit Obat</h1>
</div>

<div class="row">
    <div class="col-md-4">
        <form action="" method="POST" id="formObat">
            <div class="form-group">
                <label for="kode">Kode Obat</label>
                <input type="text" class="form-control" id="kode" name="kode" readonly />
            </div>
            <div class="form-group">
                <label for="nama">Nama Obat</label>
                <input type="text" class="form-control" id="nama" name="nama" />
            </div>
            <div class="form-group">
                <label for="kode_kategori">Kode Kategori</label>
                <select class="form-control" name="kode_kategori" id="kode_kategori">
                    <option disabled>Pilih</option>
                    <!-- data dipanggil api -->
                </select>
            </div>
            <div class="form-group">
                <label for="kode_supplier">Kode Supplier</label>
                <select class="form-control" name="kode_supplier" id="kode_supplier">
                    <option disabled>Pilih</option>
                    <!-- data dipanggil api -->
                </select>
            </div>
            <div class="form-group">
                <label for="gambar">Gambar</label>
                <input type="file" class="form-control" id="gambar" name="gambar" />
            </div>
            <div class="form-group">
                <label for="harga">Harga</label>
                <input type="number" class="form-control" id="harga" name="harga" />
            </div>
            <div class="form-group">
                <button class="btn btn-danger" type="reset">Reset</button>
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    </div>
</div>