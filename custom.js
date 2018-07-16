 $(document).ready(function () {
        $('#topNav a').hover(function () {
            $(this).addClass('topNavActive');
        }, function () {
            $(this).removeClass('topNavActive');
        });
    });