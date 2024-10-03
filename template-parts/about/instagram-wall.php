<div id="parallax-world-of-ugg">
    <section>
        <div class="parallax-one parallax"
            style="padding: 50px 0; background-image: url('<?php echo the_field("header_background_image_instagram") ?>')">
            <h2><?php the_field("header_background_title_instagram") ?></h2>
        </div>
    </section>
</div>

<section class="instagram-section primarybg">
    <div class="container">
        <?= do_shortcode("[instagram-feed feed=1]"); ?>
    </div>
</section>