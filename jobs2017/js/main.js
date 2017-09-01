$(document).ready(function () {
    /* tabs */
    $('#tabsTrigger li').click(function (e) {
        // event.stopPropagation()
        $('#tabsTrigger li').removeClass('active')
        $(this).addClass('active')
        var id = $(this).attr('tab-data')
        var contentId = '#' + id
        $('#tabContent div.content-item').hide()
        $(contentId).show()
    })

    /* collapse */
    $('.job-title').click(function(){
        if ($(this).next('.job-discr').is(":visible")) {
            $(this).next('.job-discr').hide()
            $(this).find('img').attr('src','img/hide.jpeg')
        } else {
            $('.job-discr').hide()
            $('.job-title img').attr('src','img/hide.jpeg')
            $(this).next('.job-discr').show()
            $(this).find('img').attr('src','img/show.jpeg')
        }
    })


    $('.flow .flow-item').hover(
        function(){
            $(this).find('.hover-item').animate({"top": "0px"}, "fast");
        },function(){
            $(this).find('.hover-item').animate({"top": "92px"}, "fast");
        }
    )
})
