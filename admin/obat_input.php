<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Input Obat</h1>
</div>
<div class="row">
    <div class="col-4">
      <form id="input" action="#" method="POST" enctype="multipart/form-data">
        <div class="form-group">
          <label for="gambar">Masukkan Gambar</label> <br>
          <input id="gambar" name="gambar" type="file" class="form-control-file" accept="image/*" />
        </div>
        <div class="form-group">
          <label for="kode">Kode Obat</label>
          <input type="text" class="form-control" id="kode" name="kode" placeholder="Masukkan kode obat" />
        </div>
        <div class="form-group">
          <label for="nama">Nama Obat</label>
          <input type="text" class="form-control" id="nama" name="nama" placeholder="Masukkan nama obat" />
        </div>
        <div class="form-group">
          <label for="kode_supplier">Supplier </label>
          <select class="form-control" id="kode_supplier" name="kode_supplier">
            <!-- Opsi supplier akan dimasukkan melalui Ajax -->
          </select>
        </div>
                <div class="form-group">
          <label for="kode_kategori">Kategori </label>
          <select class="form-control" id="kode_kategori" name="kode_kategori">
            <!-- Opsi supplier akan dimasukkan melalui Ajax -->
          </select>
        </div>
        <div class="form-group">
          <label for="harga">Harga</label>
          <input type="number" class="form-control" id="harga" name="harga" placeholder="Masukkan Harga" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
</div>