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
        return this.each(function() {
            var target  = $(this);
            var name    = target.data('name');
            var colors  = typeof target.data('colors') === 'string' ? target.data('colors').split(',') : target.data('colors');
            var width   = 100/colors.length + '%';

            var infoContents = $('<div/>', {class: 'shade'});
            var holder       = $('<div/>', {class: 'holder'});

            for (var i = 0; i < colors.length; i++) {
                infoContents.append( $('<span/>', {class: 'name'}).css('width', width).text(colors[i].toUpperCase()) );
                holder.append( $('<span/>', {class: 'color'}).css({width: width, 'background-color': colors[i]}) );
            }

            holder.append(infoContents);
            target.append(holder);

            target.append( $('<div/>', {class: 'info'}).text(name) );
            
            target.addClass('jqueryswatches');
        });
    };

    // hover animation
    $(document).on('mouseenter', '.jqueryswatches .holder', function() {
        $(this).find('.shade').stop().animate({height: '27px'}, 200);
        $(this).find('.name').stop().animate({opacity: '1'}, 200);
    })
    .on('mouseleave', '.jqueryswatches .holder', function() {
        $(this).find('.shade').stop().animate({height: '10px'}, 200);
        $(this).find('.name').stop().animate({opacity: '0'}, 200);
    });

}( jQuery ));
