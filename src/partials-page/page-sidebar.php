<aside id="sidebar-nav-primary" class="sidebar" data-role="navigation" aria-label="Primary Navigation" data-state="not-active">
    <nav id="nav-primary">
        <ul class="list-block">
            <?php
            $categories = get_categories(array(
                'orderby' => 'name',
                'order' => 'ASC'
            ));
            foreach ($categories as $category) {
                echo "<li><a href='/category/".$category->slug."'>".$category->name."</a></li>";
            } ?>
        </ul>
    </nav>
</aside>
<aside id="sidebar-search" class="sidebar" data-role="search" aria-label="Search" data-state="not-active">
    <nav id="nav-search">
        <ul class="list-block">
            <li><?php get_search_form(); ?></li>
        </ul>
    </nav>
</aside>