$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    var headerTop =$('#header').height();
    var navHeight = $('#nav').height();
    console.log($('#header').css('display'));
    $(window).on('scroll',function(){
      var stm =$(this).scrollTop()
      console.log(stm)
      // if($('#header').css('display')=='block'){
        if(stm>=headerTop){
          $('#Shuffling').css('marginTop',navHeight);
        }else {
          $('#Shuffling').css('marginTop',0);
        }
      // }else if($('#header').css('display')=='none'){
      //   if(stm>48){
      //     $('#Shuffling').css('marginTop',navHeight);
      //   }else{
      //     $('#Shuffling').css('marginTop',0);
      //   }
      // }
      
    })
  })