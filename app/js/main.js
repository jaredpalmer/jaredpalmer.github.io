// ;(function($) {
//   'use strict';
//
//
//
// })(jQuery);

// Set up Chat widget form
document.addEventListener('keydown', function(event) {
  var esc = event.which == 27;
  var nl = event.which == 13;
  var el = event.target;
  var input = el.nodeName != 'INPUT' && el.nodeName != 'TEXTAREA';
  var data = {};

  if (input) {
    if (esc) {
      // restore state
      document.execCommand('undo');
      el.blur();
    } else if (nl) {
      // save
      data[el.getAttribute('data-content')] = el.innerHTML;

      // we could send an ajax request to update the field
      /*
      $.ajax({
        url: window.location.toString(),
        data: data,
        type: 'post'
      });
      */

      console.log(JSON.stringify(data));
      el.blur();
      event.preventDefault();
    }
  }
}, true);
