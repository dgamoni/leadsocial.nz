/*
 * jQuery Reveal Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
jQuery.fn.extend({
    live: function (event, callback) {
       if (this.selector) {            
            jQuery(document).on(event, this.selector, callback);
        }
    }
});
(function(e){e("a[data-reveal-id]").live("click",function(t){t.preventDefault();var n=e(this).attr("data-reveal-id");e("#"+n).reveal(e(this).data())}),e.fn.reveal=function(t){var n={animation:"fadeAndPop",animationspeed:300,closeonbackgroundclick:!0,dismissmodalclass:"close-reveal-modal",closeCallback:function(){}},t=e.extend({},n,t);return this.each(function(){function a(){s=!1}function f(){s=!0}var n=e(this),r=parseInt(n.css("top")),i=n.height()+r,s=!1,o=e(".reveal-modal-bg");o.length==0&&(o=e('<div class="reveal-modal-bg" />').insertAfter(n)),n.bind("reveal:open",function(){o.unbind("click.modalEvent"),e("."+t.dismissmodalclass).unbind("click.modalEvent"),s||(f(),t.animation=="fadeAndPop"&&(n.css({top:e(document).scrollTop()-i,opacity:0,visibility:"visible"}),o.fadeIn(t.animationspeed/2),n.delay(t.animationspeed/2).animate({top:e(document).scrollTop()+r+"px",opacity:1},t.animationspeed,a())),t.animation=="fade"&&(n.css({opacity:0,visibility:"visible",top:e(document).scrollTop()+r}),o.fadeIn(t.animationspeed/2),n.delay(t.animationspeed/2).animate({opacity:1},t.animationspeed,a())),t.animation=="none"&&(n.css({visibility:"visible",top:e(document).scrollTop()+r}),o.css({display:"block"}),a())),n.unbind("reveal:open")}),n.bind("reveal:close",function(){s||(f(),t.animation=="fadeAndPop"&&(o.delay(t.animationspeed).fadeOut(t.animationspeed),n.animate({top:e(document).scrollTop()-i+"px",opacity:0},t.animationspeed/2,function(){n.css({top:r,opacity:1,visibility:"hidden"}),a()})),t.animation=="fade"&&(o.delay(t.animationspeed).fadeOut(t.animationspeed),n.animate({opacity:0},t.animationspeed,function(){n.css({opacity:1,visibility:"hidden",top:r}),a()})),t.animation=="none"&&(n.css({visibility:"hidden",top:r}),o.css({display:"none"}))),n.unbind("reveal:close"),t.closeCallback()}),n.trigger("reveal:open");var u=e("."+t.dismissmodalclass).bind("click.modalEvent",function(){n.trigger("reveal:close")});t.closeonbackgroundclick&&(o.css({cursor:"pointer"}),o.bind("click.modalEvent",function(){n.trigger("reveal:close")})),e("body").keyup(function(e){e.which===27&&n.trigger("reveal:close")})})}})(jQuery);


document.addEventListener( 'wpcf7mailsent', function( event ) {
    //location = 'http://example.com/thank-you';
    setTimeout(function() { jQuery('.close-reveal-modal').trigger('click') }, 2000);
}, false );
