/*=================MENU SHOW====================*/
const showmMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        });
    }
}

showmMenu('nav_toggle','nav-menu')