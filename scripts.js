var slideIndex = 0;

activarCarruselHero(  );

function activarCarruselHero(  ) {

    var i;
    var itemCarrusel = document.getElementsByClassName("item-carrusel-hero");
    for ( i = 0; i < itemCarrusel.length; i++ ) {

        itemCarrusel[i].style.display = "none";
    }

    slideIndex++;
    if(slideIndex > itemCarrusel.length) {

        slideIndex = 1
    }
    itemCarrusel[slideIndex-1].style.display = "block";

    setTimeout(activarCarruselHero, 5000);
}