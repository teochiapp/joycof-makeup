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
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playwrite+CU:wght@100..400&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Gotu&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap" rel="stylesheet">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php
    // Check if it's the front page and assign the appropriate class
    if (is_front_page()) {
        $header_class = "transparent-header";
    ?> <section class="hero-container parallax-one">
        <video autoplay muted loop id="bg-video" class="hidden-desktop">
            <source src="<?php the_field("video_home_url"); ?>" type="video/mp4">
            Tu navegador no soporta video HTML5.
        </video>
        <div class="video-wrap" style="position: absolute; height: 100%; z-index: 1;">
            <div class="video-overlay" style="background: rgba(0,0,0,0.3);"></div>
        </div><?php
                } else {
                    $header_class = "solid-header";
                }
                    ?>


        <header id="header <?php echo $header_class; ?>">
            <div id="header-wrap">
                <div class="container norightpadding clearfix">
                    <div class="hero-content vertical-middle center">
                    </div>
                    <div id="primary-menu-trigger"><i class="icon-reorder"></i></div>


                    <nav id="primary-menu" class="not-dark style-2 center">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary_menu',
                            'menu_class'     => 'one-page-menu',
                            'container'      => false,
                            'fallback_cb'    => false,
                            'items_wrap'     => '<ul id="%1$s" class="%2$s" data-easing="easeInOutExpo" data-speed="1300" data-offset="60">%3$s</ul>',
                            'depth'          => 2,
                            'walker'         => new Dropdown_Walker_Nav_Menu()
                        ));
                        if (wp_is_mobile()) {
                            get_template_part("template-parts/header/social-icons");
                        }
                        ?>
                    </nav>
                </div>
            </div>
            <?php echo do_shortcode("[weglot_switcher]");?>
        </header>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script>
        $(document).ready(function() {
            $('#primary-menu-trigger').click(function() {
                $('#primary-menu').toggleClass('open');
                $(this).toggleClass('open'); // Cambia el ícono a X o hamburguesa

                if ($('#primary-menu').hasClass('open')) {
                    $('body').addClass('no-scroll'); // Desactivar scroll cuando el menú está abierto
                } else {
                    $('body').removeClass('no-scroll'); // Permitir scroll cuando el menú está cerrado
                }
                $('#primary-menu').on('click', '.sf-with-ul', function(e) {
                    e.preventDefault();

                    // Alternar la clase 'open' en el elemento padre al hacer clic en la flecha
                    var parentItem = $(this).closest('.menu-item');
                    var subMenu = parentItem.find('.sub-menu');

                    // Alternar el estado abierto/cerrado del submenú
                    if (parentItem.hasClass('open')) {
                        parentItem.removeClass('open');
                        subMenu.slideUp(); // Animación de cerrar submenú
                    } else {
                        parentItem.addClass('open');
                        subMenu.slideDown(); // Animación de abrir submenú
                    }
                });
            });
        });
        </script>

        <style>
        @media (min-width: 768px) {
            .hero-container {
                background-image: url('<?php the_field("background_image_hero_home"); ?>');
            }
        }
        </style>