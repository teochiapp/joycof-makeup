<?php wp_footer(); ?>
<footer id="footer" class="dark" style="background-color: #121212; padding: 60px 0">
    <div class="container clearfix">

        <div class="footer-widgets-wrap center clearfix">
            <img src="<?= wp_get_attachment_image_src(get_theme_mod('custom_logo'), 'full')[0] ?>" width="200" alt=""
                class="footer_logo">
            <div class="clearfix">
                <a href="#" class="social-icon si-small si-rounded si-borderless inline-block si-instagram">
                    <i class="icon-instagram"></i>
                    <i class="icon-instagram"></i>
                </a>
                <a href="#" class="social-icon si-small si-rounded si-borderless inline-block si-facebook">
                    <i class="icon-facebook"></i>
                    <i class="icon-facebook"></i>
                </a>
                <a href="#" class="social-icon si-small si-rounded si-borderless inline-block si-twitter">
                    <i class="icon-twitter"></i>
                    <i class="icon-twitter"></i>
                </a>
                <a href="#" class="social-icon si-small si-rounded si-borderless inline-block si-gplus">
                    <i class="icon-gplus"></i>
                    <i class="icon-gplus"></i>
                </a>
                <a href="#" class="social-icon si-small si-rounded si-borderless inline-block si-pinterest">
                    <i class="icon-pinterest"></i>
                    <i class="icon-pinterest"></i>
                </a>
            </div>
            <div class="uppercase ls3" style="color: #333; margin-top: 10px"><?php echo date("Y"); ?> - © All
                rights reserved - Based in Den Haag, Netherlands</div>
        </div>
    </div>
    </div>
</footer>
</div>

<div id="gotoTop" class="icon-angle-up"></div>

</body>

</html>