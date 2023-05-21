const btn1menu=document.querySelector('.btn1');
const mobilmenu=document.querySelector('.mbilmenu');
btn1menu.addEventListener('click',()=>{
    btn1menu.classList.toggle('btn2mbil');
    mobilmenu.classList.toggle('mbildisnon');
});

// serch tblet
// const inpsertab=document.querySelector('.SerLT');
// const imgsertb=document.getElementById('imgsertb');
// imgsertb.addEventListener('click',()=>{
//     inpsertab.classList.toggle('sertogg');
// })
document.getElementById("favorite").addEventListener("click", function(){
    var cardClasses = document.getElementsByClassName("card");
    var contents = "";
    for (var i=0; i<cardClasses.length; i++){
        contents += cardClasses[i].innerHTML;
    }
    var newDoc = window.open("favorit.html");
    newDoc.document.write(contents);
});
