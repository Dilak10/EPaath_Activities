$(function() { //jquery loader
    $('.topImage').click(function(){
        $('#headingRight').addClass('scaleanim');
    });

     $('.leftImage').click(function(){
        $('#upperText').css({
            'color':'blue',
            'font-size':'6vmin'
        });
    });

      $('.rightImage').click(function(){
        $('#upperText').css('background','white');
    });
});