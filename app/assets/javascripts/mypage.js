$(function () {
    $('.switch').on('click', function () {
        $('.modal').css('display', 'block');
        return false;
    })

    $('.background').on('click', function() {
        $('.modal').css('display', 'none');
        return false;
    })
})