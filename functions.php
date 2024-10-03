<?php

function joycofmakeup_setup()
{
    add_theme_support('post-thumbnails');

    $logo_defaults = [
        'header-text' => ['site-title', 'site-description'],
    ];
    add_theme_support('custom-logo', $logo_defaults);
    require_once get_template_directory() . '/includes/class-wp-bootstrap-navwalker.php';
    //TITULOS
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'joycofmakeup_setup');


if ( ! function_exists( 'mytheme_register_nav_menu' ) ) {

	function mytheme_register_nav_menu(){
		register_nav_menus( array(
	    	'primary_menu' => __( 'Main menu', 'text_domain' ),
		) );
	}
	add_action( 'after_setup_theme', 'mytheme_register_nav_menu', 0 );
}

class Dropdown_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;

        // Add dropdown indicator if the item has children
        if (in_array('menu-item-has-children', $classes)) {
            $item->title .= ' <span class="dropdown-arrow">▼</span>';
        }

        parent::start_el($output, $item, $depth, $args, $id);
    }
}


function joycof_scripts_styles()
{
// ARCHIVOS CSS
wp_enqueue_style('style', get_template_directory_uri() . "/theme/style.css");
wp_enqueue_style('responsive', get_template_directory_uri() . "/theme/css/responsive.css");
wp_enqueue_style('barber', get_template_directory_uri() . "/theme/demos/barber.css");
wp_enqueue_style('animate', get_template_directory_uri() . "/theme/css/animate.css");
wp_enqueue_style('dark', get_template_directory_uri() . "/theme/css/dark.css");
wp_enqueue_style('bootstrap', get_template_directory_uri() . "/theme/css/bootstrap.css");
wp_enqueue_style('font-icons', get_template_directory_uri() . "/theme/css/font-icons.css");
wp_enqueue_style('magnific-popup', get_template_directory_uri() . "/theme/css/magnific-popup.css");
wp_enqueue_style('one-page', get_template_directory_uri() . "/theme/one-page/css/et-line.css");
wp_enqueue_style('responsive', get_template_directory_uri() . "/theme/one-page/css/responsive.css");
wp_enqueue_style('demo-fonts', get_template_directory_uri() . "/theme/demos/barber/css/fonts.css");
wp_enqueue_style('demo-barber', get_template_directory_uri() . "/theme/demos/barber/barber.css");
wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
wp_enqueue_style('swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css');

//ARCHIVOS JS
wp_enqueue_script('jquery', get_template_directory_uri() . "/theme/js/jquery.js", ["jquery"], "", true);
wp_enqueue_script('functions', get_template_directory_uri() . "/theme/js/functions.js");
wp_enqueue_script('parallax-js', get_template_directory_uri() . '/theme/js/parallax.min.js', array('jquery'), null, true);
wp_enqueue_script('gmap', get_template_directory_uri() . "/theme/js/jquery.gmap.js");
wp_enqueue_script('plugins', get_template_directory_uri() . "/theme/js/plugins.js");
wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js', array(), false, true);

}
add_action('wp_enqueue_scripts', 'joycof_scripts_styles');