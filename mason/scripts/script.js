let nav_li_items = document.getElementsByClassName('nav-link');
let thing = document.getElementById('navbarSupportedContent');

for(let item of nav_li_items){
    item.addEventListener('click',function(){
        thing.classList.toggle('show');
    });
};