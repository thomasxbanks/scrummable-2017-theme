<div class="post_data post_data-meta">
    <ul class="list-hz mob-stack">
        <li class="date">
            <i class="material-icons" aria-hidden="true">date_range</i>
            <?php post_date(); ?>
        </li>
        <li class="author">
            <i class="material-icons" aria-hidden="true">person</i>
            <a href="<?php echo get_author_posts_url(get_the_author_meta('ID'), get_the_author_meta('user_nicename')); ?>" title="Read all posts from <?php echo the_author_meta('display_name'); ?>">
                <cite class="author" itemprop="author"><?php echo the_author_meta('display_name'); ?></cite>
            </a>
        </li>
        <li class="read_time">
            <i class="material-icons" aria-hidden="true">timer</i>
            <?php
            $word_count = str_word_count(get_the_content(), 1);
            $time_to_read = round((count($word_count) / 200));
            echo $time_to_read . ' minute read';
            ?>
        </li>
        <?php if (comments_open()) { ?>
            <li class="comments">
                <i class="material-icons" aria-hidden="true">comment</i>
                <?php comments_number('No comments', 'One comment', '% comments'); ?>
            </li>
            <?php
            $comment_count = get_comment_count($post->ID);
            if ($comment_count['approved'] > 0) {
                (is_single()) ? "<li class='read_comments'><i class=\"material-icons\" aria-hidden=\"true\">book</i><a href=\"#comments\" title='Read the comments'>Read comments</a></li>" : null;
            } else {
                (is_single()) ? "<li class='write_comments'><i class=\"material-icons\" aria-hidden=\"true\">edit</i><a href=\"#comments\" title='Leave a comment'>Leave a comment</a></li>" : null;
            } ?>
        <?php } ?>
    </ul>
</div>