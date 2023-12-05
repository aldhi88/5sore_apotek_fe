<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Input Obat</h1>
</div>

        <div class="col-md-10 dash">
            <div class="row">
                <div class="col-4">
                    <form id="input" action="#" method="POST" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="">Gambar</label> <br>
                            <input id="fgambar" name="fgambar" type="file" class="btn btn-secondary" placeholder="Pilih File"></input>
                        </div>
                        <div class="form-group">
                            <label for="">Kode Obat</label>
                            <input type="text" class="form-control" id="kode" name="kode" placeholder="Masukkan kode obat" />
                        </div>
                        <div class="form-group">
                            <label for="">Nama Obat</label>
                            <input type="text" class="form-control" id="nama" name="nama" placeholder="Masukkan nama obat" />
                        </div>
                        <div class="form-group">
                            <label for="">Supplier</label>
                            <input type="text" class="form-control" id="suppiler" name="suppiler" placeholder="Masukkan Supplier" />
                        </div>
                        <div class="form-group">
                            <label for="">Kategori</label>
                            <select class="custom-select" id="kategori" name="kategori">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                        </div>
                        <div class="form-group">
                            <label for="">Harga</label>
                            <input type="number" class="form-control" id="harga" name="harga" placeholder="Masukkan Harga" />
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--end dashboard-->
        <!-- Optional JavaScript -->
        <script type="text/JavaScript" src="assets/lib/bootstrap-4.6.2-dist/js/bootstrap.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script type="text/JavaScript" src="assets/js/obat_input.js"></script>
    </body>
</html>