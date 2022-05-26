let cl = console.log;

let navigation = document.getElementById('navigation');
let navtoggle = document.getElementById('navtoggle');




navtoggle.addEventListener('click',function(){
    navigation.classList.toggle('active');
})