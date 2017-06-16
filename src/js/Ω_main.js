"use strict"


// Log for debug
console.log('js loaded', browser.width)
const endpoint = "//scrummable.com/wp-json/wp/v2/posts?_embed"
// const endpoint = 'data/posts-original.json'

axios.get(endpoint).then((response) => {
    for (var i = 0; i < response.data.length; i++) {
        // log for debug
        console.info(response.data[i])
        document.querySelector('.post-container-teaser').innerHTML += printArticle(response.data[i], i)
    }

    transformHeroImages()

}).catch((error) => {
    console.error(error)
})

let printArticle = (article, index) => {
    return `
                <article class="${(index === 0) ? 'post-teaser featured' : 'post-teaser'}">
                    ${(index === 0) ? '<span class=\'featured-flag\'>featured</span>' : ''}
                    <header class="post_hero">
                        <img class="hero_img-thumb" src="${article['_embedded']["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}" />
                        <img class="hero_img-full" src="${article['_embedded']["wp:featuredmedia"][0].source_url}" />
                        <div class="inner">
                            <div class="texture">
                                <h1 class="hero_title hero_title-post" itemprop="headline">
                                    ${article.title.rendered}
                                </h1>
                            </div>
                        </div>
                    </header>
                    <div class="post_data post_data-meta">
                        <ul class="list-hz mob-stack">
                            <li class="date">
                                <i class="material-icons" aria-hidden="true">date_range</i>
                                Wednesday 24th September 2017
                            </li>
                            <li class="author">
                                <a href="<?php echo get_author_posts_url(get_the_author_meta('ID'), get_the_author_meta('user_nicename')); ?>" title="Read all posts from Pigeon Thom">
                                    <i class="material-icons" aria-hidden="true">person</i><cite class="author" itemprop="author">Pigeon Thom</cite>
                                </a>
                            </li>
                            <li class="read_time">
                                <i class="material-icons" aria-hidden="true">timer</i>
                                12 minute read
                            </li>
                            <li class="comments">
                                <i class="material-icons" aria-hidden="true">comment</i>
                                120 comments
                            </li>
                        </ul>
                    </div>
                    <div class="content">
                        <p>${article.excerpt.rendered}</p>
                    </div>
                    <footer>                        
                        <a href="" class="button">Read more</a>
                        <div class="post_data post_data-cats">
                            <strong>Posted in:</strong>&nbsp;
                            Business Analysis, Trending, Web Design
                        </div>
                    </footer>
                </article>
            `
}

let transformHeroImages = () => {
    let heroImage = document.querySelectorAll('.hero_img-full')
    for (var i = 0; i < heroImage.length; i++) {
        let hero = heroImage[i]
        console.log(hero)
        hero.addEventListener('load', () => {
            document.querySelector('.hero_img-thumb').style.opacity = 0
            setTimeout(() => {
                document.querySelector('.hero_img-thumb').outerHTML = ''
            }, 300)

        })
    }
}

document.querySelector('#colophon time').innerText = colophon('2014')