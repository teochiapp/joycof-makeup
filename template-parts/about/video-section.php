<section class="about-seven">
    <div class="container">
        <div class="row">
            <div class="col-xl-4 hidden-mobile">
                <div class="about-seven__left">
                    <video autoplay muted loop id="bg-video" class="">
                        <source src="<?php the_field("about_video_url") ?>" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="col-xl-8">
                <div class="about-seven__right">
                    <div class="section-title text-left">
                        <span
                            class="title title-heading subtitle-video-section"><?php the_field("subtitle_video_section"); ?></span>
                        <h2 class="section-title__title"><?php the_field("title_video_section"); ?></h2>
                    </div>
                    <p class="about-seven__text-2"><?php the_field("Description_video_section"); ?></p>
                    <div class="about-seven__points-box">
                        <ul class="list-unstyled about-seven__points">
                            <?php if (have_rows('features_list_repeater')): // Check if the repeater has rows 
                            ?>
                            <?php while (have_rows('features_list_repeater')): the_row();
                                    $feature_text = get_sub_field('title_features_list_repeater'); // Get the text from the repeater field
                                ?>
                            <li>
                                <div class="icon"><span class="fa fa-check"></span></div>
                                <div class="text">
                                    <p><?php echo esc_html($feature_text); ?></p>
                                </div>
                            </li>
                            <?php endwhile; ?>
                            <?php endif; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div id="parallax-world-of-ugg">
    <section>
        <div class="parallax-one parallax"
            style="padding: 50px 0; background-image: url('<?php echo the_field("background_image_header2") ?>')">
            <h2><?php the_field("background_title_header2") ?></h2>
        </div>
    </section>
</div>

<section class="about-seven">
    <div class="container">
        <div class="row">
            <div class="col-xl-8">
                <div class="about-seven__rightinverted">
                    <div class="section-title text-left">
                        <span class="title title-heading"><?php the_field("subtitle_how_section")?></span>
                        <h2 class="section-title__title"><?php the_field("title_how_section")?></h2>
                    </div>
                    <p class="about-seven__text-2"><?php the_field("description_how_section")?></p>
                </div>
            </div>
            <div class="col-xl-4 hidden-mobile">
                <div class="about-seven__left">
                    <video autoplay muted loop id="bg-video" class="">
                        <source src="<?php the_field("about_video_url2") ?>" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
    </div>
</section>