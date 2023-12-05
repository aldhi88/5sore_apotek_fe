<html>
<body>
    <?php include("components/menu.php")  ?>
    

    <form id="kategori" action="" method="post">
         <table>
                    <tr>
                        <td>
                            <label for="">Kode Kategori</label>
                            <input class="form-control" type="text" name="kode" placeholder="masukkan kode"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="">Nama Kategori</label>
                            <input class="form-control" type="text" name="nama" placeholder="masukkan nama" />
                        </td>
                    </tr>
                </table>
                <td><button type="submit" class="btn btn-sm bg-primary text-light" style="margin-top: 10px;">Simpan</button></td>
            
     </form>

       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
       <script src="script/kategori_input.js"></script>
  
</body>
</html>