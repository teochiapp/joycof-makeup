<?php get_header(); ?>
<?php get_template_part("template-parts/header/breadcrumb") ?>
<section class="instagram-section primarybg">
    <div class="container">
        <?php echo do_shortcode("[instagram-feed feed=1]"); ?>
    </div>
</section>

<?php get_footer(); ?>