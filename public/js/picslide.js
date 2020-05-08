var idx = 1;
pictureSlides()
setInterval(pictureSlides, 4000);

function selectPicture(n){

    idx = n
    setInterval(pictureSlides, 4000);

}

function pictureSlides(){
    var i;
    const pictures = document.getElementsByClassName('picture');
    const dots = document.getElementsByClassName('dot');

    if(idx > pictures.length){
        idx = 1
    }
    if(idx < 1){
        idx = pictures.length
    }

    for(i=0; i<pictures.length; i++){
        pictures[i].style.display = 'none';
        dots[i].className = dots[i].className.replace(' active', '')
    }

    pictures[idx-1].style.display = 'block'
    dots[idx-1].className += ' active'
    idx++ 

}
