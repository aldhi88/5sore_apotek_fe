<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3">
    <h6><a href="?page=supplier_data">Kembali</a></h6>
</div>
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Edit Supplier</h1>
</div>

<div class="row">
    <div class="col-md-4">
        <form action="" method="POST" id="formSupplier">
            <div class="form-group">
                <label for="kode">Kode</label>
                <input type="text" class="form-control" id="kode" name="kode" readonly />
            </div>
            <div class="form-group">
                <label for="nama">Supplier</label>
                <input type="text" class="form-control" id="nama" name="nama" />
            </div>
            <div class="form-group">
                <label for="alamat">Alamat</label>
                <textarea type="text" class="form-control" id="alamat" name="alamat"></textarea>
            </div>
            <div class="form-group">
                <label for="hp">Hp</label>
                <input type="number" class="form-control" id="hp" name="hp" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    </div>
</div>