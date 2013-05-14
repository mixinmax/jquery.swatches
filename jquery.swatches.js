/**
 * jquery.swatches.js
 *
 * Copyright (c) 2013 Max Mackie <github@f33r.com>
 *
 * http://maxmackie.com/jquery.swatches
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function($) {
    // gimme some swatches!
    $.fn.swatchify = function() {
        this.each(function() {
            var name = $(this).data('name');
            var colors = $(this).data('colors').split(',');
            var width = 100/colors.length + '%';
            var infoContents = '<div class="shade"><div class="color-names">'

            var holder = '<div class="holder">';
            for (i = 0; i < colors.length; i++) {
                infoContents += '<span class="name">' + colors[i] + '</span>';
                holder += '<span class="color" style="width:' + width + ';background-color:' + colors[i] + '"></span>';
            }
            holder += infoContents + '</div></div></div>';
            $(this).append(holder);
            $(this).append('<div class="info">' + name + '</div>');
            $(this).find('.name').each(function() { $(this).css('width', width) });
        });
    };

    // hover animation
    $(document).on('mouseenter', '.holder', function() {
        $(this).find('.shade').animate({height: '27px'}, 200);
        $(this).find('.name').animate({opacity: '1'}, 200);
    })
    .on('mouseleave', '.holder', function() {
        $(this).find('.shade').animate({height: '10px'}, 200);
        $(this).find('.name').animate({opacity: '0'}, 200);
    });

}( jQuery ));
