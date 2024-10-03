    <div class="hero-background">
        <!-- Logo -->
        <?php get_template_part("template-parts/header/social-icons") ?>

        <div id="logo" class="">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="standard-logo">
                <img src="<?php echo wp_get_attachment_image_src(get_theme_mod('custom_logo'), 'full')[0]; ?>"
                    alt="<?php bloginfo('name'); ?> Logo">
            </a>
            <a href="<?php echo esc_url(home_url('/')); ?>" class="retina-logo">
                <img src="<?php echo wp_get_attachment_image_src(get_theme_mod('custom_logo'), 'full')[0]; ?>"
                    alt="<?php bloginfo('name'); ?> Logo">
            </a>
        </div>
        <div id="hero-description" class="playwrite-font">
            <p><?php the_field("hero_subtitle"); ?></p>
        </div>
        <div id="hero-text" class="playwrite-font">
            <p><?php the_field("hero_description"); ?></p>
        </div>

    </div>
    </section>