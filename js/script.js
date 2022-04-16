//go by order, the names are made from the id position in html


let cutOut1 =document.getElementById("cutOut1");
let cutOut2=document.getElementById("cutOut2");
let nordNorge=document.getElementById("nordNorge")

window.addEventListener ('scroll', function(){
    var value = window.scrollY; //Y is vertical

    cutOut1.style.top= value * 0.5 + 'px';

    //cut the top of cutOut1 so it resembles the organic shape of a wavy cloud, soft, then the movement will interfere naturally
    nordNorge.style.top = value *1.5 + 'px';
   
})


window.addEventListener ('scroll', function(){
    var value = window.scrollX; //Y is vertical

 
   
})
