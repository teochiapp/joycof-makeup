<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <title><?php wp_title('|', true, 'right');
            bloginfo('name'); ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link href="http://fonts.googleapis.com/css?family=PT+Sans+Caption:400,700|PT+Sans:400,700|PT+Serif:400,400i"
        rel="stylesheet" type="text/css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playwrite+CU:wght@100..400&display=swap"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Gotu&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <section class="hero-container"
        style="background: url('http://localhost/joycofmakeup/wp-content/uploads/2024/09/mvv_5524-bweb.jpeg') no-repeat center center; background-size: cover; height: 100vh;">
        <div class="video-wrap" style="position: absolute; height: 100%; z-index: 1;">
            <div class="video-overlay" style="background: rgba(0,0,0,0.3);"></div>
        </div>
        <header id="header transparent-header">
            <div id="header-wrap">
                <div class="container norightpadding clearfix">
                    <div class="hero-content vertical-middle center">
                    </div>
                    <div id="primary-menu-trigger"><i class="icon-reorder"></i></div>

                    <!-- Navigation Menu -->
                    <nav id="primary-menu" class="not-dark style-2 center">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary_menu',
                            'menu_class'     => 'one-page-menu',
                            'container'      => false,
                            'fallback_cb'    => false,
                            'items_wrap'     => '<ul id="%1$s" class="%2$s" data-easing="easeInOutExpo" data-speed="1300" data-offset="60">%3$s</ul>',
                            'depth'          => 2,
                            'walker'         => new Dropdown_Walker_Nav_Menu() // Agregamos el walker personalizado
                        ));
                        
                        ?>

                    </nav>

                </div>
            </div>
        </header>