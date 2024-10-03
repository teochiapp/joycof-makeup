<div class="hover-accordion">
    <?php
        $args = array(
            'post_type'      => 'gallery',
            'posts_per_page' => 6,
            'order'          => 'ASC',
        );

        $gallery_query = new WP_Query($args);

        if ($gallery_query->have_posts()) :
            while ($gallery_query->have_posts()) : $gallery_query->the_post();
        ?>
    <div class="item">
        <div class="brand">
            <img src="<?php the_post_thumbnail_url() ?>" />
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
    height: 65vh;
    overflow: hidden;
    background-color: var(--primary-color);
    padding-bottom: 60px;
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
}

.hover-accordion .item .brand img {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
}

.hover-accordion .item:hover .brand img {
    transform: scale(1.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.5s ease, box-shadow 0.5s ease;
}

@media (min-width: 768px) {
    .hover-accordion:hover .item:not(:hover) {
        filter: brightness(0.3) saturate(0.7);
        transition: 1s;
    }
}


.hover-accordion .item:hover .brand h3 {
    opacity: 1;
}

/* Media Queries para hacer el acordeón responsivo */

/* Para pantallas medianas (tablets) */
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

/* Para móviles con 2 columnas */
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

    /* Agregar estilo para Lightbox en mobile */
    .hover-accordion .item .brand a.lightbox-link {
        display: block;
    }
}
</style>