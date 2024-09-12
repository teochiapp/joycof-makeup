<div id="price" class="section page-section parallax nobottompadding nobottommargin dark"
    style="background-image: url('<?= get_template_directory_uri() ?>/theme/demos/barber/images/sections/3.jpg'); background-size: cover; height: 600px"
    data-bottom-top="background-position:0px 0px;" data-top-bottom="background-position:0px -300px;">
</div>
<div class="container bottommargin dark clearfix" style="margin-top: -500px">
    <div class="heading-block bottommargin-lg center clearfix">
        <img src="<?= get_template_directory_uri() ?>/theme/demos/barber/images/icons/wallet-white.svg" alt=""
            height="40" style="margin-bottom: 20px">
        <h2><?php the_field("pricing_title"); ?></h2>
    </div>

    <div class="row dark col-padding clearfix" style="background-color: #121212">
        <?php if (have_rows('repeater_prices')): ?>
        <?php while (have_rows('repeater_prices')): the_row(); ?>
        <div class="col-lg-6 price-wrap">
            <div class="price-header">
                <div class="price-name">
                    <a href="<?= esc_url(get_sub_field('service_link')); ?>" class="color">
                        <?= esc_html(get_sub_field('title_repeater_pricing')); ?>
                    </a>
                </div>
                <div class="price-dots">
                    <span class="separator-dots"></span>
                </div>
                <div class="price-price">
                    €<?= esc_html(get_sub_field('price_repeater_pricing')); ?>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <?php if (have_rows('repeater_hairstyles')): ?>
                    <?php while (have_rows('repeater_hairstyles')): the_row(); ?>
                    <div class="col-lg-hairstyles" style=" padding: 10px 10px 0 10px;">

                        <img class="rounded-circle img-hairstyles"
                            src="<?= esc_url(get_sub_field('image_repeater_hairstyles')); ?>">
                        <div class="img-thumbnail-overlay"></div>
                        <span class="hairstyle-title"><?= get_sub_field('title_repeater_hairstyles'); ?></span>

                    </div>
                    <?php endwhile; ?>
                    <?php endif; ?>
                </div>
            </div>
            <p class="price-desc">
                <?= get_sub_field('description_repeater_pricing'); ?>
            </p>
        </div>
        <?php endwhile; ?>
        <?php endif; ?>
        <div class="col-12 price-warning">
            <p><?php the_field("warning_prices"); ?></p>
        </div>
        <div class="col-12 center">
            <a href="#" class="button button-large button-color d-none d-lg-block">
                <i class="icon-calendar2"></i> Make An Appointment
            </a>
        </div>
    </div>
</div>