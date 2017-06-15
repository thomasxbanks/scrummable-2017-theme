<?php echo (is_sticky()) ? "<span class='flag'>Featured Post</span>" : null; ?>
<?php get_template_part('partials-post/post', 'meta'); ?>
<div class="content">    
    <?php echo (has_excerpt()) ? the_excerpt() : paragraph_excerpt(get_the_content()); ?>
</div>
<footer>
    <a class="button" href="<?php the_permalink(); ?>" title="Read more of &ldquo;<?php the_title(); ?>&rdquo;">
        Read more
    </a>
</footer>