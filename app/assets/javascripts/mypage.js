$(function () {
    $('.switch').on('click', function () {
        $('.modal').css('display', 'block');
        return false;
    })

    $('.background').on('click', function() {
        $('.modal').css('display', 'none');
        return false;
    })

    $('.contents').on('click', function(event){
        event.stopPropagation();
    })

    $('.task_contents').on('click', function(event){
        event.stopPropagation();
    })
})