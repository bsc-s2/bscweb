$(document).ready(function () {
    /* tabs */
    $('.jobs #tabsTrigger li').click(function (e) {
        // event.stopPropagation()
        $('.jobs #tabsTrigger li').removeClass('active')
        $(this).addClass('active')
        var id = $(this).attr('tab-data')
        var contentId = '#' + id
        $('.jobs #tabContent div.jobs-content-item').hide()
        $(contentId).show()
    })

    /* collapse */
    $('.jobs .jobs-job-title').click(function(){
        if ($(this).next('.jobs-job-discr').is(":visible")) {
            $(this).next('.jobs-job-discr').hide()
            $(this).find('img').attr('src','/public/image/job/hide.jpeg')
        } else {
            $('.jobs .jobs-job-discr').hide()
            $('.jobs .jobs-job-title img').attr('src','/public/image/job/hide.jpeg')
            $(this).next('.jobs-job-discr').show()
            $(this).find('img').attr('src','/public/image/job/show.jpeg')
        }
    })

    $('.jobs .flow .flow-item').hover(
        function(){
            $(this).find('.hover-item').animate({"top": "0px"}, "fast");
        },function(){
            $(this).find('.hover-item').animate({"top": "92px"}, "fast");
        }
    )
})
