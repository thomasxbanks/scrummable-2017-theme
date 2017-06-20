<aside id="sidebar-nav-primary" class="sidebar" data-role="navigation" aria-label="Primary Navigation">
    <nav id="nav-primary" class="closed">
        <ul class="list-blocks">
                <?php //wp_list_pages( array( 'title_li' => '' ) ); ?>
            <?php
            $categories = get_categories(array(
                'orderby' => 'name',
                'order' => 'ASC'
            ));
            // echo "<pre>".print_r($categories, true)."</pre>";
            foreach ($categories as $category) {
                echo "<li><a href='".$category->slug."'>".$category->name."</a></li>";
            } ?>
        </ul>
    </nav>
</aside>
<!--<aside id="sidebar-settings" class="sidebar" data-role="settings" aria-label="Settings">
    <nav id="nav-settings" class="closed">
        <ul class="list-blocks">
            <li><a href="#">Settings</a></li>
            <li><a href="#">Other Settings</a></li>
            <li><a href="#">More Settings</a></li>
        </ul>
    </nav>
</aside>-->
<aside id="sidebar-search" class="sidebar" data-role="search" aria-label="Search">
    <nav id="nav-search" class="closed">
        <ul class="list-blocks">
            <li><?php get_search_form(); ?></li>
        </ul>
    </nav>
</aside>