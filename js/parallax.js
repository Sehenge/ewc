/**
 * Created with JetBrains PhpStorm.
 * User: sehenge
 * Date: 4/15/13
 * Time: 5:06 PM
 * To change this template use File | Settings | File Templates.
 */
function Parallax() {
    this.navli = $('.navigation li');
    this.blueborder = '<div class="blue_border"></div>';
}

Parallax.prototype.InitEvents = function Parallax_initEvents() {
    var self = this;

    this.navli.click(function(){
        if (!jQuery(this).hasClass('search')) {
            jQuery(this).addClass('active');
            if (!jQuery(this).children(".blue_border").length) {
                jQuery(this).append(this.blueborder);
            }
            jQuery(this).siblings().removeClass('active').children(".blue_border").remove();
        }
    });
}

Parallax.prototype.OnScroll = function Parallax_onScroll(obj) {
    if (!obj.hasClass('search')) {
        obj.addClass('active');
        if (!obj.children(".blue_border").length) {
            obj.append(this.blueborder);
        }
        obj.siblings().removeClass('active').children(".blue_border").remove();
    }
}