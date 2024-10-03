<div id="about" class="section nomargin primarybg page-section" style="padding: 150px 0">
    <div class="container clearfix">
        <div class="row clearfix row-col-about">
            <div class="col-md-3 col-6 d-md-block hidden-mobile">
                <img src=" <?php the_field("left_image_about") ?>" alt="" class="images_about">
            </div>

            <div class="col-md-6 col-12 center about-col-home" style="padding: 0 50px;">
                <img src="<?= get_template_directory_uri() ?>/theme/demos/barber/images/icons/cs.svg" alt="" height="60"
                    style="margin-bottom: 20px">
                <div class="heading-block bottommargin-sm">
                    <h2><?php the_field("title_about"); ?></h2>
                </div>
                <div class="col-12 hidden-desktop" style="margin-bottom: 20px">
                    <img src="<?php the_field("mobile_about_image") ?>" alt="" class="images_about">
                </div>
                <p><?php the_field("content_about"); ?></p>
                <img src="<?php the_field("firm_about") ?>" alt="" width="200">
            </div>
            <div class="col-md-3 col-6 d-none d-md-block">
                <video autoplay muted loop id="bg-video" class="">
                    <source src="<?php the_field("video_about_url") ?>" type="video/mp4">
                    Tu navegador no soporta video HTML5.
                </video>
            </div>

        </div>
    </div>
</div>

<style>
@media (max-width: 768px) {
    .images_about {
        height: 220px;
        width: 220px;
        padding: 10px;
        margin: 10px 0;
    }
}
</style>