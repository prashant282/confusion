$(document).ready(function(){
//  $('[data-toggle="tooltip"]').tooltip();

    $('#mycarousel').carousel({interval:2000});

//  $('#carousel-pause').click(function(){
//      $('#mycarousel').carousel('pause');
//  });

//  $('#carousel-play').click(function(){
//      $('#mycarousel').carousel('cycle');
//  });

    $("#carouselButton").click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children('span').removeClass('fa-pause');
            $("#carouselButton").children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children('span').removeClass('fa-play');
            $("#carouselButton").children('span').addClass('fa-pause');

        }
    });

    $("#login-button").click(function(){
        $("#loginModal").modal("show");
    });

    $("#reserve-button").click(function(){
        $("#reserveTableModal").modal("show");
    });

    $("#tooltip-button").tooltip({
        placement:'bottom',
        html: true,
        title:"Or call us at <br> <strong>9818278981</strong>"
    })
})