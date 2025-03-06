// Ürün arama uygulaması
let urun1 = { isim: "Acer Swift 1", kategori: "Laptop", fiyat: 3000 };
let urun2 = { isim: "Acer Swift 2", kategori: "Laptop", fiyat: 4000 };
let urun3 = { isim: "Acer Swift 3", kategori: "Laptop", fiyat: 5000 };
let urun4 = { isim: "Lenovo Thinkpad", kategori: "Laptop", fiyat: 7000 };
let urun5 = { isim: "Lenovo 3", kategori: "Laptop", fiyat: 9000 };
let urun6 = { isim: "Lenovo 2", kategori: "Laptop", fiyat: 1000 };

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Ürün ismi giriniz");

filtreliUrunlerDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunlerDoldur(urunler) {
  urunler.forEach(function (urun) {
    // forEach küçük "f" harfi ile düzeltilmiş
    if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
      // toUpperCase() düzeltilmiş
      filtreliUrunler.push(urun);
    }
  });
}

function filtreliUrunleriYazdir(urunler) {
  urunler.forEach(function (urun) {
    // forEach küçük "f" harfi ile düzeltilmiş
    console.log(urun.isim);
  });
}
