;(function ($) {
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

    prefix = '-webkit-';

    $window = $(window);
    $body = $('body');
    windowHeight = $window.height();
    windowWidth = $window.width();
    bodyHeight = $('#content')
      .height();

    animateCntx = function () {
      window.requestAnimationFrame(function () {
        $canvas = $('#cntx-canvas');
        scrollTop = $window.scrollTop();
        animationValue = scrollTop - $canvas.position().top;
        // console.log(animationValue);
        yVal = animationValue / 10;
        yVal = -yVal.toFixed(5);
        transform = 'translate3d(0px, ' + yVal + 'px, 0px)';
        transform2 = 'translate3d(0px, ' + -yVal + 'px, 0px)';
        $('.phone1').css(prefix + 'transform', transform);
        $('.phone2').css(prefix + 'transform', transform2);
      });
    }




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
      setupCanvas('#cntx-canvas', animateCntx);
      $document.on('click', 'a:internal', function (event) {
        if (event.which == 2 || event.ctrlKey || event.metaKey) {
          return true;
        }

        History.pushState(null, null, $(this)
          .attr('href'));
        event.preventDefault();

        return false;
      });

      $window.scroll(0);
      // setupCanvas('#cntx-canvas', animateCntx);
      $('.lazy').unveil();
    });
    $(window).load(function () {
      $window.scroll(0);
    });
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
                  .html(response.$content);
              });
          })
          .fail(function () {
            document.location.href = url;

            return false;
          });
      });





    })(jQuery);

  // prefix = '-webkit-';
  //
  // animateCntx = function () {
  //   window.requestAnimationFrame(function () {
  //     $canvas = $('#cntx-canvas');
  //     scrollTop = $window.scrollTop();
  //     animationValue = scrollTop - $canvas.position()
  //       .top;
  //     // console.log(animationValue);
  //     yVal = animationValue / 10;
  //     yVal = -yVal.toFixed(5);
  //     transform = 'translate3d(0px, ' + yVal + 'px, 0px)';
  //     transform2 = 'translate3d(0px, ' + -yVal + 'px, 0px)';
  //     $canvas.children('.phone1')
  //       .css(prefix + 'transform', transform);
  //     $canvas.children('.phone2')
  //       .css(prefix + 'transform', transform2);
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
  //   bodyHeight = $('#content')
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
