(function ($) { 'use strict';
 $(window).on('load', function () { $('.preloader').fadeOut(100);
});
 var Year = $('#simple-timer').attr('data-year');
 var Month = $('#simple-timer').attr('data-month');
 var Day = $('#simple-timer').attr('data-day');
 var Hour = $('#simple-timer').attr('data-hour');
 var Minute = $('#simple-timer').attr('data-minute');
 $('#simple-timer').syotimer({ year: Year, month: Month, day: Day, hour: Hour, minute: Minute, afterDeadline: function(timerBlock) {timerBlock.bodyBlock.html('<p id="linkConf" ><a class="font-weight-light" href="https://conf.volcamp.io">https://conf.volcamp.io</a></p>');
  $('.counter-stat').hide();
  $('.counter-over').show();
 } });
 })(jQuery);
