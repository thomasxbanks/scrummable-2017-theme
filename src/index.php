<?php get_header(); ?>
<?php (!is_single()) ? get_template_part('partials-page/page', 'hero') : null; ?>
    <main class="post-container-teaser" data-role="main" aria-label="Main page content">
        <?php /* begin the loop */
        if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <?php if (is_page()) : /* show page contents */ ?>
                    <?php get_template_part('pages/page', 'page'); ?>
                <?php elseif (is_search()) : /* show search results */ ?>
                    <?php get_template_part('pages/page', 'search'); ?>
                <?php else : /* show post contents */ ?>
                    <?php (is_single()) ? custom_post('single') : custom_post('teaser'); ?>
                <?php endif; /* end if page or post */ ?>
            <?php endwhile;/* end the main loop */ ?>
        <?php else : /* show page not found message */ ?>
            <?php get_template_part('pages/page', 'fourohfour'); ?>
        <?php endif; /* end if have_posts */ ?>
    </main>
<?php get_template_part('partials-page/page', 'onward-journeys'); ?>
<?php get_footer(); ?>

