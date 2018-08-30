$(function() {

    // Open and close nav on mobile
    $('.bars').on('click', function(e) {

        var navData = $('.navigation').data('nav');

        e.stopPropagation();

        if (navData == 'close') {
            $('.navigation').addClass('nav-open')
                .data('nav', 'open')

            $('.bars>i').first().removeClass('fas fa-bars')
                .addClass('fas fa-times');

            $('.heading,.sub-heading').addClass('text-hide');
        } else {
            $('.navigation').removeClass('nav-open')
                .data('nav', 'close');
            $('.bars>i').removeClass('fas fa-times')
                .addClass('fas fa-bars');

            $('.heading,.sub-heading').removeClass('text-hide');
        }
    });

    //animation of hero home

    var typed = new Typed('#finished', {
        stringsElement: '#typing',
        showCursor: false,
        startDelay: 1000,
        backDelay: 2000,
        backSpeed:60,
        typeSpeed:60,
        loop: true,
        loopCount: Infinity
    });

    //Staff Gallery
    let key = 'IuFvFQ4A5CUDOm6XyKKvzFOccCApTNNZ';

    let urlProjects = 'https://api.behance.net/v2/users/heycheese/projects?client_id=' + key;

    console.log(urlProjects);

    var users = ['andrewcouldwell', 'AlexSeagull', 'juliettewang']

    var projectHTML = $('#staffProfileTemplate').text();
    var projectTemplate = Template7(projectHTML).compile();

    if ($('#index').length > 0) {

        _(users).each(function(username){
            var profileUrl = 'https://api.behance.net/v2/users/'+ username +'/?client_id=' + key;

            $.ajax({
                url: profileUrl,
                dataType: 'jsonp',
                success: function(res){

                    console.log(res);

                    var output = projectTemplate(res);
                    $('.l_column_container').append(output);
                }
            })
        });
    }

    if ($('#staff').length > 0) {
        $.ajax({
            url: urlProjects,
            dataType: 'jsonp',
            success: function(res) {
                _(res.projects).each(function(project) {
                    $('<div class="staff-work-tile"><div class="staff-work-image" style="background-image: url('+ project.covers.original +');"> </div>' + '<div class="tile-title"> <span>' + project.name + '</span></div></div>').appendTo('.staff-work');
                });
            }
        });
    }
});