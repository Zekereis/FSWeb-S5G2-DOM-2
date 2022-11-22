import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

const ilkNavItem = document.querySelector(".nav-link");

window.addEventListener("load",(event) => {
    ilkNavItem.style.color = "red";
})

const tumResimler = document.querySelector("img");
tumResimler.forEach((resim) => {
    resim.addEventListener("mouseover", (event)=> {
        resim.style.filter = "grayscale(100%)";
    })
})

tumResimler.forEach((resim) => {
    resim.addEventListener("dbclick", (event)=> {
        resim.style.filter = "unset";
    })
})