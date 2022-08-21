document.addEventListener("DOMContentLoaded",function(){
    var hieuungmenu = document.querySelector('.hieuungmenu');
    var den = document.querySelector('.den');
    var trangthaimenu="tren100";
    window.addEventListener('scroll',function(){
        console.log(this.window.pageYOffset)
        if(this.window.pageYOffset>100){
            if(trangthaimenu="tren100"){
                trangthaimenu="duoi100";
                
                hieuungmenu.classList.add('menutop');
                den.classList.add('doimau');
            }
        }
        if(this.window.pageYOffset<=100){
            if(trangthaimenu="duoi100"){
                hieuungmenu.classList.remove('menutop');
                hieuungmenu.classList.remove('doimau');
                trangthaimenu="tren100";
            }
        }
    })
})