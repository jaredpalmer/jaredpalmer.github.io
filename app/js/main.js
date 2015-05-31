var initPhotoSwipeFromDOM = function(gallerySelector) {

  // parse slide data (url, title, size ...) from DOM elements
  // (children of gallerySelector)
  var parseThumbnailElements = function(el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      childElements,
      linkEl,
      size,
      item;

    for (var i = 0; i < numNodes; i++) {


      figureEl = thumbElements[i]; // <figure> element

      // include only element nodes
      if (figureEl.nodeType !== 1) {
        continue;
      }

      linkEl = figureEl.children[0]; // <a> element

      size = linkEl.getAttribute('data-size').split('x');

      // create slide object
      item = {
        src: linkEl.getAttribute('href'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10)
      };



      if (figureEl.children.length > 1) {
        // <figcaption> content
        item.title = figureEl.children[1].innerHTML;
      }

      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute('data-src');
      }

      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }

    return items;
  };

  // find nearest parent element
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function(e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    var eTarget = e.target || e.srcElement;

    var clickedListItem = closest(eTarget, function(el) {
      return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
    });

    if (!clickedListItem) {
      return;
    }


    // find index of clicked item
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;

    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }

      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }



    if (index >= 0) {
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function() {
    var hash = window.location.hash.substring(1),
      params = {};

    if (hash.length < 5) {
      return params;
    }

    var vars = hash.split('&');
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split('=');
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }

    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    if (!params.hasOwnProperty('pid')) {
      return params;
    }
    params.pid = parseInt(params.pid, 10);
    return params;
  };

  var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
    var pswpElement = document.querySelectorAll('.pswp')[0],
      gallery,
      options,
      items;

    items = parseThumbnailElements(galleryElement);

    // define options (if needed)
    options = {
      index: index,

      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),

      getThumbBoundsFn: function(index) {
        // See Options -> getThumbBoundsFn section of docs for more info
        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
          pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect();

        return {
          x: rect.left,
          y: rect.top + pageYScroll,
          w: rect.width
        };
      },

      // history & focus options are disabled on CodePen
      // remove these lines in real life:
      history: true,
      focus: true

      //,
      //  showHideOpacity:true

    };

    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  // loop through all gallery elements and bind events
  var galleryElements = document.querySelectorAll(gallerySelector);

  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute('data-pswp-uid', i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if (hashData.pid > 0 && hashData.gid > 0) {
    openPhotoSwipe(hashData.pid - 1, galleryElements[hashData.gid - 1], true);
  }
};

// execute above function
// $(function() {
//
//
//
//   // initPhotoSwipeFromDOM('.photoset');
//
//   // $('h1').velocity('transition.slideUpIn', { delay: 380, duration: 1000, drag: true });
//   // $('.posts-list--item').velocity('transition.slideUpBigIn', { stagger: 70, delay: 450, duration:1000, drag: true });
//   // $('.navbar-link').velocity('transition.slideDownIn', { stagger: 60, delay: 100, duration: 1000, drag: true });
//   'use strict';
//   var $body = $('html, body'),
//     content = $('#main').smoothState({
//         prefetch: true,
//         pageCacheSize: 4,
//         onStart: {
//           duration: 250,
//           render: function(url, $container) {
//             // Add your CSS animation reversing class
//             $('#main').addClass('is-exiting');
//
//             // Restart your animation
//             smoothState.restartCSSAnimations();
//
//             // anything else
//           }
//         },
//         onEnd: {
//           duration: 0,
//           render: function(url, $container, $content) {
//             // Remove your CSS animation reversing class
//             $('#main').removeClass('is-exiting');
//
//             // Inject the new content
//             $container.html($content);
//           }
//         }
//       }
//     }).data('smoothState');
// });
//
// $(function() {
//
//
//
// });

;
(function($) {
  'use strict';
  var $body = $('html, body'),
    $main = $('#main'),
    options = {
      prefetch: true,
      // pageCacheSize: 4,
      onStart: {
        duration: 600,
        render: function(url, $container) {
          $body.animate({
            scrollTop: 0
          });
           $main.addClass('is-exiting');
          // smoothState.restartCSSAnimations();
          // $('h1').velocity('transition.slideUpOut', { delay: 380, duration: 1000, drag: true });
          // $('.posts-list--item').velocity('transition.slideDownBigOut', { stagger: 70, delay: 450, duration:1000, drag: true });
          // // $('.navbar-link').velocity('transition.fadeOut', { stagger: 70, delay: 100, duration: 1000, drag: true });
          // $('p').velocity('transition.slideDownOut', { stagger: 60, delay: 100, duration: 1000, drag: true });
          // $('nav').velocity('transition.slideUpOut', {  duration: 200});
          // $('.container').velocity('transition.fadeOut', {  duration: 200 });
          // $('.photos').velocity('transition.slideDownOut', {  duration: 200 });
          // $('footer').velocity('transition.fadeOut', {  duration: 200, });
          // $('#main').velocity('transition.slideDownOut', { duration: 1000 });
          // $('.navbar-link').velocity('transition.slideUpOut', {  duration: 200, stagger:40, drag: true});
          $('#content').velocity('transition.slideDownOut', {  duration: 600, stagger:40, drag: true});
          $(".lazy").unveil(200, function() {
            $(this).load(function() {
              this.style.opacity = 1;
            });
          });
          // smoothState.restartCSSAnimations();
        }
      },
      onEnd: {
        duration: 400,
        render: function(url, $container, $content) {
          $main.removeClass('is-exiting');
          $main.html($content);
          $body.css('cursor', 'auto');
          $body.find('a').css('cursor', 'auto');
          // $('h1').velocity('transition.slideUpIn', { delay: 380, duration: 1000, drag: true });
          // $('#main').velocity('transition.slideUpIn', { duration: 1000 });
          // $('.navbar-link').velocity('transition.slideDownIn', {  duration: 200});
          // initPhotoSwipeFromDOM('.photoset');
          $('#content').velocity('transition.slideUpIn', { duration: 400, stagger:20, drag: true});
          $(".lazy").unveil(200, function() {
            $(this).load(function() {
              this.style.opacity = 1;
            });
          });

          // $('nav').velocity('transition.slideDownIn', { duration: 200 });
          // $('.container').velocity('transition.slideUpIn', { duration: 200 });
          // $('footer').velocity('transition.slideUpIn', {  duration: 200 });
          // $('.photos').velocity('transition.slideUpIn', { duration: 200});

          // $('.posts-list--item').velocity('transition.slideUpBigIn', { stagger: 70, delay: 450, duration:1000, drag: true });
          // // $('.navbar-link').velocity('transition.fadeIn', { stagger: 70, delay: 100, duration: 1000, drag: true });
          // $('p').velocity('transition.slideUpIn', { stagger: 60, delay: 100, duration: 1000, drag: true });





        }
      }
    },
    smoothState = $main.smoothState(options).data('smoothState');

})(jQuery);
