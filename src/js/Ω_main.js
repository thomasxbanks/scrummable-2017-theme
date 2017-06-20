"use strict"

let preventScroll = () => {
    document.querySelector('html').setAttribute('data-state', 'not-scroll')
}

let allowScroll = () => {
    document.querySelector('html').setAttribute('data-state', '')
}

let openSidebar = (target) => {
    $('[data-role="' + target + '"]').attr('data-state', 'is-active')
}

let closeSidebar = (target) => {
    if (target) {
        $('[data-role="' + target + '"]').attr('data-state', 'not-active')
    } else {
        $('.sidebar').attr('data-state', 'not-active')
    }
}

$('[data-action="toggle-sidebar"]').on('click', function () {
    let target = $(this).data('target')
    let currentState = $('[data-role="' + target + '"]').attr('data-state')
    if (currentState === 'is-active') {
        closeSidebar(target)
        allowScroll()
    } else {
        closeSidebar()
        openSidebar(target)
    }
})


let makeTheme = (theme) => {
    $('[data-action="toggle-theme"]').attr('aria-label', theme + " theme")
    $('html').attr('data-theme', theme)
}

$('[data-action="toggle-theme"]').on('click', function () {
    ERASECOOKIE('theme')
    let currentTheme = $(this).attr('aria-label')
    console.log(currentTheme)
    if (currentTheme === 'light theme') {
        makeTheme('dark')
    } else {
        makeTheme('light')
    }
    CREATECOOKIE('theme', document.querySelector('html').getAttribute('data-theme'))
})

$(document).ready(() => {

    if (READCOOKIE('theme')) {
        document.querySelector('html').setAttribute('data-theme', READCOOKIE('theme'))
    }


    $(document).scroll(function () {
        if ($(document).scrollTop() >= $('.post_hero').height()) {
            $('#masthead').addClass('considerate')
        } else {
            $('#masthead').removeClass('considerate')
        }
    })

    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // downscroll code
            $('#masthead.considerate').attr('data-state', 'not-active')
        } else {
            // upscroll code
            $('#masthead.considerate').attr('data-state', 'is-active')
        }
        lastScrollTop = st;
    });

})