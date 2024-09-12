<div id="testimonial" class="section page-section parallax nobottompadding dark clearfix"
    style="background-image: url('<?php the_field("background_image_testimonials") ?>'); background-size: cover;"
    data-bottom-top="background-position:0px 0px;" data-top-bottom="background-position:0px -300px;">
    <div class="container clearfix">
        <div class="heading-block center">
            <img src="<?= get_template_directory_uri() ?>/theme/demos/barber/images/icons/stars.svg" alt="" height="50"
                style="margin-bottom: 20px">
            <h3 class="ls2">Testimonials</h3>
        </div>

        <div class="fslider testimonial testimonial-full nobgcolor noborder noshadow nopadding bottommargin-sm divcenter center clearfix"
            data-arrows="false" style="max-width: 700px">
            <div class="flexslider">
                <div class="slider-wrap">
                    <?php
                    $args = array(
                        'post_type'      => 'testimonial',
                        'posts_per_page' => -1,
                        'order' => 'ASC'
                    );

                    $query = new WP_Query($args);

                    if ($query->have_posts()) :
                        while ($query->have_posts()) : $query->the_post();
                    ?>
                    <div class="slide">
                        <div class="testi-content">
                            <p><?php the_field("content") ?></p>
                            <div class="testi-meta">
                                <?php the_title(); ?>
                                <span class="ls0"><?php the_field("source"); ?></span>
                            </div>
                        </div>
                    </div>
                    <?php
                        endwhile;
                        wp_reset_postdata();
                    endif;
                    ?>
                </div>
            </div>
        </div>
    </div>