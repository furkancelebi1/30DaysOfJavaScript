//! Events  

//? Events nedir?
//? Events, bir uygulamada gerçekleşen herhangi bir olaydır. Örneğin bir butona tıklamak, bir input alanına yazı yazmak, bir resme tıklamak gibi. Bu olaylar gerçekleştiğinde, bu olaylara bir fonksiyon bağlayabiliriz. Bu fonksiyonlar, bu olaylar gerçekleştiğinde çalışır.

//? Event nasıl eklenir?
//? Event eklemek için, bir HTML öğesini seçmeli ve addEventListener() metodunu kullanmalısınız. Bu metod, bir olay dinleyicisi eklemek için kullanılır.

//? addEventListener() metodu, bir HTML öğesine bir olay dinleyicisi eklemek için kullanılır. Bu metod, bir olay türü ve bir olay dinleyicisi fonksiyonu alır.

//? Example:

//? document.getElementById("myBtn").addEventListener("click", function(){
//?   alert("Hello World!");
//? });

//? Example açıklaması:
//? Yukarıdaki örnekte, "myBtn" id'li bir HTML öğesine bir eventListener ekliyoruz. Bu olay dinleyicisi, "click" olayını dinler ve bir uyarı kutusu görüntüler.

//? Event türleri
//? Aşağıda en yaygın kullanılan event türlerini görebilirsiniz:

//! Mouse Events

//? click - Bir öğeye tıklandığında gerçekleşir.
//? dblclick - Bir öğeye çift tıklandığında gerçekleşir.
//? mouseenter - Bir öğenin üzerine gelindiğinde gerçekleşir.
//? mouseleave - Bir öğenin üzerinden çıkıldığında gerçekleşir.
//? mousedown - Bir öğeye tıklandığında gerçekleşir.
//? mouseup - Bir öğeden el çekildiğinde gerçekleşir.
//? mousemove - Bir öğe üzerinde hareket edildiğinde gerçekleşir.

//! Keyboard Events

//? keydown - Bir tuşa basıldığında gerçekleşir.
//? keyup - Bir tuş serbest bırakıldığında gerçekleşir.
//? keypress - Bir tuşa basıldığında gerçekleşir. (Sadece karakter tuşları için çalışır)

//! Form Events

//? submit - Bir form gönderildiğinde gerçekleşir.
//? change - Bir form öğesi değiştirildiğinde gerçekleşir.
//? focus - Bir form öğesi odaklandığında gerçekleşir.
//? blur - Bir form öğesinden odak çıkıldığında gerçekleşir.


