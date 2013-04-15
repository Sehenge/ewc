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
        self.ScrollTo(jQuery(this));
    });
}

Parallax.prototype.OnScroll = function Parallax_onScroll(obj) {
    var self = this;
    if (!obj.hasClass('search')) {
        obj.addClass('active');
        if (!obj.children(".blue_border").length) {
            obj.append(self.blueborder);
        }
        obj.siblings().removeClass('active').children(".blue_border").remove();
    }
}

Parallax.prototype.ScrollTo = function Parallax_scrollTo(obj) {
    var self = this;

    var block = obj.find('a').attr("rel");
    var offset = 0;
    if (block == 'men') {
        offset = 974;
    } else if (block == 'designers') {
        offset = 1948;
    } else if (block == 'sales') {
        offset = 2923;
    } else if (block == 'bestsellers') {
        offset = 3896;
    }

    $("body").animate({
        scrollTop: offset
    }, 800);
}