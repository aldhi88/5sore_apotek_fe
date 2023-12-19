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
document.addEventListener('DOMContentLoaded', function() {
  const url = 'read_supplier.php'; // API URL
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function() {
     if (this.status === 200) {
       const supplier = JSON.parse(this.responseText);
       let options = '<option value="">--Pilih Supplier--</option>';
       supplier.forEach(function(supplier) {
         options += `<option value="${supplier.kode_supplier}">${supplier.nama}</option>`;
       });
       document.getElementById('kode_supplier').innerHTML = options;
     }
  };
  xhr.send();
 
  // AJAX request for kategori
  const url2 = 'read_kategori.php'; // API URL
  const xhr2 = new XMLHttpRequest();
  xhr2.open('GET', url2, true);
  xhr2.onload = function() {
     if (this.status === 200) {
       const kategori = JSON.parse(this.responseText);
       let options = '<option value="">--Pilih Kategori--</option>';
       kategori.forEach(function(kategori) {
         options += `<option value="${kategori.kode_kategori}">${kategori.nama}</option>`;
       });
       document.getElementById('kode_kategori').innerHTML = options;
     }
  };
  xhr2.send();
 });
