$(document).ready(function(){
   var red = false;
   var win = false;
   
   var checkWin = function(){
      if($('#t1').hasClass('blue') && $('#t2').hasClass('blue') && $('#t3').hasClass('blue'))
         win =true;
      if($('#m1').hasClass('blue') && $('#m2').hasClass('blue') && $('#m3').hasClass('blue'))
         win =true;
      if($('#b1').hasClass('blue') && $('#b2').hasClass('blue') && $('#b3').hasClass('blue'))
         win =true;
      if($('#t1').hasClass('red') && $('#t2').hasClass('red') && $('#t3').hasClass('red'))
         win =true;
      if($('#m1').hasClass('red') && $('#m2').hasClass('red') && $('#m3').hasClass('red'))
         win =true;
      if($('#b1').hasClass('red') && $('#b2').hasClass('red') && $('#b3').hasClass('red'))
         win =true;
      
      if($('#t1').hasClass('blue') && $('#m1').hasClass('blue') && $('#b1').hasClass('blue'))
         win =true;
      if($('#t2').hasClass('blue') && $('#m2').hasClass('blue') && $('#b2').hasClass('blue'))
         win =true;
      if($('#t3').hasClass('blue') && $('#m3').hasClass('blue') && $('#b3').hasClass('blue'))
         win =true;
      if($('#t1').hasClass('red') && $('#m1').hasClass('red') && $('#b1').hasClass('red'))
         win =true;
      if($('#t2').hasClass('red') && $('#m2').hasClass('red') && $('#b2').hasClass('red'))
         win =true;
      if($('#t3').hasClass('red') && $('#m3').hasClass('red') && $('#b3').hasClass('red'))
         win =true;
      
      if($('#t1').hasClass('blue') && $('#m2').hasClass('blue') && $('#b3').hasClass('blue'))
         win =true;
      if($('#t3').hasClass('blue') && $('#m2').hasClass('blue') && $('#b1').hasClass('blue'))
         win =true;
      if($('#t1').hasClass('red') && $('#m2').hasClass('red') && $('#b3').hasClass('red'))
         win =true;
      if($('#t3').hasClass('red') && $('#m2').hasClass('red') && $('#b1').hasClass('red'))
         win =true;
      

      if(win){
         $('#winner').text("Winner:");
         if(red){
            $('#Player').removeClass('red');
            $('#Player').addClass('blue');
         }
         else{
            $('#Player').removeClass('blue');
            $('#Player').addClass('red');
         }
      }   
   };
   
   $('#Player').addClass('blue');
   $('div').click(function(){
      if( !$(this).hasClass('red') && !$(this).hasClass('blue') && !win /*&& $(this).id !== '.Player'*/)
      {
         if(red){ 
            $(this).addClass('red');
            $('#Player').removeClass('red');
            $('#Player').addClass('blue');
         }
         else{
            $(this).addClass('blue');
            $('#Player').removeClass('blue');
            $('#Player').addClass('red');
         }
         red = !red;
         checkWin();
      }
   });
   $('Button').click(function(){
      $('.red').removeClass('red');
      $('.blue').removeClass('blue');
      red = false;
      win = false;
      $('#Player').addClass('blue');
      $('#winner').text("Player's turn:")
   });
});