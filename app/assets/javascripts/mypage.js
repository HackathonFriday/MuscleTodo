$(function () {
    $('.switch').on('click', function () {
        $('.modal').css('display', 'block');
        return false;
    })

    $('.background').on('click', function() {
        $('.macho_modal').css('display', 'none');
        $('.task_modal').css('display', 'none');
        return false;
    })

    $('.contents').on('click', function(event){
        event.stopPropagation();
    })

    $('.task_contents').on('click', function(event){
        event.stopPropagation();
    })

    $('.create_task').on('click', function(){
        $('.task_modal').toggle();
    })
})