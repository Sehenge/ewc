/**
 * Created with JetBrains PhpStorm.
 * User: sehenge
 * Date: 3/16/13
 * Time: 4:15 PM
 * To change this template use File | Settings | File Templates.
 */
jQuery(document).ready(function() {
    jQuery(".navigation li").click(function(){
        var self = jQuery(this);
        if (!jQuery(this).hasClass('search')) {
            jQuery(this).addClass('active');
            if (!jQuery(this).children(".blue_border").length) {
                jQuery(this).append('<div class="blue_border"></div>');
            }
            jQuery(this).siblings().removeClass('active').children(".blue_border").remove();
        }
    });
});