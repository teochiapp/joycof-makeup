<div id="price" class="section page-section parallax-one parallax nobottompadding nobottommargin dark"
    style="background-image: url('<?= the_field("background_prices_home") ?>'); background-size: cover; height: 600px"
    data-bottom-top="background-position:0px 0px;" data-top-bottom="background-position:0px -300px;">
</div>
<div class="container bottommargin clearfix" style="margin-top: -500px">
    <div class="heading-block bottommargin-lg center clearfix">
        <img src="<?= get_template_directory_uri() ?>/theme/demos/barber/images/icons/wallet-white.svg" alt=""
            height="40" style="margin-bottom: 20px">
        <h2 style="color: white;"><?php the_field("title_prices_home"); ?></h2>
    </div>
    <section class="hero-section" style="background: none;">
        <div class="card-grid">
            <?php
            $args = array(
                'post_type'      => 'service',
                'posts_per_page' => -1,
                'order'          => 'ASC',
            );

            $services_query = new WP_Query($args);

            if ($services_query->have_posts()) :
                while ($services_query->have_posts()) : $services_query->the_post();
            ?>
            <a class="card-service" href="<?= get_permalink(); ?>">
                <div class="card__background" style="background-image: url(<?php echo the_post_thumbnail_url(); ?>)">
                </div>
                <div class="card__content">
                    <p class="card__category"><?= the_field('category_service') ?></p>
                    <h3 class="card__heading"><?= the_title(); ?></h3>
                    <p class="card__description"> <?php the_field("subtitle_service"); ?> </p>

                    <p class="card__link">View More</p>
                </div>

            </a>
            <?php
                endwhile;
                wp_reset_postdata();
            endif;
            ?>
        </div>
    </section>


</div>