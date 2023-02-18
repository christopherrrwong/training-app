$(document).ready(function () {
    $(".accord1 li p").click(function () {
        $(this).next().slideToggle(function () {
            $(this).prev().toggleClass("open");
        });
    });
});

$(document).ready(function () {
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('#tabs-nav li').click(function () {

        var newIndex = $(this).index();
        var currentIndex = $('#tabs-nav li.active').index();
        if (newIndex != currentIndex) {

            $('#tabs-nav li').eq(newIndex).fadeIn().addClass('active')
            $('#tabs-nav li').eq(currentIndex).fadeIn().removeClass('active')
            $('.tab-content').eq(currentIndex).fadeIn().hide();
            $('.tab-content').eq(newIndex).fadeIn().show();
        }
    });


});





/* $("accord1 li p").click(function () {
    $(this).next().slideToggle(function(){
        $(this).next().toggleClass("open");
        }); */