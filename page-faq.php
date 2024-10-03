<?php get_header(); ?>
<?php get_template_part("template-parts/header/breadcrumb") ?>
<section class="instagram-section primarybg">
    <div class="container">
        <section>
            <div class="">
                <?php if (have_rows('repeater_faq')) : ?>
                <ul class="faq-list">
                    <?php while (have_rows('repeater_faq')) : the_row(); ?>
                    <li>
                        <h4 class="faq-heading"><?php the_sub_field('question'); ?></h4>
                        <p class="read faq-text">
                            <?php echo get_sub_field('answer'); ?>
                        </p>
                    </li>
                    <?php endwhile; ?>
                </ul>
                <?php endif; ?>
            </div>
        </section>
    </div>
</section>

<section class="contact-faq secondarybg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <h3 class="faq-contact-title"><?php the_field("title_contact_faq"); ?></h3>
                <p class="faq-contact-subtitle"><?php the_field("subtitle_contact_faq"); ?></p>
                <p class="faq-contact-description"><?php the_field("description_contact_faq"); ?></p>

                <?php 
                $contact_link = get_field('button_link');
                if ($contact_link):
                    $link_url = $contact_link['url'];
                    $link_title = $contact_link['title'];
                    $link_target = $contact_link['target'] ? $contact_link['target'] : '_self';
                ?>
                <a href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"
                    class="button faq-button">
                    <?php echo esc_html($link_title); ?>
                </a>
                <?php endif; ?>
            </div>

            <div class="col-lg-4 col-img-faq">
                <img class="img-faq" src="<?php the_field("image_faq"); ?>" alt="">
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>

<script>
jQuery(document).ready(function($) {
    $('.faq-heading').click(function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del clic
        $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
    });
});
</script>