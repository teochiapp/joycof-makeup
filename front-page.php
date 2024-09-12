<?php get_header(); ?>

<body class="stretched"
    data-loader-html="<img class='infinite animated pulse' src='<?= get_template_directory_uri() ?>/theme/demos/barber/images/slider-logo.svg' width='300'>">

    <div id="" class="">

        <?php get_template_part("template-parts/home/hero"); ?>

        <section id="content" style="border-top: 8px solid var(--secondary-color)">
            <div class="content-wrap nopadding">

                <?php get_template_part("template-parts/home/about"); ?>
                <?php get_template_part("template-parts/home/service"); ?>
                <?php get_template_part("template-parts/home/price"); ?>
                <?php get_template_part("template-parts/home/testimonial"); ?>
                <?php get_template_part("template-parts/home/clients"); ?>
                <?php get_template_part("template-parts/home/contact"); ?>
                <?php get_template_part("template-parts/home/promotion"); ?>
        </section>



        <?php get_footer(); ?>