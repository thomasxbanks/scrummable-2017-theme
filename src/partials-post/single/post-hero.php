<?php
$thumb_id = get_post_thumbnail_id(get_the_ID());
$alt_text = get_post_meta($thumb_id, '_wp_attachment_image_alt', true);
?>

    <header class="post_hero">
        <?php if (has_post_thumbnail()) : ?>
        <img class="hero_img-thumb" src="<?php the_post_thumbnail_url('thumb'); ?>" alt="<?php echo (count($alt_text)) ? $alt_text : get_the_title(); ?>">
        <img class="hero_img-full" src="<?php the_post_thumbnail_url('large'); ?>" alt="<?php echo (count($alt_text)) ? $alt_text : get_the_title(); ?>"
            data-role="hero-image" aria-label="Post Main Image">
        <?php endif; ?>
        <div class="inner">
            <div class="texture">
                <h1 class="hero_title hero_title-post" itemprop="headline">
                    <?php echo get_the_title(); ?>
                </h1>
            </div>
        </div>
    </header>