<div id="contact" class="row common-height page-section notoppadding clearfix">
    <div id="popular-dest-map" class="col-lg-6 col-padding gmap d-none d-md-block"
        style="background: url('<?php the_field("backgroung_image_contact_home") ?>')">
    </div>
    <div class="col-lg-6 col-padding padding-contact-form" style="background-color: #F9F9F9;">
        <div class="max-height">
            <h3 class="uppercase"><?php the_field("title_contact_home"); ?></h3>
            <div class="row topmargin-sm clearfix" style="font-size: 16px; line-height: 1.7;">
                <div class="col-lg-6">
                    <address style="line-height: 1.7;">
                        <?php the_field("description_contact_home"); ?>
                    </address>
                </div>
                <div class="col-lg-6">
                    <abbr title="Phone Number"><strong>Phone:</strong></abbr> (91) 8547 632521<br>
                    <abbr title="Email Address"><strong>Email:</strong></abbr> <a
                        href="<?php the_field("email_contact_home"); ?>" class="__cf_email__"
                        data-cfemail="6b02050d042b080a051d0a1845080406"><?php the_field("email_contact_home"); ?></a>
                </div>
            </div>
            <div class="contact-widget">
                <div class="contact-form-result">
                    <?php echo do_shortcode(get_field("contact_form_home")); ?>
                </div>
            </div>
        </div>
    </div>
</div>