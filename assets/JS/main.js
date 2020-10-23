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


/*=========    ACTIVE AND REMOVE MENU  ============*/

const navLink = document.querySelectorAll('.nav_link')

    function linkAction(){
        //Active Link
        navLink.forEach(n => n.classList.remove('active'))
        this.classList.add('active')
        //remove menu mobile
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show')
}



