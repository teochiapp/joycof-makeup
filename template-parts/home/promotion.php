<?php
$link = get_field('link_promotion_home');
if (get_field('promotion_description')):
    $link_url = $link['url'];
    $link_title = $link['title'];
    $link_target = $link['target'] ? $link['target'] : '_self';
?>
<div class="section nomargin nopadding dark clearfix"
    style="background: linear-gradient(to right, var(--secondary-color), var(--terciary-color)) no-repeat 10% 50%; background-size: cover;">
    <a href="<?php echo esc_url($link_url); ?>" class="button button-full nobg font-serif center"
        style="padding: 60px 0" target="<?php echo esc_attr($link_target); ?>">
        <div class="container clearfix">
            <?php the_field("promotion_description"); ?>
        </div>
    </a>
</div>
<?php endif; ?>