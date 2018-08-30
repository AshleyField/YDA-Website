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

    //Staff Gallery
    let key = 'LTLUQQXSYWEe5kN6NqJ1DgcVydeNXBFq';


    let urlProjects = 'https://api.behance.net/v2/users/heycheese/projects?client_id=' + key;

    console.log(urlProjects);

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