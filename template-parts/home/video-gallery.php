<div class="hover-accordion primarybg hidden-mobile">
    <?php
    $args = array(
        'post_type'      => 'video-gallery',
        'posts_per_page' => 6,
        'order'          => 'ASC',
    );

    $gallery_query = new WP_Query($args);

    if ($gallery_query->have_posts()) :
        while ($gallery_query->have_posts()) : $gallery_query->the_post();
    ?>
    <div class="item">
        <div class="brand">
            <div class="video-wrapper">
                <video autoplay muted loop class="bg-video">
                    <source src="<?php the_field("url_video"); ?>" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
    <?php
        endwhile;
        wp_reset_postdata();
    endif;
    ?>
</div>

<style>
.hover-accordion {
    display: flex;
    height: 55vh;
    overflow: hidden;
    background-color: var(--primary-color);
    padding: 60px 0;
}

.hover-accordion .item {
    height: 100%;
    overflow: hidden;
    flex: 1;
    transition: all 0.5s ease-in-out;
    position: relative;
    box-shadow: inset 0 0 20px #343434;
}

.hover-accordion .item .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    /* Important for the video hover effect */
}

.hover-accordion .item .video-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease;
    /* Smooth transition for scaling */
}

.hover-accordion .item .bg-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
}

.hover-accordion .item:hover .video-wrapper {
    transform: scale(1.1);
    /* Scale up the video on hover */
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

.hover-accordion:hover .item:not(:hover) {
    filter: brightness(0.3) saturate(0.7);
    transition: 1s;
}

/* Media Queries for responsive design */

/* For medium screens (tablets) */
@media (max-width: 992px) {
    .hover-accordion {
        flex-wrap: wrap;
        height: auto;
    }

    .hover-accordion .item {
        flex: 1 1 50%;
        height: 50vh;
    }

    .hover-accordion .item:hover {
        flex: 1 1 100%;
    }
}

/* For mobile with 2 columns */
@media (max-width: 768px) {
    .hover-accordion {
        flex-wrap: wrap;
        height: auto;
    }

    .hover-accordion .item {
        flex: 1 1 50%;
        height: 40vh;
    }

    .hover-accordion .item:hover {
        flex: 1 1 50%;
    }
}
</style>