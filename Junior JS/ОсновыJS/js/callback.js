//this контекст
/*window.onload = function () {
    let item = document.querySelector(".item")
    item.onclick = function(){
        this.classList.toggle("item-active")
    }
}*/
//window.onload = function () {
 //   let items1 = document.querySelectorAll(".items .item")//беру все вложенные блоки
 //   for (let i = 0; i < items1.length; i++){//проходимся по каждому блоку с помощью цикла
 //      items1[i].onclick = activeItem//ждем клика на блок
  //  }
//
  //  function activeItem() {//клик произошел выполняем функцию
   //     this.classList.toggle("item-active")//добавляю класс//
 //   }
    /*setInterval(function () {
        let rand = mtRand(0, items1.length - 1)
        activeItem.call(items1[rand])
    },500)*/
//}
/*function mtRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
}*/
//конец контекста this
/*****************************************/
//Замыкания
/*window.onload = function () {
    let items = document.querySelector(".item")
    items.onclick = activeItem//ждем клика на блок
    function activeItem() {//клик произошел выполняем функцию
        this.classList.toggle("item-active")//добавляю класс//
    }
}*/
//коней замыканий
/*****************************************/
//callback
window.onload = function(){
    let itemCall = document.querySelectorAll(".items .item");
    for(let i = 0; i < itemCall.length; i++){
        itemCall[i].onclick = function(){
            fade(this, 1000, function(){
                this.style.display = "none";
            });
        }
    }
}
function fade(elem, t, f) {
     let fps = 50;
     let time = t || 500;
     let steps = time / fps;
     let op = 1;
     let dO = op / steps;
 
    let callback = f || function(){};

     let timer = setInterval(function(){
        op -= dO;
        elem.style.opacity = op;
        steps--;
        if (steps === 0) {
            clearInterval(timer);
            callback.call(elem);
        }
     }, (1000 / fps));
 }
//конец callback