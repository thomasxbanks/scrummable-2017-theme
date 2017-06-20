<?php
function custom_post($variant)
{ ?>
    <?php
    $post_classes = "post";
    $post_classes .= " post-" . $variant;
    (is_sticky()) ? $post_classes .= " featured" : null;
    ?>

    <?php if ($variant == 'single') get_template_part('partials-post/' . $variant . '/post', 'hero'); ?>
    <article id="post-<?php the_ID(); ?>" class="<?php echo $post_classes; ?>" itemscope itemtype="https://schema.org/Blog">
        <?php if ($variant != 'single') get_template_part('partials-post/' . $variant . '/post', 'hero'); ?>
        <?php get_template_part('partials-post/' . $variant . '/post', 'content'); ?>
        <?php if ($variant != 'single') {
            get_template_part('partials-post/post', 'footer');
        } ?>
        <?php if (($variant == 'single') && (comments_open())) comments_template(); ?>
    </article>
<?php }

;