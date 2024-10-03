<?php get_header(); ?>
<?php get_template_part("template-parts/header/breadcrumb") ?>
<section class="contact-area pt-30 pb-30 primarybg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="contact-form-wrap" style="background: white;">
                <h2 class="title" style="font-size:16px">Basic Information:</h2>

                <?php echo do_shortcode("[wpforms id='290' title='false']"); ?>
            </div>
        </div>
    </div>
</section>
<?php get_footer(); ?>