// jQuery(document)
//   .ready(function ($) {
//     var siteUrl = 'http://' + (document.location.hostname || document.location.host);
//
//     // Make sure that all clicked links that link to your internal website
//     // don't just reload the page but execute a History.pushState call
//     $(document)
//       .delegate('a[href^="/"],a[href^="' + siteUrl + '"]', "click", function (e) {
//
//         e.preventDefault();
//
//         History.pushState(null, null, this.pathname);
//       });
//
//     // Catch all History stateChange events
//     History.Adapter.bind(window, 'statechange', function () {
//       var State = History.getState();
//
//
//       // Load the new state's URL via an Ajax Call
//       $.get(State.url, function (data) {
//         // Replace the "<title>" tag's content
//         document.title = $(data)
//           .find("title")
//           .text();
//
//         // Replace the content of the main container (.content)
//         // If you're using another div, you should change the selector
//         $('body').animate({scrollTop: 0}, 400)
//         $('.content')
//           .velocity('transition.slideDownOut', {
//             duration: 600
//           })
//           .promise()
//           .done(function () {
//             $('.content')
//               .html($(data)
//                 .find('.content'));
//             $('.content').velocity('transition.slideUpIn', { stagger: 100, duration: 400, drag: true });
//           });
//       });
//       // If you're using Google analytics, make sure the pageview is registered!
//       // ga('send', 'pageview', {
//       //     'page': State.url,
//       //     'title': document.title
//       // });
//     });
//   });
(function ($) {
    var $document = $(document);

    if (!History.enabled) {
      return false;
    }

    var root = History.getRootUrl();

    $.expr.filters.internal = function (elem) {
      return (elem.hostname == window.location.hostname && /(\/|\.html)$/i.test(elem.pathname)) || false;
    };

    function find_all($html, selector) {
      return $html.filter(selector)
        .add($html.find(selector));
    }

    function parse_html(html) {
      return $($.parseHTML(html, document, true));
    }

    function parse_response(html) {
      var
        head = /<head[^>]*>([\s\S]+)<\/head>/.exec(html),
        body = /<body[^>]*>([\s\S]+)<\/body>/.exec(html),

        $head = head ? parse_html(head[1]) : $(),
        $body = body ? parse_html(body[1]) : $(),

        title = $.trim(find_all($head, 'title')
          .last()
          .html()),
        $content = $.trim(find_all($body, '#content')
          .first()
          .html());

      return {
        'title': title,
        '$content': $content
      }
    }

    prefix = "-webkit-";

    animateCntx = function () {
      window.requestAnimationFrame(function () {
        $canvas = $("#cntx-canvas");
        scrollTop = $window.scrollTop();
        animationValue = scrollTop - $canvas.position()
          .top;
        // console.log(animationValue);
        yVal = animationValue / 10;
        yVal = -yVal.toFixed(5);
        transform = "translate3d(0px, " + yVal + "px, 0px)";
        transform2 = "translate3d(0px, " + -yVal + "px, 0px)";
        $canvas.children(".phone1")
          .css(prefix + "transform", transform);
        $canvas.children(".phone2")
          .css(prefix + "transform", transform2);
      });
    }

    $window = $(window);
    $body = $('body');
    windowHeight = $window.height();
    windowWidth = $window.width();
    bodyHeight = $("#content")
      .height();
    $window.scroll(0);

    setupCanvas = function (element, animationFunction) {
      $(element)
        .bind('inview', function (event, visible) {
          if (visible == true) {
            scrollIntervalID = setInterval(animationFunction, 50);
          } else {
            scrollIntervalID = 0;
          }
        });
    }

    $document.ready(function () {

      $document.on('click', 'a:internal', function (event) {
        if (event.which == 2 || event.ctrlKey || event.metaKey) {
          return true;
        }

        History.pushState(null, null, $(this)
          .attr('href'));
        event.preventDefault();

        return false;
      });


      setupCanvas('#cntx-canvas', animateCntx);

    });
    $(window).load(function () {$window.scroll(0);});
    $(window)
      .on('statechange', function () {
        var
          url = History.getState()
          .url,
          rel = url.replace(root, '/');

        $.get(rel)
          .done(function (date) {
            var response = parse_response(date);

            if (!response.$content.length) {
              document.location.href = url;

              return false;
            }

            var $content = $('#content');


            if (response.title.length) {
              $('title')
                .last()
                .html(response.title);
            }


            $content
              .velocity('transition.slideDownOut', {
                duration: 400
              })
              .promise()
              .done(function () {
                setupCanvas('#cntx-canvas', animateCntx);
                $content
                  .velocity('transition.slideUpIn', {
                    duration: 300
                  })
                  .html(response.$content)
              });
          })
          .fail(function () {
            document.location.href = url;

            return false;
          });
      });





    })(jQuery);

  // prefix = "-webkit-";
  //
  // animateCntx = function () {
  //   window.requestAnimationFrame(function () {
  //     $canvas = $("#cntx-canvas");
  //     scrollTop = $window.scrollTop();
  //     animationValue = scrollTop - $canvas.position()
  //       .top;
  //     // console.log(animationValue);
  //     yVal = animationValue / 10;
  //     yVal = -yVal.toFixed(5);
  //     transform = "translate3d(0px, " + yVal + "px, 0px)";
  //     transform2 = "translate3d(0px, " + -yVal + "px, 0px)";
  //     $canvas.children(".phone1")
  //       .css(prefix + "transform", transform);
  //     $canvas.children(".phone2")
  //       .css(prefix + "transform", transform2);
  //   });
  // }
  //
  //
  // $(document)
  // .ready(function () {
  //   $window = $(window);
  //   $body = $('body');
  //   windowHeight = $window.height();
  //   windowWidth = $window.width();
  //   bodyHeight = $("#content")
  //     .height();
  //   $window.scroll(0);
  //
  //
  //   setupCanvas = function (element, animationFunction) {
  //     $(element)
  //       .bind('inview', function (event, visible) {
  //         if (visible == true) {
  //           scrollIntervalID = setInterval(animationFunction, 50);
  //         } else {
  //           scrollIntervalID = 0;
  //         }
  //       });
  //   }
  //
  //
  //   setupCanvas('#cntx-canvas', animateCntx);
  // }); $(window)
  // .load(function () {
  //   $window.scroll(0);
  // });
