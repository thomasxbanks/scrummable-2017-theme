// Scroll to anchor
let scrollToAnchor = (aid) => {
    var aTag = document.querySelectorAll("a[name='" + aid + "']")
    aTag.forEach((obj) => {
        document.querySelector('html,body').animate({
            scrollTop: (obj.offset().top)
        }, 900)
    })

}

// Make a button enabled
let enableButton = (target) => {
    document.querySelector(target).prop('disabled', false)
}

// Make a button disabled
let disableButton = (target) => {
    document.querySelector(target).prop('disabled', true)
}

// Destroy element
let destroyElement = (element) => {
    document.querySelector(element).outerHTML = ""
}

// Get the value of the given parameter
let getURLParameter = (sParam) => {
    let sPageURL = window.location.search.substring(1)
    let sURLVariables = sPageURL.split('&')
    sURLVariables.forEach((object, index) => {
        var sParameterName = sURLVariables[index].split('=')
        if (sParameterName[0] == sParam) {
            // Log for debug
            console.log('URL parameter:', sParameterName[1])
            return sParameterName[1]
        }
    })
}

let urlContains = (needle) => {
    let haystack = window.location.href
    return (haystack.includes(needle)) ? true : false
}

let isAdult = (data) => {
    return data.age >= 18
}

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        increment = 20;

    var animateScroll = function(elapsedTime) {
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);
        element.scrollTop = position;
        if (elapsedTime < duration) {
            setTimeout(function() {
                animateScroll(elapsedTime);
            }, increment);
        }
    };

    animateScroll(0);
}

function easeInOut(currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}

let colophon = (startDate) => {
    let now = new Date()
    return (startDate < now.getFullYear()) ? startDate += " - " + now.getFullYear() : now.getFullYear()
}

const CREATECOOKIE = (name, value, days) => {
    if (days) {
        var date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        var expires = "; expires=" + date.toUTCString()
    } else var expires = ""
    document.cookie = name + "=" + value + expires + "; path=/"
}

const READCOOKIE = (name) => {
    var nameEQ = name + "="
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null;
}

const ERASECOOKIE = (name) => {
    CREATECOOKIE(name, "", -1)
}