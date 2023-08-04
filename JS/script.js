const toggle_btn=document.querySelector('.toggle-btn')
const menu=document.querySelector('.menu')
const drop_btn=document.querySelector('.dropbtn')
const drop_content=document.querySelector('.dropdown')

toggle_btn.addEventListener('click', function() {
    menu.classList.toggle('active')
})

drop_btn.addEventListener('click',function(){
    drop_content.classList.toggle('active')
})