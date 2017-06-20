<?php
$thumb_id = get_post_thumbnail_id(get_the_ID());
$alt_text = get_post_meta($thumb_id, '_wp_attachment_image_alt', true);
?>

    <header class="post_hero">
        <?php if (has_post_thumbnail()) { ?>
                <img class="hero_img-thumb" src="<?php the_post_thumbnail_url('thumb'); ?>" alt="<?php echo (count($alt_text)) ? $alt_text : get_the_title(); ?>">
                <img class="hero_img-full" src="<?php the_post_thumbnail_url('large'); ?>" alt="<?php echo (count($alt_text)) ? $alt_text : get_the_title(); ?>"
                    data-role="hero-image" aria-label="Post Main Image">
                <?php } else { ?>
                <img class="hero_img-thumb" src="<?php echo get_template_directory_uri() . "/img/scrummable-hero-thumb.jpg "; ?>" alt="Scrummable">
                <img class="hero_img-full" src="<?php echo get_template_directory_uri() . "/img/scrummable-hero-thumb.jpg "; ?>" alt="Scrummable"
                    data-role="hero-image" aria-label="Post Main Image">
                <?php } ?>
        
            <div class="inner">
                <div class="texture">
                    <h1 class="hero_title hero_title-post" itemprop="headline">
                        <?php echo (!is_front_page()) ? wp_title('', true, 'right') : bloginfo('name'); ?>
                        <?php echo ($cat_desc = category_description()) ? "<p>" . $cat_desc . "</p>" : null; ?>
                        <?php echo ($auth_bio = nl2br(get_the_author_meta('description'))) ? "<p>" . $auth_bio . "</p>" : null; ?>
                        <?php echo ($twitter_url = get_the_author_meta('twitter')) ? "<p><a href='http://twitter.com/" . $twitter_url . "' title='Follow ".get_the_author_meta("display_name")." on Twitter'><i class='fa fa-twitter'></i></a></p>" : null; ?>
                    </h1>
                </div>
            </div>
    </header>