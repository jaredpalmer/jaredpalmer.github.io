




;(function ($) {
    var $document = $(document);

    var gridset = function () {
      return $('.photoset-row')
        .each(function () {
          var $pi = $(this)
            .find('.photoset-item'),
            cWidth = $(this)
            .parent('.photoset')
            .width();

          // Generate array containing all image aspect ratios
          var ratios = $pi.map(function () {
              var size = $(this).find('a').data('size').split('x');
              return (parseInt(size[0], 10) / parseInt(size[1], 10));
              // return $(this)
              //   .find('img')
              //   .data('ratio');
            })
            .get();

          // Get sum of widths
          var sumRatios = 0,
            sumMargins = 0,
            minRatio = Math.min.apply(Math, ratios);
          for (var i = 0; i < $pi.length; i++) {
            sumRatios += ratios[i] / minRatio;
          };

          $pi.each(function () {
            sumMargins += parseInt($(this)
              .css('margin-left')) + parseInt($(this)
              .css('margin-right'));
          });

          // Calculate dimensions
          $pi.each(function (i) {
            var minWidth = (cWidth - sumMargins) / sumRatios;
            $(this)
              .find('img')
              .height(Math.ceil(minWidth / minRatio))
              .width(Math.ceil(minWidth / minRatio) * ratios[i]);
          });
        });
    };

    var resizer = function () {
      return gridset()
    },
    rerun = function() {
        return gridset(),
        $(".lazy").unveil(500, function () {
          return $(this).load(function () {
            return this.style.opacity = 1;
          })
        })
        // $(".lazy-delay").velocity('fadeIn', {duration: 300})
    };

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

    function strip(path) {
      return path.substr(0, path.lastIndexOf('.')) || path;
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
        $design = $.trim(find_all($body, '#design')
          .first()
          .html());
        $design = $.trim(find_all($body, '#photos')
          .first()
          .html());

      return {
        'title': title,
        '$content': $content
      }
    }

    var prefix = '-webkit-';

    var $window = $(window);
    var $body = $('body');
    var windowHeight = $window.height();
    var windowWidth = $window.width();
    var bodyHeight = $('#content').height();

    var animateCntx = function () {
      window.requestAnimationFrame(function () {
        $canvas = $('#cntx-canvas');
        if ($canvas.length) {
          var scrollTop = $window.scrollTop();
          var animationValue = scrollTop - $canvas.position().top;
          // console.log(animationValue);
          var yVal = -(animationValue / 10).toFixed(5);
          // yVal = -yVal.toFixed(5);
          var transform = 'translate3d(0px, ' + yVal + 'px, 0px)';
          var transform2 = 'translate3d(0px, ' + -yVal + 'px, 0px)';
          $('.phone1').css(prefix + 'transform', transform);
          $('.phone2').css(prefix + 'transform', transform2);
        }
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


    $window.load(function () {
      $(this).resize($.throttle(50, resizer));
    });

    $window.on('statechange', function () {

        var url = History.getState().url;
        var rel = url.replace(root, '/');
        console.log(rel);
        $.get(rel)
          .done(function (date) {
            var response = parse_response(date);
            // console.log(response.$content);
            if (!response.$content.length) {
              document.location.href = url;

              return false;
            }

            if (response.title.length) {
              $('title')
                .last()
                .html(response.title);
            }

            var $content = $('#content');
            var $nav = $('.navbar');
            var page = strip(rel);
            $body.scrollTop(0);
            if (rel === '/photos/austria' || rel === '/photos/austria/' || rel === '/photos/austria.html' ) {
              console.log('execute');

              $content
                .velocity('transition.slideDownOut', {
                  duration: 250
                }).promise()
                .done(function () {
                    $content
                      .velocity('transition.slideUpIn', {
                        duration: 250
                      })
                      .html(response.$content);
                      ga('send', 'pageview');
                  initPhotoSwipeFromDOM('.gallery');
                  rerun();
                  setupCanvas('#cntx-canvas', animateCntx);
                });
            }

            else {
              $('.navbar .navbar-logo').css({color: "#000000"});
              $content
                .velocity('transition.slideDownOut', {
                  duration: 250
                }).promise()
                .done(function () {
                    $content
                      .velocity('transition.slideUpIn', {
                        duration: 250
                      })
                      .html(response.$content);
                  initPhotoSwipeFromDOM('.gallery');
                  rerun();
                  setupCanvas('#cntx-canvas', animateCntx);
                  ga('send', 'pageview');
                });
            }
          })
          .fail(function () {
            document.location.href = url;

            return false;
          });
      });

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
      rerun();
      setupCanvas('#cntx-canvas', animateCntx);

      initPhotoSwipeFromDOM('.gallery');
      //
      // $('.share').on('click', function(e) {
      //   e.preventDefault();
      //   window.open($(this).attr('href'), "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");
      // });
      // initPhotoSwipeFromDOM('.gallery2');
      // $('.lazy').unveil(500);

    });

})(jQuery);
