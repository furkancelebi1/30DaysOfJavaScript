//? Yorum satırları / Scope kavramı / Değişken Türleri

// Yorum satırı

/* Yorum satırı
?
!
TODO
*/

// * Daha parlak

// ? Mavi 

// ! Kırmızı

// TODO: Sarı

// ctrl+ö toplu yorum satırı


// ÇIKTI ALMA YÖNTEMLERİ

console.log("Merhaba Dünya");
alert("Merhaba Dünya");
document.writeln("Merhaba Dünya"); 
document.write("Merhaba Dünya");

/* 
           ? SCOPE KAVRAMI ?

->Global Scope
->Function Scope
->Block Scope

*/

/*
                     !! Global Scope !!
? Global scope, tüm dosya boyunca erişilebilen değişkenlerin tanımlandığı alandır.
? Global scope'ta tanımlanan bir değişken, dosyanın herhangi bir yerinden erişilebilir.
? Global scope'ta tanımlanan bir değişken, dosya boyunca yaşar.

var globalVar = "Ben globalim!";

function showGlobal() {
    console.log(globalVar); // ✅ Çalışır
}

showGlobal();
console.log(globalVar); // ✅ Çalışır

*/

/*
                    ! Function Scope !
? Function scope, fonksiyonlar içinde tanımlanan değişkenlerin erişilebilir olduğu alandır.
? Function scope'ta tanımlanan bir değişken, tanımlandığı fonksiyonun içinde erişilebilir.
? Function scope'ta tanımlanan bir değişken, fonksiyonun dışında erişilemez.

function localScope() {
    let localVar = "Ben fonksiyon içindeyim!";
    console.log(localVar); // ✅ Çalışır
}

localScope();
console.log(localVar); // ❌ Hata: localVar is not defined


 */

/*
                     ! Block Scope !
? Block scope, bloklar içinde tanımlanan değişkenlerin erişilebilir olduğu alandır.
? Block scope'ta tanımlanan bir değişken, tanımlandığı bloğun içinde erişilebilir.

{
    let blockVar = "Ben blok içindeyim!";
    console.log(blockVar); // ✅ Çalışır
}

console.log(blockVar); // ❌ Hata: blockVar is not defined


*/

/* 
                    ! Değişken Türleri var/let/const !
   ? var ramde yer kaplar
   ? let kullanmak daha mantıklı
   ? const sabit değişkenler için kullanılır                 
*/