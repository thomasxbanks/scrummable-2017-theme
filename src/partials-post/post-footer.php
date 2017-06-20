<?php
// Variables
$the_category = get_the_category_list();
$the_tags = get_the_tag_list();
?>
    <footer id="post_footer-<?php echo get_the_ID(); ?>" class="post_footer" data-role="post footer" aria-label="Post Footer">
        <a class="button" href="<?php the_permalink(); ?>" title="Read more of &ldquo;<?php the_title(); ?>&rdquo;">
            Read more
        </a>
        <?php if (($the_category) || ($the_tags)) { ?>
        <div class="post_data post_data-cats">
            <?php ($the_category) ? get_template_part('partials-post/post', 'cats') : null; ?>
            <?php ($the_tags) ? get_template_part('partials-post/post', 'tags') : null; ?>
        </div>
        <?php } ?>
    </footer>