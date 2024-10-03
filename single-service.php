<?php get_header(); ?>
<?php get_template_part("template-parts/header/breadcrumb") ?>
<section class="services-details-area primarybg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8">
                <div class="services-details-wrap">
                    <div class="services-details-thumb">
                        <img src="<?php the_field("image_single_service"); ?>" alt="">
                    </div>
                    <div class="services-details-content">

                        <h2 class="title title-heading"> <?php the_field("subtitle_service"); ?> </h2>
                        <div class="price-heading">
                            <p class="category"> <?php the_field("category_service"); ?></p>
                            <p class="price"> €<?php the_field("price_service"); ?></p>
                        </div>
                        <!-- Add extra content if the title is 'Hairstyles' -->
                        <?php if (get_the_title() == "Hairstyles") : ?>
                        <div class="extra-content">
                            <?php
                                $args = array(
                                    'post_type'      => 'service',
                                    'posts_per_page' => -1,
                                    'order'          => 'ASC',
                                );

                                $services_query = new WP_Query($args);

                                if ($services_query->have_posts()) :
                                    while ($services_query->have_posts()) : $services_query->the_post();
                                ?><div class="row" style="padding-bottom: 10px;">
                                <?php if (have_rows('repeater_hairstyles')): ?>
                                <?php while (have_rows('repeater_hairstyles')): the_row(); ?>
                                <div class=" col-lg-hairstyles" style=" padding: 10px 10px 0 10px;">

                                    <img class="rounded-circle img-hairstyles-single"
                                        src="<?= esc_url(get_sub_field('image_repeater_hairstyles')); ?>">
                                    <span
                                        class="hairstyle-title"><?= get_sub_field('title_repeater_hairstyles'); ?></span>

                                </div>
                                <?php endwhile; ?>
                                <?php endif; ?>
                            </div>
                            <?php

                                    endwhile;
                                    wp_reset_postdata();
                                endif;
                                ?>
                            <!-- Add more custom content for hairstyles here -->
                        </div>
                        <?php endif; ?>
                        <p class="content"> <?php the_field("description_service"); ?></p>
                        <p class="content"> <?php the_field("warning_text_services"); ?></p>
                        <?php get_template_part("template-parts/home/video-gallery"); ?>

                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6">
                <aside class="services-sidebar">
                    <div class="services-widget">
                        <h4 class="widget-title fs-20">Other Services</h4>
                        <div class="our-services-list">
                            <ul class="list-wrap">
                                <?php
                                $args = array(
                                    'post_type'      => 'service',
                                    'posts_per_page' => -1,
                                    'order'          => 'ASC',
                                    'post__not_in'   => array(get_the_ID()),
                                );

                                $services_query = new WP_Query($args);

                                if ($services_query->have_posts()) :
                                    while ($services_query->have_posts()) : $services_query->the_post();
                                ?>
                                <li><a href="<?php the_permalink();  ?>"><?php the_title(); ?><i
                                            class="fas fa-arrow-right"></i></a></li>

                                <?php
                                    endwhile;
                                    wp_reset_postdata();
                                endif;
                                ?>
                            </ul>
                        </div>
                    </div>
                    <div class="services-widget widget-bg" ;
                        style="background-image: url('<?php echo the_post_thumbnail_url() ?>');">
                        <h4 class="widget-title contact fs-20">Make Your Appointment</h4>
                        <?php echo do_shortcode("[wpforms id='146' title='false']") ?>
                    </div>
                </aside>
            </div>
        </div>

    </div>
</section>
<?php get_footer(); ?>

<style>
@media (max-width: 768px) {
    .rounded-circle {
        border-radius: 0% !important;

    }
}

#bg-video {
    height: 420px;
    z-index: 20;
    position: relative;
}

.single-section-video {
    padding: 30px 0px;
}
</style>