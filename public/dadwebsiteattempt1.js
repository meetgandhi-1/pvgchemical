$(".yolo").click(function () {
    location.href = "/about";
});

// $(".yolo").click(function(){
//    location.href = "/about";
// });

// $(".yolo").click(function(){
//    location.href = "/about";
// });

//  $('document').ready(function(){
//      $(".div1").hover(function(){
//          $("#div2").fadeIn(); 
//      }); 
//  }); 

$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadein1').each(function (i) {

            $(this).animate({
                'opacity': '1'
            }, 2000);


        });
    });
});


$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadein2').each(function (i) {

            $(this).animate({
                'opacity': '1'
            }, 2000);


        });
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadein3').each(function (i) {

            $(this).animate({
                'opacity': '1'
            }, 2000);


        });
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadeinleft').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '0px'
                }, 1500);
            }

        });
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        $('#konsapage').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '0px'
                }, 1500);
            }

        });
    });
});

// duration of scroll animation
var scrollDuration = 300;
// paddles
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');
// get items dimensions
var itemsLength = $('.item').length;
var itemSize = $('.item').outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var getMenuWrapperSize = function () {
    return $('.menu-wrapper').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on('resize', function () {
    menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function () {
    return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function () {
    return $('.menu').scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$('.menu').on('scroll', function () {

    // get how much of menu is invisible
    menuInvisibleSize = menuSize - menuWrapperSize;
    // get how much have we scrolled so far
    var menuPosition = getMenuPosition();

    var menuEndOffset = menuInvisibleSize - paddleMargin;

    // show & hide the paddles 
    // depending on scroll position
    if (menuPosition <= paddleMargin) {
        $(leftPaddle).addClass('hidden');
        $(rightPaddle).removeClass('hidden');
    } else if (menuPosition < menuEndOffset) {
        // show both paddles in the middle
        $(leftPaddle).removeClass('hidden');
        $(rightPaddle).removeClass('hidden');
    } else if (menuPosition >= menuEndOffset) {
        $(leftPaddle).removeClass('hidden');
        $(rightPaddle).addClass('hidden');
    }

    // print important values
    $('#print-wrapper-size span').text(menuWrapperSize);
    $('#print-menu-size span').text(menuSize);
    $('#print-menu-invisible-size span').text(menuInvisibleSize);
    $('#print-menu-position span').text(menuPosition);

});

// scroll to left
$(rightPaddle).on('click', function () {
    $('.menu').animate({
        scrollLeft: menuInvisibleSize
    }, scrollDuration);
});

// scroll to right
$(leftPaddle).on('click', function () {
    $('.menu').animate({
        scrollLeft: '0'
    }, scrollDuration);
});

function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}