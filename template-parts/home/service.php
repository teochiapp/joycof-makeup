<div id="service" class="section page-section primarybg nopadding notopmargin clearfix">
    <div class="row common-height clearfix bottommargin">

        <div class="col-lg-6 center col-padding parallax parallax-one how-we-do primarybg"
            style="background-image: url('<?php the_field("background_image_how"); ?>');"
            data-bottom-top="background-position:0px 100px;" data-top-bottom="background-position:0px -300px;">
            <div class="vertical-middle dark">
                <div class="heading-block center how-we-do-title">
                    <h2 class="nott ls0" style="font-size: 54px"><?php the_field("section_title_how") ?></h2>
                </div>
            </div>
        </div>

        <div class="col-lg-6 secondarybg">
            <div class="row clearfix row-features" style="padding: 20px 0; margin-left: 20px;">
                <div class="col-lg-12 col-padding secondarybg">
                    <div>
                        <div class="row clearfix" style="padding: 20px 0; margin-left: 20px;">
                            <?php if (have_rows('repeater_how_we_do')): ?>
                            <?php while (have_rows('repeater_how_we_do')): the_row(); ?>
                            <div class="col-lg-10 col-md-8 bottommargin">
                                <div class="feature-box fbox-plain">
                                    <div class="fbox-icon">
                                        <?php
                                                    $icon = get_sub_field('icon_repeater_how');
                                                    if (!empty($icon)): ?>
                                        <img src="<?= esc_url($icon['url']); ?>" alt="<?= esc_attr($icon['alt']); ?>" />
                                        <?php endif; ?>
                                    </div>
                                    <h3><?php the_sub_field('title_repeater_how'); ?></h3>
                                    <p><?php the_sub_field('description_repeater_how'); ?></p>
                                </div>
                            </div>
                            <?php endwhile; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container topmargin-lg clearfix">
    <div class="row">
        <?php if (have_rows('repeater_features')): ?>
        <?php while (have_rows('repeater_features')): the_row(); ?>
        <div class="col-md-4 center bottommargin-lg">
            <div class="feature-box media-box">
                <div class="fbox-media" style="padding: 0 40px;">
                    <?php
                                $image = get_sub_field('image_repeater_features');
                                $link = get_sub_field('link_repeater_features');
                                if (!empty($image)): ?>
                    <a>
                        <img class=" rounded-circle img-thumbnail" src="<?= esc_url($image['url']); ?>"
                            alt="<?= esc_attr($image['alt']); ?>">
                        <div class="img-thumbnail-overlay"></div>
                        <span><?php the_sub_field('title_repeater_features'); ?></span>
                        <?php if (get_sub_field('discount')): ?>
                        <?php endif; ?>
                    </a>
                    <?php endif; ?>
                </div>
                <div class="fbox-desc">
                    <h3><span
                            class="ls0 subtitle font-primary"><?= esc_html(get_sub_field('subtitle_repeater_features')); ?></span>
                    </h3>
                    <p><?= get_sub_field('description_repeater_features'); ?></p>
                </div>
                <!-- <a href="<?= esc_url($link); ?>" class="more-link uppercase ls1 t700"
                        style="margin: 20px 0 0 0; font-style: normal;">Read More</a> -->
            </div>
        </div>
        <?php endwhile; ?>
        <?php endif; ?>
    </div>
</div>
</div>

<style>
@media (max-width: 992px) {
    .how-we-do {
        background-image: url('<?php the_field("background_image_how_mobile"); ?>') !important;
    }
}
</style>