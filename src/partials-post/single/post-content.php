<?php
// Variables
$the_category = get_the_category_list();
$the_tags = get_the_tag_list();
?>

<div class="content">
    <?php get_template_part('partials-post/post', 'meta'); ?>
    <?php if (($the_category) || ($the_tags)) { ?>
        <div class="post_data post_data-cats">
            <?php ($the_category) ? get_template_part('partials-post/post', 'cats') : null; ?>
            <?php ($the_tags) ? get_template_part('partials-post/post', 'tags') : null; ?>
        </div>
    <?php } ?>
    <?php echo apply_filters('the_content', get_the_content()); ?>
</div>