<?php
$args = array(
    'post_type'      => 'header-and-footer',
    'posts_per_page' => 1,
    'order'         => 'DESC',
);

$query = new WP_Query($args);

if ($query->have_posts()) :
    while ($query->have_posts()) : $query->the_post();

?><div class="slider-social d-none d-lg-flex clearfix">
            <?php if (get_field('facebook_social_link')) : ?>
                <a href="<?php the_field('facebook_social_link'); ?>" target="_blank"
                    class="social-icon si-small si-borderless si-facebook">
                    <i class="icon-facebook"></i>
                    <i class="icon-facebook"></i>
                </a>
            <?php endif; ?>

            <?php if (get_field('tiktok_social_link')) : ?>
                <a href="<?php the_field('tiktok_social_link'); ?>" target="_blank"
                    class="social-icon si-small si-borderless si-twitter">
                    <i class="fa-brands fa-tiktok"></i>
                    <i class="fa-brands fa-tiktok hover-icon-tiktok"></i>
                </a>
            <?php endif; ?>

            <?php if (get_field('instagram_social_link')) : ?>
                <a href="<?php the_field('instagram_social_link'); ?>" target="_blank"
                    class="social-icon si-small si-borderless si-instagram">
                    <i class="icon-instagram"></i>
                    <i class="icon-instagram"></i>
                </a>
            <?php endif; ?>

            <?php if (get_field('youtube_social_link')) : ?>
                <a href="<?php the_field('youtube_social_link'); ?>" target="_blank"
                    class="social-icon si-small si-borderless si-youtube">
                    <i class="icon-youtube"></i>
                    <i class="icon-youtube"></i>
                </a>
            <?php endif; ?>
        </div><?php

            endwhile;
            wp_reset_postdata();
        endif;
                ?>