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

    $('.category_background').on('click', function(){
        $('.category_modal').css('display', 'none');
    })

    $('.macho_contents').on('click', function(event){
        event.stopPropagation();
    })

    $('.task_contents').on('click', function(event){
        event.stopPropagation();
    })

    $('.category_contents').on('click', function(event){
        event.stopPropagation();
    })

    $('.input_submit').on('click', function(event){
        event.stopPropagation();
    })


    $('.task_contents').on('click', function(event){
        event.stopPropagation();
    })

    $('.create_task').on('click', function(){
        $('.task_modal').toggle();
    })

    $('.done_not').on('click', function(){
        $('.not_done_task').show();
        $('.done_task').hide();
    });

    $('.done').on('click', function(){
        $('.done_task').show();
        $('.not_done_task').hide();
    });

    $('.create_category').on('click', function(){
        $('.category_modal').show();
        return false;
    })
})