<?php wp_footer(); ?>
<?php
$args = array(
    'post_type'      => 'header-and-footer',
    'posts_per_page' => 1,
    'order' => "DESC",
);

$query = new WP_Query($args);

if ($query->have_posts()) :
    while ($query->have_posts()) : $query->the_post();
?>
<footer id="footer" class="dark" style="background-color: #121212; padding: 60px 0">
    <div class="container clearfix">

        <div class="footer-widgets-wrap center clearfix">
            <img src="<?= wp_get_attachment_image_src(get_theme_mod('custom_logo'), 'full')[0] ?>" width="200" alt=""
                class="footer_logo">
            <div class="clearfix">
                <?php if (get_field("instagram_social_link")): ?>
                <a href="<?php the_field("instagram_social_link") ?>" target="_blank"
                    class="social-icon si-small si-rounded si-borderless inline-block si-instagram">
                    <i class="icon-instagram"></i>
                    <i class="icon-instagram"></i>
                </a>
                <?php endif; ?>

                <?php if (get_field("facebook_social_link")): ?>
                <a href="<?php the_field("facebook_social_link") ?>" target="_blank"
                    class="social-icon si-small si-rounded si-borderless inline-block si-facebook">
                    <i class="icon-facebook"></i>
                    <i class="icon-facebook"></i>
                </a>
                <?php endif; ?>

                <?php if (get_field("tiktok_social_link")): ?>
                <a href="<?php the_field("tiktok_social_link") ?>" target="_blank"
                    class="social-icon si-small si-rounded si-borderless inline-block si-twitter">
                    <i class="fa-brands fa-tiktok footer-tiktok-icon"></i>
                    <i class="fa-brands fa-tiktok last-footer-tiktok-icon"></i>
                </a>
                <?php endif; ?>
                
                <?php //if (get_field("email_social_link")): ?>
                <a href="<?php the_field("tiktok_social_link") ?>" target="_blank"
                    class="social-icon si-small si-rounded si-borderless inline-block si-email">
                    <i class="icon-email"></i>
                    <i class="icon-email"></i>
                </a>
                <?php //endif; ?>
            </div>

            <div class="uppercase ls3" style="color: #333; margin-top: 10px">
                <?php echo date("Y"); ?> - <?php the_field("footer_text") ?>
            </div>
        </div>
    </div>
</footer>

<?php
    endwhile;
    wp_reset_postdata();
endif;
?>

<div id="gotoTop" class="icon-angle-up"></div>

</body>

</html>