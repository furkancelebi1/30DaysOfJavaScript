/* 
?Session Storage ve Local Storage Nedir?
Her ikisi de Web Storage API’nin bir parçasıdır ve JavaScript ile tarayıcıda veri saklamak için kullanılır.

Session Storage: Kullanıcının oturumu boyunca (tarayıcı sekmesi açık olduğu sürece) verileri saklar. Sekme veya tarayıcı kapatıldığında veriler silinir.
Local Storage: Tarayıcı kapatılsa bile verileri saklamaya devam eder. Veriler, kullanıcı manuel olarak silmediği sürece kalıcıdır.

!Avantajları ve Dezavantajları
?Session Storage Avantajları
✅ Geçici veriler için uygundur. Örneğin: Kullanıcı giriş yaptıktan sonra geçici bir token saklamak.
✅ Daha güvenlidir çünkü tarayıcı kapanınca veriler otomatik olarak silinir.

❌ Tarayıcı kapatıldığında veya sekme yenilendiğinde veri kaybolur.

?Local Storage Avantajları
✅ Tarayıcı kapatılsa bile veriler kaybolmaz, kalıcı veri saklamak için idealdir.
✅ Kullanıcı tercihlerinin kaydedilmesi gibi senaryolar için uygundur.

❌ Verileri elle temizlemek gerekir.
❌ Veriler istemci tarafında saklandığı için hassas bilgiler için güvenli değildir.
*/

//! Session Storage 

//? Değer Ekleme

// sessionStorage.setItem("ad", "Hakan");
// sessionStorage.setItem("yas", 25);

//? Değerleri Alma

// const ad = sessionStorage.getItem("ad");
// const yas = sessionStorage.getItem("yas");

//? Değerleri Silme

// sessionStorage.removeItem("ad");
// sessionStorage.removeItem("yas");

//? Hepsini Silme

// sessionStorage.clear();

//! Local Storage

//? Değer Ekleme

// localStorage.setItem("ad", "Hakan");
// localStorage.setItem("yas", 25);

//? Değerleri Alma

// const ad = localStorage.getItem("ad");
// const yas = localStorage.getItem("yas");

//? Değerleri Silme

// localStorage.removeItem("ad");
// localStorage.removeItem("yas");

//? Hepsini Silme

// localStorage.clear();



