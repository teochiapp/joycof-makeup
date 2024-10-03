<div id="oc-clients" class="owl-carousel owl-carousel-full image-carousel carousel-widget topmargin-lg nobottommargin"
    data-margin="0" data-nav="false" data-pagi="false" data-autoplay="3000" data-items-xs="3" data-items-sm="3"
    data-items-md="5" data-items-lg="6" data-items-xl="6" data-loop="true"
    style="z-index: 2; padding: 30px 0; border-top: 1px solid rgba(255,255,255,0.15);">

    <?php if (have_rows('brands_repeater')): ?>
    <?php while (have_rows('brands_repeater')) : the_row();
            $image = get_sub_field('logo');
            if ($image): ?>
    <div class="oc-item">
        <img src="<?php echo esc_url($image['url']); ?>" alt="Brands">
    </div>
    <?php endif; ?>
    <?php endwhile; ?>
    <?php endif; ?>

</div>
<div class="video-wrap" style="position: absolute; height: 100%; z-index: 1;">
    <div class="video-overlay" style="background: rgba(0,0,0,0.7);"></div>
</div>
</div>

<style>
.owl-stage {
    display: flex;
    align-items: center;
}

#oc-clients .oc-item {
    padding: 10px 15px;
}

.owl-carousel .owl-item img {
    transform-style: preserve-3d;
    object-fit: contain;
    padding: 15px;
    max-height: 140px;
    transition: filter 0.3s ease;
    filter: invert(100%) brightness(200%);
}

.owl-carousel .owl-item:hover img {
    transform: scale(1.20);
    transition: 1s ease;
}
</style>