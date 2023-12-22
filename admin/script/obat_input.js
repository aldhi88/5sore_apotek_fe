$('#input').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host+"obat_input.php",
        data: formData,
        cache: false,
        contentType: false, 
        processData: false, 
        dataType: 'json',
        success: (result) => {
            alert(result.msg);
        },
    });
  })
  document.addEventListener('DOMContentLoaded', function () {
    fetchSupplier();
    fetchKategori();
   });   
   function fetchSupplier() {
    fetch(host+'read_supplier.php')
       .then(response => response.json())
       .then(data => {
         let select = document.getElementById('kode_supplier');
         data.body.data.forEach(item => {
           let option = document.createElement('option');
           option.value = item.kode_supplier;
           option.text = item.kode;
           select.add(option);
         });
       });
   }
   
   function fetchKategori() {
    fetch(host+'read_kategori.php')
       .then(response => response.json())
       .then(data => {
         let select = document.getElementById('kode_kategori');
         data.body.data.forEach(item => {
           let option = document.createElement('option');
           option.value = item.kode_kategori;
           option.text = item.kode;
           select.add(option);
         });
       });
   }
