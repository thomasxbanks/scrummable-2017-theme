"use strict"


// Log for debug
console.log('js loaded', browser.width)
const endpoint = "//scrummable.com/wp-json/wp/v2/posts?_embed"
axios.get(endpoint).then((response) => {
    for (var i = 0; i < response.data.length; i++) {
        // log for debug
        console.info(response.data[i])
        document.querySelector('.article-container-teaser').innerHTML += printArticle(response.data[i], i)
    }

    transformHeroImages()

}).catch((error) => {
    console.error(error)
})

let printArticle = (article, index) => {
    return `
                <article class="article-teaser ${(index === 0) ? 'featured' : ''}">
                    <header class="article-hero-wrapper" style="background-image: url('${article['_embedded']["wp:featuredmedia"][0].source_url}')">
                        ${(index === 0) ? '<span class=\'featured-flag\'>featured</span>' : ''}
                        <img class="article-hero-image-thumb" src="${article['_embedded']["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" />
                        <img class="article-hero-image-full" src="${article['_embedded']["wp:featuredmedia"][0].source_url}" />
                    </header>
                    <div class="content">
                        <h2>${article.title.rendered}</h2>
                        <p>${article.excerpt.rendered}</p>
                    </div>
                    <footer>
                        <a href="" class="button">Read more</a>
                    </footer>
                </article>
            `
}

let transformHeroImages = () => {
    let heroImage = document.querySelectorAll('.article-hero-image-full')
    for (var i = 0; i < heroImage.length; i++) {
        let hero = heroImage[i]
        console.log(hero)
        hero.addEventListener('load', () => {
            document.querySelector('.article-hero-image-thumb').style.opacity = 0
            setTimeout(() => {
                document.querySelector('.article-hero-image-thumb').outerHTML = ''
            }, 300)

        })
    }
}