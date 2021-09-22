var responsiveNav = document.getElementById('responsive-nav')
var allContent = document.getElementById('master-wrapper')
var navControl = 0 // fechada
function openNavbar(){
    
    if (navControl == 0){
        allContent.style.overflowY = 'hidden'
        responsiveNav.style.display = 'flex'
        navControl = 1
    }else{
        allContent.style.overflowY = 'scroll'
        responsiveNav.style.display = 'none'
        navControl = 0
    }

}

function closeNavbar(){

    allContent.style.overflowY = 'scroll'
    responsiveNav.style.display = 'none'
    navControl = 0

}
