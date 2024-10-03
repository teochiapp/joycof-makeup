<?php get_header(); ?>
<?php get_template_part("template-parts/header/breadcrumb") ?>
<section class="hero-section">
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


<?php get_footer(); ?>

<style>
.hero-section {
    padding: 60px;
}
</style>