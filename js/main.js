
  $(document).ready(function(){
    var typed = new Typed('.my_type', {
      strings: ['web Deginer',
                'Font End Devloper',
                'Freelancer'
              ],
      smartBackspace: true ,
      loop:true,
      typeSpeed: 100
    });


    //for naveber
    $(window).on("scroll" ,function(){
      if($(this).scrollTop () > 550){
        $('.navbar').addClass('bg_main')
      }else{
        $('.navbar').removeClass('bg_main')
      }
    })


    //for Scroll Top
    $(window).scroll(function(){
      if($(this).scrollTop() > 200){
        $(".scrollTop").fadeIn()
      }else{
        $(".scrollTop").fadeOut()
      }
    })


    //for scrollTop
    $(".scrollTop").click(function(){
        $("html, body").animate({
         scrollTop:0
        },1000)
    })

    // for mixSitup
    var mixer = mixitup('.my_mix');
    
    //for counter up
    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });


  })