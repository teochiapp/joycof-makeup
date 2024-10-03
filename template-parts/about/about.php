<div id="about" class="section nomargin primarybg page-section" style="padding: 150px 0">
    <div class=" container clearfix">
        <div class="row clearfix row-col-about">
            <div class="col-md-3 col-6 d-md-block image-col-about">
                <img src="<?php the_field("left_image_about_page") ?>" alt="" class="images_about">
            </div>
            <div class="col-md-6 col-12 center" style="padding: 0 50px;">
                <img src="<?= get_template_directory_uri() ?>/theme/demos/barber/images/icons/cs.svg" alt="" height="60"
                    style="margin-bottom: 20px">
                <div class="heading-block bottommargin-sm">
                    <h2><?php the_field("title_about_page"); ?></h2>
                </div>
                <p><?php the_field("content_about_page"); ?></p>
                <img src="<?php the_field("firm_about_page") ?>" alt="" width="200">
            </div>
            <div class="col-md-3 col-6 d-md-block d-none image-col-about">
                <img src="<?php the_field("right_image_about_page") ?>" alt="" class="images_about">
            </div>
        </div>
    </div>
</div>

<div id="parallax-world-of-ugg">
    <section>
        <div class="parallax-one parallax"
            style="padding: 50px 0; background-image: url('<?php echo the_field("background_image_header") ?>')">
            <h2><?php the_field("background_title_header") ?></h2>
        </div>
    </section>
</div>