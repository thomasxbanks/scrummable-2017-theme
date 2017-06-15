"use strict";

// declare variables
var browserWidth = void 0,
    browserHeight = void 0,
    screenWidth = void 0,
    screenHeight = void 0,
    distance = void 0,
    target = void 0,
    device_type = void 0,
    device_name = void 0;

// What are the screen dimensions?
var screenSize = function screenSize() {
    screenWidth = screen.width;
    screenHeight = screen.height;
    // log for debug
    console.info(screenWidth, screenHeight);
};

// What are the browser dimensions?
var browser = {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

    // Scroll to anchor
};var scrollToAnchor = function scrollToAnchor(aid) {
    var aTag = document.querySelectorAll("a[name='" + aid + "']");
    aTag.forEach(function (obj) {
        document.querySelector('html,body').animate({
            scrollTop: obj.offset().top
        }, 900);
    });
};

// Make a button enabled
var enableButton = function enableButton(target) {
    document.querySelector(target).prop('disabled', false);
};

// Make a button disabled
var disableButton = function disableButton(target) {
    document.querySelector(target).prop('disabled', true);
};

// Destroy element
var destroyElement = function destroyElement(element) {
    document.querySelector(element).outerHTML = "";
};

// Get the value of the given parameter
var getURLParameter = function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    sURLVariables.forEach(function (object, index) {
        var sParameterName = sURLVariables[index].split('=');
        if (sParameterName[0] == sParam) {
            // Log for debug
            console.log('URL parameter:', sParameterName[1]);
            return sParameterName[1];
        }
    });
};

var urlContains = function urlContains(needle) {
    var haystack = window.location.href;
    return haystack.includes(needle) ? true : false;
};

var isAdult = function isAdult(data) {
    return data.age >= 18;
};

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        increment = 20;

    var animateScroll = function animateScroll(elapsedTime) {
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);
        element.scrollTop = position;
        if (elapsedTime < duration) {
            setTimeout(function () {
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

var colophon = function colophon(startDate) {
    var now = new Date();
    return startDate < now.getFullYear() ? startDate += " - " + now.getFullYear() : now.getFullYear();
};
"use strict";

// Log for debug
console.log('js loaded', browser.width);
var endpoint = "//scrummable.com/wp-json/wp/v2/posts?_embed";
// const endpoint = 'data/posts-original.json'

axios.get(endpoint).then(function (response) {
    for (var i = 0; i < response.data.length; i++) {
        // log for debug
        console.info(response.data[i]);
        document.querySelector('.post-container-teaser').innerHTML += printArticle(response.data[i], i);
    }

    transformHeroImages();
}).catch(function (error) {
    console.error(error);
});

var printArticle = function printArticle(article, index) {
    return "\n                <article class=\"post-teaser " + (index === 0 ? 'featured' : '') + "\">\n                    <header class=\"hero_wrapper\" style=\"background-image: url('" + article['_embedded']["wp:featuredmedia"][0].source_url + "')\">\n                        <img class=\"hero_img-thumb\" src=\"" + article['_embedded']["wp:featuredmedia"][0].media_details.sizes.medium.source_url + "\" />\n                        <img class=\"hero_img-full\" src=\"" + article['_embedded']["wp:featuredmedia"][0].source_url + "\" />\n                    </header>\n                    <div class=\"content\">\n                        " + (index === 0 ? '<span class=\'featured-flag\'>featured</span>' : '') + "\n                        <h2>" + article.title.rendered + "</h2>\n                        <p>" + article.excerpt.rendered + "</p>\n                    </div>\n                    <footer>\n                        <a href=\"\" class=\"button\">Read more</a>\n                    </footer>\n                </article>\n            ";
};

var transformHeroImages = function transformHeroImages() {
    var heroImage = document.querySelectorAll('.hero_img-full');
    for (var i = 0; i < heroImage.length; i++) {
        var hero = heroImage[i];
        console.log(hero);
        hero.addEventListener('load', function () {
            document.querySelector('.hero_img-thumb').style.opacity = 0;
            setTimeout(function () {
                document.querySelector('.hero_img-thumb').outerHTML = '';
            }, 300);
        });
    }
};

document.querySelector('#colophon time').innerText = colophon('2014');
//# sourceMappingURL=app.js.map
