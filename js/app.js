if(window.openDatabase){
    var mydb = openDatabase("Kenzie", '1.0', "WebSQL Database", 2 * 1024 * 1024);
    mydb.transaction(function(tx){
      tx.executeSql("create table if not exists user(username varchar(25) primary key, password varchar(25))");
      tx.executeSql("insert into user values ('dhita', 'admin')");
    });
  }else{
    alert("Browser tidak mendukung WebSQL");
  }

  function login(){
    var username = document.getElementById("username").value;
    mydb.transaction(function(tx){
      tx.executeSql("select * from admin where username = ?", [username], validasi);            
    });
  }
  
  function validasi(transaction, results){
    var pass = document.getElementById("password").value;
    if(results.rows.length == 0){
      ons.notification.alert("Username salah");    
    }else{
      var row = results.rows.item(0);
      if(row.password == pass){            
        myNavigator.pushPage('homepage');
      }else{
        ons.notification.alert("Password salah");
        reset();
      }
    }
  }
  
  function reset(){
   document.getElementById("username").value = "";
   document.getElementById("password").value = "";
  }
  function toggle() {

    var x = document.getElementById("jml_minuman");
    var cek = document.getElementById("minuman");
  
    if (cek.value == "Kosong") {
  
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
    hitung()
  
  }
  function hrg() {
   
   var harga= document.getElementById("harga")
    var menu = document.getElementById("mie");
    console.log(menu.value);
    if (menu.value == "Mie Ayam Original") {
    
     harga.value="12000"
    } else if (menu.value == "Mie Ayam Ceker") {
  
      harga.value="14000"
     }else if (menu.value == "Mie Ayam Ceker Bakso") {
  
      harga.value="16000"
     }else if (menu.value == "Mie Ayam Bakso") {
  
      harga.value="13000"
     }else if (menu.value == "Mie Ayam Goreng") {
  
      harga.value="12000"
     }
     else if (menu.value == "Mie Ayam Goreng Ceker") {
  
      harga.value="14000"
     } else if (menu.value == " Mie Ayam Goreng Bakso") {
  
      harga.value="13000"
     }
     else if (menu.value == "Mie Ayam Goreng Bakso") {
     
      harga.value="16000"
     }
 
    hitung()
  
  }
  function hitung() {
  
    var jumlah_minuman = document.getElementById("jml_minuman").value;
    var j_min = parseInt(jumlah_minuman);
    var jumlah_pesanan = document.getElementById("jumlah").value;
    var j_pes = parseInt(jumlah_pesanan);
    var harga = document.getElementById("harga").value;
    var h = parseInt(harga);
    var minuman = document.getElementById("minuman").value;
    var harga_minuman
    if (minuman == "Air Mineral") {
      harga_minuman = 1000
  
    } else if (minuman == "Kosong") {
      harga_minuman = 0
    }
    else if (minuman == "Es teh") {
      harga_minuman = 3000
    }
    else if (minuman == "Teh Hangat") {
      harga_minuman = 2500
    }
    else if (minuman == "Es Jeruk") {
      harga_minuman = 4000
    }
    var total_minuman = harga_minuman * j_min;
   
    var total_pesanan = harga * j_pes;
    
    document.getElementById("total").value = total_pesanan + total_minuman;
  
  }
  
  function login(){
    var username = document.getElementById("username").value;
    mydb.transaction(function(tx){
      tx.executeSql("select * from user where username = ?", [username], validasi);
    });
    }

    function validasi(transaction, results){
      var pass = document.getElementById("password").value;
    if(results.rows.length == 0){
      alert("username salah");
    }else{
      var row = results.rows.item(0);
      if(row.password == pass){
        myNavigator.pushPage('homepage');
      }else{
        alert("Password salah");
      }
    }
    reset();
  }
  
  function reset(){
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }

window.fn = {};
window.fn.open = function () {
    var menu = document.getElementById('menu');
    menu.open();
  };
  
  window.fn.load = function(page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.load(page)
      .then(menu.close.bind(menu));
  };

function save() {

    
    var no = document.getElementById('no_pesanan').value;
    var pesanan = document.getElementById('mie').value;
    var minuman = document.getElementById('minuman').value;
    var pelanggan = document.getElementById('pelanggan').value;
    var jumlah_pesanan = document.getElementById('jumlah').value;
    var jumlah_minuman = document.getElementById('jml_minuman').value;
    var total = document.getElementById('total').value;
    
      localStorage.setItem("no", no);
      localStorage.setItem("pesanan", pesanan);
      localStorage.setItem("minuman", minuman);
      localStorage.setItem("pelanggan", pelanggan);
      localStorage.setItem("jumlah_pesanan",jumlah_pesanan);
      localStorage.setItem("jumlah_minuman",jumlah_minuman);
      localStorage.setItem("total",total);
     
      fn.load('menu.html')
}
  
