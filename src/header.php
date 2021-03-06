<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" data-theme="light">
<head>
	<title>
		<?php wp_title(' - ', true, 'right'); ?>
		<?php bloginfo('name'); ?>
	</title>
	<?php get_template_part('partials-page/page', 'head'); ?>
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>"/>
	<!--Uncomment this to use a favicon.ico in the theme directory: -->
	<!--<link rel="SHORTCUT ICON" href="<?php bloginfo('template_directory'); ?>/favicon.ico"/>-->
	<?php if (is_singular()) wp_enqueue_script('comment-reply'); ?>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>">
<?php get_template_part('partials-page/page', 'masthead'); ?>