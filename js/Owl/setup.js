$('.owl-carousel').owlCarousel({
    loop:true, //FALSE
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        
        

        600:{
            items:3
        },
        1000:{
            items:5 //ITENS QUE APARECE NA TELA COM 1000PX
        }
    }
})