<?php

/* sidebar */
if (function_exists('register_sidebar'))
    register_sidebar(array('description' => 'Left Sidebar'));

/* nav menus */
if (function_exists('register_nav_menu')) {
    register_nav_menu('header_nav', __('Header Navigation Menu'));
    register_nav_menu('footer_nav', __('Footer Navigation Menu'));
}

/* automatic feed links */
add_theme_support('automatic-feed-links');
add_theme_support('post-thumbnails', array('post', 'page'));
get_template_part('php/functions', 'custom');
get_template_part('php/functions', 'post');
get_template_part('php/functions', 'admin');
// get_template_part('php/functions', 'editor-style');


function scrummable_scripts()
{
    wp_enqueue_style('scrummable-fa-style', '//fonts.googleapis.com/icon?family=Material+Icons');
    wp_enqueue_style('scrummable-style', get_stylesheet_uri());

    wp_enqueue_script('jQuery', '//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js');
    wp_enqueue_script('axios', '//cdnjs.cloudflare.com/ajax/libs/axios/0.16.2/axios.min.js');
    wp_enqueue_script('scrummable-js', get_template_directory_uri() . '/js/app.js', array(), '20120206', true);

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}

add_action('wp_enqueue_scripts', 'scrummable_scripts');