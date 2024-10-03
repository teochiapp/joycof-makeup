<?php get_header(); ?>
<?php get_template_part("template-parts/header/breadcrumb") ?></div>
<section class="contact-area pt-30 pb-30 primarybg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-10">
                <div class="contact-form-wrap" style="background: white;">
                    <h2 class="title"><?php the_field("title_contact") ?></h2>
                    <p class="mb-0 mt-10"><?php the_field("description_contact") ?></p>
                    <?php echo do_shortcode(get_field("form_id_contact")); ?>

                </div>
            </div>
            <div class="col-xl-6 col-lg-10">
                <div class="contact-info-wrap">
                    <h2 class="title"><?php the_field("title_alternative_contact") ?></h2>
                    <p><?php the_field("description_alternative_contact") ?></p>
                    <ul class="list-wrap" style="align-items: stretch;">
                        <li>
                            <div class="contact-info-item">
                                <a class="social-button mail-alter" target="_blank"
                                    href="mailto:<?php the_field("email_contact")?>">
                                    <i class="fas fa-envelope"></i>
                                </a>
                                <div class="content">
                                    <a target="_blank"
                                        href="mailto:<?php the_field("email_contact"); ?>"><?php the_field("email_contact") ?></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>


                <!-- contact-map -->
                <div class="contact-img-wrap">
                    <div id="contact-img" data-background="<?php the_field("image_contact");?>"
                        style="object-fit: cover; width: 100%; background-image: url(<?php the_field("image_contact"); ?>);">
                    </div>
                </div>
                <!-- contact-map-end -->

            </div>


        </div>
    </div>
</section>
<?php get_footer(); ?>