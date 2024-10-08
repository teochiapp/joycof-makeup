var $ = jQuery.noConflict();
function debounce(e, t, a) {
  var i, s, n, o, r;
  return function () {
    (n = this), (s = arguments), (o = new Date());
    var l = function () {
        var d = new Date() - o;
        d < t
          ? (i = setTimeout(l, t - d))
          : ((i = null), a || (r = e.apply(n, s)));
      },
      d = a && !i;
    return i || (i = setTimeout(l, t)), d && (r = e.apply(n, s)), r;
  };
}
($.fn.inlineStyle = function (e) {
  return this.prop("style")[$.camelCase(e)];
}),
  ($.fn.doOnce = function (e) {
    return this.length && e.apply(this), this;
  }),
  (function () {
    for (
      var e = 0, t = ["ms", "moz", "webkit", "o"], a = 0;
      a < t.length && !window.requestAnimationFrame;
      ++a
    )
      (window.requestAnimationFrame = window[t[a] + "RequestAnimationFrame"]),
        (window.cancelAnimationFrame =
          window[t[a] + "CancelAnimationFrame"] ||
          window[t[a] + "CancelRequestAnimationFrame"]);
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (t, a) {
        var i = new Date().getTime(),
          s = Math.max(0, 16 - (i - e)),
          n = window.setTimeout(function () {
            t(i + s);
          }, s);
        return (e = i + s), n;
      }),
      window.cancelAnimationFrame ||
        (window.cancelAnimationFrame = function (e) {
          clearTimeout(e);
        });
  })();
var requesting = !1,
  killRequesting = debounce(function () {
    requesting = !1;
  }, 100);
function onScrollSliderParallax() {
  requesting ||
    ((requesting = !0),
    requestAnimationFrame(function () {
      SEMICOLON.slider.sliderParallax(), SEMICOLON.slider.sliderElementsFade();
    })),
    killRequesting();
}
var SEMICOLON = SEMICOLON || {};
!(function (e) {
  "use strict";
  (SEMICOLON.initialize = {
    init: function () {
      SEMICOLON.initialize.responsiveClasses(),
        SEMICOLON.initialize.stickyElements(),
        SEMICOLON.initialize.goToTop(),
        SEMICOLON.initialize.lazyLoad(),
        SEMICOLON.initialize.fullScreen(),
        SEMICOLON.initialize.verticalMiddle(),
        SEMICOLON.initialize.lightbox(),
        SEMICOLON.initialize.resizeVideos(),
        SEMICOLON.initialize.imageFade(),
        SEMICOLON.initialize.pageTransition(),
        SEMICOLON.initialize.dataResponsiveClasses(),
        SEMICOLON.initialize.dataResponsiveHeights(),
        SEMICOLON.initialize.stickFooterOnSmall(),
        SEMICOLON.initialize.stickyFooter(),
        e(".fslider").addClass("preloader2");
    },
    responsiveClasses: function () {
      if ("undefined" == typeof jRespond)
        return console.log("responsiveClasses: jRespond not Defined."), !0;
      jRespond([
        { label: "smallest", enter: 0, exit: 575 },
        { label: "handheld", enter: 576, exit: 767 },
        { label: "tablet", enter: 768, exit: 991 },
        { label: "laptop", enter: 992, exit: 1199 },
        { label: "desktop", enter: 1200, exit: 1e4 },
      ]).addFunc([
        {
          breakpoint: "desktop",
          enter: function () {
            a.addClass("device-xl");
          },
          exit: function () {
            a.removeClass("device-xl");
          },
        },
        {
          breakpoint: "laptop",
          enter: function () {
            a.addClass("device-lg");
          },
          exit: function () {
            a.removeClass("device-lg");
          },
        },
        {
          breakpoint: "tablet",
          enter: function () {
            a.addClass("device-md");
          },
          exit: function () {
            a.removeClass("device-md");
          },
        },
        {
          breakpoint: "handheld",
          enter: function () {
            a.addClass("device-sm");
          },
          exit: function () {
            a.removeClass("device-sm");
          },
        },
        {
          breakpoint: "smallest",
          enter: function () {
            a.addClass("device-xs");
          },
          exit: function () {
            a.removeClass("device-xs");
          },
        },
      ]);
    },
    verticalMiddle: function () {
      B.length > 0 &&
        B.each(function () {
          var t = e(this),
            i = t.outerHeight(),
            n = s.outerHeight();
          t.parents("#slider").length > 0 &&
            !t.hasClass("ignore-header") &&
            s.hasClass("transparent-header") &&
            (a.hasClass("device-xl") || a.hasClass("device-lg")) &&
            ((i -= 70), k.next("#header").length > 0 && (i += n)),
            (a.hasClass("device-sm") || a.hasClass("device-xs")) &&
            t.parents(".full-screen").length &&
            !t.parents(".force-full-screen").length
              ? t.children(".col-padding").length > 0
                ? t
                    .css({
                      position: "relative",
                      top: "0",
                      width: "auto",
                      marginTop: "0",
                    })
                    .addClass("clearfix")
                : t
                    .css({
                      position: "relative",
                      top: "0",
                      width: "auto",
                      marginTop: "0",
                      paddingTop: "60px",
                      paddingBottom: "60px",
                    })
                    .addClass("clearfix")
              : t.css({
                  position: "absolute",
                  top: "50%",
                  width: "100%",
                  paddingTop: "0",
                  paddingBottom: "0",
                  marginTop: -i / 2 + "px",
                });
        });
    },
    stickyElements: function () {
      if (Y.length > 0) {
        var e = Y.outerHeight();
        Y.css({ marginTop: -e / 2 + "px" });
      }
      if (W.length > 0) {
        var t = W.outerHeight();
        W.css({ marginTop: -t / 2 + "px" });
      }
    },
    goToTop: function () {
      var t = V.attr("data-speed"),
        a = V.attr("data-easing");
      t || (t = 700),
        a || (a = "easeOutQuad"),
        V.click(function () {
          return (
            e("body,html").stop(!0).animate({ scrollTop: 0 }, Number(t), a), !1
          );
        });
    },
    goToTopScroll: function () {
      var e = V.attr("data-mobile"),
        i = V.attr("data-offset");
      if (
        (i || (i = 450),
        "true" != e && (a.hasClass("device-sm") || a.hasClass("device-xs")))
      )
        return !0;
      t.scrollTop() > Number(i)
        ? (V.fadeIn(), a.addClass("gototop-active"))
        : (V.fadeOut(), a.removeClass("gototop-active"));
    },
    fullScreen: function () {
      Q.length > 0 &&
        Q.each(function () {
          var i = e(this),
            n = window.innerHeight ? window.innerHeight : t.height(),
            o = i.attr("data-negative-height");
          if ("slider" == i.attr("id")) {
            var r = k.offset().top;
            if (((n -= r), i.find(".slider-parallax-inner").length > 0)) {
              var l = i
                .find(".slider-parallax-inner")
                .css("transform")
                .match(/-?[\d\.]+/g);
              if (l) d = l[5];
              else var d = 0;
              n =
                (window.innerHeight ? window.innerHeight : t.height()) +
                Number(d) -
                r;
            }
            if (
              e("#slider.with-header").next("#header:not(.transparent-header)")
                .length > 0 &&
              (a.hasClass("device-xl") || a.hasClass("device-lg"))
            )
              n -= s.outerHeight();
          }
          i.parents(".full-screen").length > 0 &&
            (n = i.parents(".full-screen").height()),
            (a.hasClass("device-sm") || a.hasClass("device-xs")) &&
              (i.hasClass("force-full-screen") || (n = "auto")),
            o && (n -= Number(o)),
            i.css("height", n),
            "slider" != i.attr("id") ||
              i.hasClass("canvas-slider-grid") ||
              (i.has(".swiper-slide") &&
                i.find(".swiper-slide").css("height", n));
        });
    },
    maxHeight: function () {
      if (U.length > 0) {
        if (U.hasClass("customjs")) return !0;
        U.each(function () {
          var t = e(this);
          t.find(".common-height").length > 0 &&
            SEMICOLON.initialize.commonHeight(
              t.find(".common-height:not(.customjs)")
            ),
            SEMICOLON.initialize.commonHeight(t);
        });
      }
    },
    commonHeight: function (t) {
      var a = 0;
      t.children("[class*=col-]").each(function () {
        var t = e(this).children();
        t.hasClass("max-height")
          ? (a = t.outerHeight())
          : t.outerHeight() > a && (a = t.outerHeight());
      }),
        t.children("[class*=col-]").each(function () {
          e(this).height(a);
        });
    },
    testimonialsGrid: function () {
      if (G.length > 0)
        if (
          a.hasClass("device-md") ||
          a.hasClass("device-lg") ||
          a.hasClass("device-xl")
        ) {
          var t = 0;
          G.each(function () {
            e(this)
              .find("li > .testimonial")
              .each(function () {
                e(this).height() > t && (t = e(this).height());
              }),
              e(this).find("li").height(t),
              (t = 0);
          });
        } else G.find("li").css({ height: "auto" });
    },
    lightbox: function () {
      if (!e().magnificPopup)
        return console.log("lightbox: Magnific Popup not Defined."), !0;
      var t = e('[data-lightbox="image"]'),
        i = e('[data-lightbox="gallery"]'),
        s = e('[data-lightbox="iframe"]'),
        n = e('[data-lightbox="inline"]'),
        o = e('[data-lightbox="ajax"]'),
        r = e('[data-lightbox="ajax-gallery"]');
      t.length > 0 &&
        t.magnificPopup({
          type: "image",
          closeOnContentClick: !0,
          closeBtnInside: !1,
          fixedContentPos: !0,
          mainClass: "mfp-no-margins mfp-fade",
          image: { verticalFit: !0 },
        }),
        i.length > 0 &&
          i.each(function () {
            var t = e(this);
            t
              .find('a[data-lightbox="gallery-item"]')
              .parent(".clone")
              .hasClass("clone") &&
              t
                .find('a[data-lightbox="gallery-item"]')
                .parent(".clone")
                .find('a[data-lightbox="gallery-item"]')
                .attr("data-lightbox", ""),
              t
                .find('a[data-lightbox="gallery-item"]')
                .parents(".cloned")
                .hasClass("cloned") &&
                t
                  .find('a[data-lightbox="gallery-item"]')
                  .parents(".cloned")
                  .find('a[data-lightbox="gallery-item"]')
                  .attr("data-lightbox", ""),
              t.magnificPopup({
                delegate: 'a[data-lightbox="gallery-item"]',
                type: "image",
                closeOnContentClick: !0,
                closeBtnInside: !1,
                fixedContentPos: !0,
                mainClass: "mfp-no-margins mfp-fade",
                image: { verticalFit: !0 },
                gallery: {
                  enabled: !0,
                  navigateByImgClick: !0,
                  preload: [0, 1],
                },
              });
          }),
        s.length > 0 &&
          s.magnificPopup({
            disableOn: 600,
            type: "iframe",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1,
          }),
        n.length > 0 &&
          n.magnificPopup({
            type: "inline",
            mainClass: "mfp-no-margins mfp-fade",
            closeBtnInside: !1,
            fixedContentPos: !0,
            overflowY: "scroll",
          }),
        o.length > 0 &&
          o.magnificPopup({
            type: "ajax",
            closeBtnInside: !1,
            callbacks: {
              ajaxContentAdded: function (e) {
                SEMICOLON.widget.loadFlexSlider(),
                  SEMICOLON.initialize.resizeVideos(),
                  SEMICOLON.widget.masonryThumbs();
              },
              open: function () {
                a.addClass("ohidden");
              },
              close: function () {
                a.removeClass("ohidden");
              },
            },
          }),
        r.length > 0 &&
          r.magnificPopup({
            delegate: 'a[data-lightbox="ajax-gallery-item"]',
            type: "ajax",
            closeBtnInside: !1,
            gallery: { enabled: !0, preload: 0, navigateByImgClick: !1 },
            callbacks: {
              ajaxContentAdded: function (e) {
                SEMICOLON.widget.loadFlexSlider(),
                  SEMICOLON.initialize.resizeVideos(),
                  SEMICOLON.widget.masonryThumbs();
              },
              open: function () {
                a.addClass("ohidden");
              },
              close: function () {
                a.removeClass("ohidden");
              },
            },
          });
    },
    modal: function () {
      if (!e().magnificPopup)
        return console.log("modal: Magnific Popup not Defined."), !0;
      var t = e(".modal-on-load:not(.customjs)");
      t.length > 0 &&
        t.each(function () {
          var t = e(this),
            a = t.attr("data-target"),
            i = a.split("#")[1],
            s = t.attr("data-delay"),
            n = t.attr("data-timeout"),
            o = t.attr("data-animate-in"),
            r = t.attr("data-animate-out");
          if (
            (t.hasClass("enable-cookie") || e.removeCookie(i),
            t.hasClass("enable-cookie"))
          ) {
            var l = e.cookie(i);
            if (void 0 !== l && "0" == l) return !0;
          }
          s = s ? Number(s) + 1500 : 1500;
          setTimeout(function () {
            e.magnificPopup.open(
              {
                items: { src: a },
                type: "inline",
                mainClass: "mfp-no-margins mfp-fade",
                closeBtnInside: !0,
                fixedContentPos: !0,
                removalDelay: 500,
                callbacks: {
                  open: function () {
                    "" != o && e(a).addClass(o + " animated");
                  },
                  beforeClose: function () {
                    "" != r && e(a).removeClass(o).addClass(r);
                  },
                  afterClose: function () {
                    ("" == o && "" == r) ||
                      e(a).removeClass(o + " " + r + " animated"),
                      t.hasClass("enable-cookie") && e.cookie(i, "0");
                  },
                },
              },
              0
            );
          }, Number(s));
          if ("" != n)
            setTimeout(function () {
              e.magnificPopup.close();
            }, Number(s) + Number(n));
        });
    },
    resizeVideos: function () {
      if (!e().fitVids)
        return console.log("resizeVideos: FitVids not Defined."), !0;
      e(
        "#content,#footer,.slider-element:not(.revslider-wrap),.landing-offer-media,.portfolio-ajax-modal,.mega-menu-column"
      ).fitVids({
        customSelector:
          "iframe[src^='http://www.dailymotion.com/embed'], iframe[src*='maps.google.com'], iframe[src*='google.com/maps']",
        ignore: ".no-fv",
      });
    },
    imageFade: function () {
      e(".image_fade").hover(
        function () {
          e(this).filter(":not(:animated)").animate({ opacity: 0.8 }, 400);
        },
        function () {
          e(this).animate({ opacity: 1 }, 400);
        }
      );
    },
    blogTimelineEntries: function () {
      e(".post-timeline.grid-2")
        .find(".entry")
        .each(function () {
          "0px" == e(this).inlineStyle("left")
            ? e(this).removeClass("alt")
            : e(this).addClass("alt"),
            e(this).find(".entry-timeline").fadeIn();
        }),
        e(".entry.entry-date-section")
          .next()
          .next()
          .find(".entry-timeline")
          .css({ top: "70px" });
    },
    pageTransition: function () {
      if (a.hasClass("no-transition")) return !0;
      if (!e().animsition)
        return (
          a.addClass("no-transition"),
          console.log("pageTransition: Animsition not Defined."),
          !0
        );
      window.onpageshow = function (e) {
        e.persisted && window.location.reload();
      };
      var t = a.attr("data-animation-in"),
        s = a.attr("data-animation-out"),
        n = a.attr("data-speed-in"),
        o = a.attr("data-speed-out"),
        r = !1,
        l = a.attr("data-loader-timeout"),
        d = a.attr("data-loader"),
        c = a.attr("data-loader-color"),
        u = a.attr("data-loader-html"),
        f = "",
        h = "",
        m = "",
        p = "",
        g = "";
      t || (t = "fadeIn"),
        s || (s = "fadeOut"),
        n || (n = 1500),
        o || (o = 800),
        u ||
          (u =
            '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>'),
        l ? ((r = !0), (l = Number(l))) : ((r = !1), (l = !1)),
        c &&
          ("theme" == c
            ? ((m = " bgcolor"),
              " border-color",
              (p = ' class="bgcolor"'),
              (g = ' class="border-color"'))
            : ((f = ' style="background-color:' + c + ';"'),
              (h = ' style="border-color:' + c + ';"')),
          (u =
            '<div class="css3-spinner-bounce1' +
            m +
            '"' +
            f +
            '></div><div class="css3-spinner-bounce2' +
            m +
            '"' +
            f +
            '></div><div class="css3-spinner-bounce3' +
            m +
            '"' +
            f +
            "></div>")),
        "2" == d
          ? (u = '<div class="css3-spinner-flipper' + m + '"' + f + "></div>")
          : "3" == d
          ? (u =
              '<div class="css3-spinner-double-bounce1' +
              m +
              '"' +
              f +
              '></div><div class="css3-spinner-double-bounce2' +
              m +
              '"' +
              f +
              "></div>")
          : "4" == d
          ? (u =
              '<div class="css3-spinner-rect1' +
              m +
              '"' +
              f +
              '></div><div class="css3-spinner-rect2' +
              m +
              '"' +
              f +
              '></div><div class="css3-spinner-rect3' +
              m +
              '"' +
              f +
              '></div><div class="css3-spinner-rect4' +
              m +
              '"' +
              f +
              '></div><div class="css3-spinner-rect5' +
              m +
              '"' +
              f +
              "></div>")
          : "5" == d
          ? (u =
              '<div class="css3-spinner-cube1' +
              m +
              '"' +
              f +
              '></div><div class="css3-spinner-cube2' +
              m +
              '"' +
              f +
              "></div>")
          : "6" == d
          ? (u = '<div class="css3-spinner-scaler' + m + '"' + f + "></div>")
          : "7" == d
          ? (u =
              '<div class="css3-spinner-grid-pulse"><div' +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div></div>")
          : "8" == d
          ? (u =
              '<div class="css3-spinner-clip-rotate"><div' +
              g +
              h +
              "></div></div>")
          : "9" == d
          ? (u =
              '<div class="css3-spinner-ball-rotate"><div' +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div></div>")
          : "10" == d
          ? (u =
              '<div class="css3-spinner-zig-zag"><div' +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div></div>")
          : "11" == d
          ? (u =
              '<div class="css3-spinner-triangle-path"><div' +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div></div>")
          : "12" == d
          ? (u =
              '<div class="css3-spinner-ball-scale-multiple"><div' +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div></div>")
          : "13" == d
          ? (u =
              '<div class="css3-spinner-ball-pulse-sync"><div' +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div><div" +
              p +
              f +
              "></div></div>")
          : "14" == d &&
            (u =
              '<div class="css3-spinner-scale-ripple"><div' +
              g +
              h +
              "></div><div" +
              g +
              h +
              "></div><div" +
              g +
              h +
              "></div></div>"),
        i.animsition({
          inClass: t,
          outClass: s,
          inDuration: Number(n),
          outDuration: Number(o),
          linkElement:
            '#primary-menu:not(.on-click) ul li a:not([target="_blank"]):not([href*="#"]):not([data-lightbox]):not([href^="mailto"]):not([href^="tel"]):not([href^="sms"]):not([href^="call"])',
          loading: !0,
          loadingParentElement: "body",
          loadingClass: "css3-spinner",
          loadingInner: u,
          timeout: r,
          timeoutCountdown: l,
          onLoadEvent: !0,
          browser: ["animation-duration", "-webkit-animation-duration"],
          overlay: !1,
          overlayClass: "animsition-overlay-slide",
          overlayParentElement: "body",
        });
    },
    lazyLoad: function () {
      var t = e("[data-lazyload]");
      if (!e().appear) return console.log("lazyLoad: Appear not Defined."), !0;
      t.length > 0 &&
        t.each(function () {
          var t = e(this),
            a = t.attr("data-lazyload");
          t
            .attr("src", "images/blank.svg")
            .css({
              background:
                "url(images/preloader.gif) no-repeat center center #FFF",
            }),
            t.appear(
              function () {
                t.css({ background: "none" })
                  .removeAttr("width")
                  .removeAttr("height")
                  .attr("src", a);
              },
              { accX: 0, accY: 120 },
              "easeInCubic"
            );
        });
    },
    topScrollOffset: function () {
      var e = 0;
      return (
        (!a.hasClass("device-xl") && !a.hasClass("device-lg")) ||
        SEMICOLON.isMobile.any()
          ? (e = 40)
          : ((e = s.hasClass("sticky-header")
              ? S.hasClass("dots-menu")
                ? 100
                : 144
              : S.hasClass("dots-menu")
              ? 140
              : 184),
            S.length || (e = s.hasClass("sticky-header") ? 100 : 140)),
        e
      );
    },
    defineColumns: function (e) {
      var t = 4,
        i = e.attr("data-xl-col"),
        s = e.attr("data-lg-col"),
        n = e.attr("data-md-col"),
        o = e.attr("data-sm-col"),
        r = e.attr("data-xs-col");
      return (
        e.hasClass("portfolio-full")
          ? ((t = e.hasClass("portfolio-3")
              ? 3
              : e.hasClass("portfolio-5")
              ? 5
              : e.hasClass("portfolio-6")
              ? 6
              : 4),
            !a.hasClass("device-md") || (4 != t && 5 != t && 6 != t)
              ? !a.hasClass("device-sm") ||
                (3 != t && 4 != t && 5 != t && 6 != t)
                ? a.hasClass("device-xs") && (t = 1)
                : (t = 2)
              : (t = 3))
          : e.hasClass("masonry-thumbs") &&
            (t = e.hasClass("grid-2")
              ? 2
              : e.hasClass("grid-3")
              ? 3
              : e.hasClass("grid-5")
              ? 5
              : e.hasClass("grid-6")
              ? 6
              : 4),
        a.hasClass("device-xl")
          ? i && (t = Number(i))
          : a.hasClass("device-lg")
          ? s && (t = Number(s))
          : a.hasClass("device-md")
          ? n && (t = Number(n))
          : a.hasClass("device-sm")
          ? o && (t = Number(o))
          : a.hasClass("device-xs") && r && (t = Number(r)),
        t
      );
    },
    setFullColumnWidth: function (t) {
      if (!e().isotope)
        return console.log("setFullColumnWidth: Isotope not Defined."), !0;
      if ((t.css({ width: "" }), t.hasClass("portfolio-full"))) {
        var i = SEMICOLON.initialize.defineColumns(t),
          s = t.width(),
          n = Math.floor(s / i);
        if (a.hasClass("device-xs")) var o = 1;
        else o = 0;
        t.find(".portfolio-item").each(function (t) {
          if (0 == o && e(this).hasClass("wide")) var a = 2 * n;
          else a = n;
          e(this).css({ width: a + "px" });
        });
      } else if (t.hasClass("masonry-thumbs")) {
        i = SEMICOLON.initialize.defineColumns(t);
        (s = t.innerWidth()) == l &&
          ((s = 1.005 * l), t.css({ width: s + "px" }));
        n = s / i;
        (n = Math.floor(n)) * i >= s && t.css({ "margin-right": "-1px" }),
          t.children("a").css({ width: n + "px" });
        var r = t.find("a:eq(0)").outerWidth();
        t.isotope({ masonry: { columnWidth: r } });
        var d = t.attr("data-big");
        if (d) {
          d = d.split(",");
          var c = "",
            u = "";
          for (u = 0; u < d.length; u++)
            (c = Number(d[u]) - 1),
              t.find("a:eq(" + c + ")").css({ width: 2 * r + "px" });
          setTimeout(function () {
            t.isotope("layout");
          }, 1e3);
        }
      }
    },
    aspectResizer: function () {
      var t = e(".aspect-resizer");
      t.length > 0 &&
        t.each(function () {
          var t = e(this);
          t.inlineStyle("width"),
            t.inlineStyle("height"),
            t.parent().innerWidth();
        });
    },
    dataResponsiveClasses: function () {
      var t = e("[data-class-xs]"),
        i = e("[data-class-sm]"),
        s = e("[data-class-md]"),
        n = e("[data-class-lg]"),
        o = e("[data-class-xl]");
      t.length > 0 &&
        t.each(function () {
          var t = e(this),
            i = t.attr("data-class-xs"),
            s =
              t.attr("data-class-sm") +
              " " +
              t.attr("data-class-md") +
              " " +
              t.attr("data-class-lg") +
              " " +
              t.attr("data-class-xl");
          a.hasClass("device-xs") && (t.removeClass(s), t.addClass(i));
        }),
        i.length > 0 &&
          i.each(function () {
            var t = e(this),
              i = t.attr("data-class-sm"),
              s =
                t.attr("data-class-xs") +
                " " +
                t.attr("data-class-md") +
                " " +
                t.attr("data-class-lg") +
                " " +
                t.attr("data-class-xl");
            a.hasClass("device-sm") && (t.removeClass(s), t.addClass(i));
          }),
        s.length > 0 &&
          s.each(function () {
            var t = e(this),
              i = t.attr("data-class-md"),
              s =
                t.attr("data-class-xs") +
                " " +
                t.attr("data-class-sm") +
                " " +
                t.attr("data-class-lg") +
                " " +
                t.attr("data-class-xl");
            a.hasClass("device-md") && (t.removeClass(s), t.addClass(i));
          }),
        n.length > 0 &&
          n.each(function () {
            var t = e(this),
              i = t.attr("data-class-lg"),
              s =
                t.attr("data-class-xs") +
                " " +
                t.attr("data-class-sm") +
                " " +
                t.attr("data-class-md") +
                " " +
                t.attr("data-class-xl");
            a.hasClass("device-lg") && (t.removeClass(s), t.addClass(i));
          }),
        o.length > 0 &&
          o.each(function () {
            var t = e(this),
              i = t.attr("data-class-xl"),
              s =
                t.attr("data-class-xs") +
                " " +
                t.attr("data-class-sm") +
                " " +
                t.attr("data-class-md") +
                " " +
                t.attr("data-class-lg");
            a.hasClass("device-xl") && (t.removeClass(s), t.addClass(i));
          });
    },
    dataResponsiveHeights: function () {
      var t = e("[data-height-xs]"),
        i = e("[data-height-sm]"),
        s = e("[data-height-md]"),
        n = e("[data-height-lg]"),
        o = e("[data-height-xl]");
      t.length > 0 &&
        t.each(function () {
          var t = e(this),
            i = t.attr("data-height-xs");
          a.hasClass("device-xs") && "" != i && t.css("height", i);
        }),
        i.length > 0 &&
          i.each(function () {
            var t = e(this),
              i = t.attr("data-height-sm");
            a.hasClass("device-sm") && "" != i && t.css("height", i);
          }),
        s.length > 0 &&
          s.each(function () {
            var t = e(this),
              i = t.attr("data-height-md");
            a.hasClass("device-md") && "" != i && t.css("height", i);
          }),
        n.length > 0 &&
          n.each(function () {
            var t = e(this),
              i = t.attr("data-height-lg");
            a.hasClass("device-lg") && "" != i && t.css("height", i);
          }),
        o.length > 0 &&
          o.each(function () {
            var t = e(this),
              i = t.attr("data-height-xl");
            a.hasClass("device-xl") && "" != i && t.css("height", i);
          });
    },
    stickFooterOnSmall: function () {
      r.css({ "margin-top": "" });
      var e = t.height(),
        s = i.height();
      !a.hasClass("sticky-footer") &&
        r.length > 0 &&
        i.has("#footer") &&
        e > s &&
        r.css({ "margin-top": e - s });
    },
    stickyFooter: function () {
      if (
        a.hasClass("sticky-footer") &&
        r.length > 0 &&
        (a.hasClass("device-xl") || a.hasClass("device-lg"))
      ) {
        var e = r.outerHeight();
        o.css({ "margin-bottom": e });
      } else o.css({ "margin-bottom": 0 });
    },
  }),
    (SEMICOLON.header = {
      init: function () {
        SEMICOLON.header.superfish(),
          SEMICOLON.header.menufunctions(),
          SEMICOLON.header.fullWidthMenu(),
          SEMICOLON.header.overlayMenu(),
          SEMICOLON.header.stickyMenu(),
          SEMICOLON.header.stickyPageMenu(),
          SEMICOLON.header.sideHeader(),
          SEMICOLON.header.sidePanel(),
          SEMICOLON.header.onePageScroll(),
          SEMICOLON.header.onepageScroller(),
          SEMICOLON.header.logo(),
          SEMICOLON.header.topsearch(),
          SEMICOLON.header.topcart();
      },
      superfish: function () {
        if (
          ((a.hasClass("device-xl") || a.hasClass("device-lg")) &&
            (e("#primary-menu ul ul, #primary-menu ul .mega-menu-content").css(
              "display",
              "block"
            ),
            SEMICOLON.header.menuInvert(),
            e("#primary-menu ul ul, #primary-menu ul .mega-menu-content").css(
              "display",
              ""
            )),
          !e().superfish)
        )
          return (
            a.addClass("no-superfish"),
            console.log("superfish: Superfish not Defined."),
            !0
          );
        e(
          "body:not(.side-header) #primary-menu:not(.on-click) > ul, body:not(.side-header) #primary-menu:not(.on-click) > div > ul:not(.dropdown-menu), .top-links:not(.on-click) > ul"
        ).superfish({
          popUpSelector: "ul,.mega-menu-content,.top-link-section",
          delay: 250,
          speed: 350,
          animation: { opacity: "show" },
          animationOut: { opacity: "hide" },
          cssArrows: !1,
          onShow: function () {
            var t = e(this);
            t.find(".owl-carousel.customjs").length > 0 &&
              (t.find(".owl-carousel").removeClass("customjs"),
              SEMICOLON.widget.carousel()),
              t.hasClass("mega-menu-content") &&
                t.find(".widget").length > 0 &&
                (a.hasClass("device-xl") || a.hasClass("device-lg")
                  ? setTimeout(function () {
                      SEMICOLON.initialize.commonHeight(t);
                    }, 200)
                  : t.children().height(""));
          },
        }),
          e("body.side-header #primary-menu:not(.on-click) > ul").superfish({
            popUpSelector: "ul",
            delay: 250,
            speed: 350,
            animation: { opacity: "show", height: "show" },
            animationOut: { opacity: "hide", height: "hide" },
            cssArrows: !1,
          });
      },
      menuInvert: function () {
        e("#primary-menu .mega-menu-content, #primary-menu ul ul").each(
          function (t, a) {
            var i = e(a),
              s = i.offset(),
              n = i.width(),
              o = s.left;
            l - (n + o) < 0 && i.addClass("menu-pos-invert");
          }
        );
      },
      menufunctions: function () {
        e("#primary-menu ul li:has(ul)").addClass("sub-menu"),
          e(
            ".top-links ul li:has(ul) > a, #primary-menu.with-arrows > ul > li:has(ul) > a > div, #primary-menu.with-arrows > div > ul > li:has(ul) > a > div, #page-menu nav ul li:has(ul) > a > div"
          ).append('<i class="icon-angle-down"></i>'),
          e(".top-links > ul").addClass("clearfix"),
          (a.hasClass("device-xl") || a.hasClass("device-lg")) &&
            (e("#primary-menu.sub-title > ul > li").hover(
              function () {
                e(this).prev().css({ backgroundImage: "none" });
              },
              function () {
                e(this)
                  .prev()
                  .css({
                    backgroundImage: 'url("images/icons/menu-divider.png")',
                  });
              }
            ),
            e("#primary-menu.sub-title")
              .children("ul")
              .children(".current")
              .prev()
              .css({ backgroundImage: "none" })),
          e("#primary-menu.on-click li:has(ul) > a").on("click", function (t) {
            e(this)
              .parents(".sub-menu")
              .siblings()
              .find("ul,.mega-menu-content")
              .removeClass("d-block"),
              e(this)
                .parent("li")
                .children("ul,.mega-menu-content")
                .toggleClass("d-block"),
              t.preventDefault();
          }),
          SEMICOLON.isMobile.Android() &&
            e("#primary-menu ul li.sub-menu")
              .children("a")
              .on("touchstart", function (t) {
                e(this).parent("li.sub-menu").hasClass("sfHover") ||
                  t.preventDefault();
              }),
          SEMICOLON.isMobile.Windows() &&
            (e().superfish
              ? e(
                  "#primary-menu > ul, #primary-menu > div > ul,.top-links > ul"
                )
                  .superfish("destroy")
                  .addClass("windows-mobile-menu")
              : (e(
                  "#primary-menu > ul, #primary-menu > div > ul,.top-links > ul"
                ).addClass("windows-mobile-menu"),
                console.log("menufunctions: Superfish not defined.")),
            e("#primary-menu ul li:has(ul)").append(
              '<a href="#" class="wn-submenu-trigger"><i class="icon-angle-down"></i></a>'
            ),
            e("#primary-menu ul li.sub-menu")
              .children("a.wn-submenu-trigger")
              .click(function (t) {
                return (
                  e(this).parent().toggleClass("open"),
                  e(this)
                    .parent()
                    .find("> ul, > .mega-menu-content")
                    .stop(!0, !0)
                    .toggle(),
                  !1
                );
              }));
      },
      fullWidthMenu: function () {
        a.hasClass("stretched")
          ? (s.find(".container-fullwidth").length > 0 &&
              e(".mega-menu .mega-menu-content").css({
                width: i.width() - 120,
              }),
            s.hasClass("full-header") &&
              e(".mega-menu .mega-menu-content").css({ width: i.width() - 60 }))
          : (s.find(".container-fullwidth").length > 0 &&
              e(".mega-menu .mega-menu-content").css({
                width: i.width() - 120,
              }),
            s.hasClass("full-header") &&
              e(".mega-menu .mega-menu-content").css({
                width: i.width() - 80,
              }));
      },
      overlayMenu: function () {
        if (a.hasClass("overlay-menu")) {
          var i = e("#primary-menu").children("ul").children("li"),
            s = i.outerHeight(),
            n = i.length * s,
            o = (t.height() - n) / 2;
          e("#primary-menu")
            .children("ul")
            .children("li:first-child")
            .css({ "margin-top": o + "px" });
        }
      },
      stickyMenu: function (i) {
        t.scrollTop() > i
          ? a.hasClass("device-xl") || a.hasClass("device-lg")
            ? (e("body:not(.side-header) #header:not(.no-sticky)").addClass(
                "sticky-header"
              ),
              n.hasClass("force-not-dark") || n.removeClass("not-dark"),
              SEMICOLON.header.stickyMenuClass())
            : (a.hasClass("device-sm") ||
                a.hasClass("device-xs") ||
                a.hasClass("device-md")) &&
              a.hasClass("sticky-responsive-menu") &&
              (e("#header:not(.no-sticky)").addClass(
                "responsive-sticky-header"
              ),
              SEMICOLON.header.stickyMenuClass())
          : SEMICOLON.header.removeStickyness();
      },
      stickyPageMenu: function (i) {
        t.scrollTop() > i
          ? a.hasClass("device-xl") || a.hasClass("device-lg")
            ? e("#page-menu:not(.dots-menu,.no-sticky)").addClass(
                "sticky-page-menu"
              )
            : (a.hasClass("device-sm") ||
                a.hasClass("device-xs") ||
                a.hasClass("device-md")) &&
              a.hasClass("sticky-responsive-pagemenu") &&
              e("#page-menu:not(.dots-menu,.no-sticky)").addClass(
                "sticky-page-menu"
              )
          : e("#page-menu:not(.dots-menu,.no-sticky)").removeClass(
              "sticky-page-menu"
            );
      },
      removeStickyness: function () {
        s.hasClass("sticky-header") &&
          (e("body:not(.side-header) #header:not(.no-sticky)").removeClass(
            "sticky-header"
          ),
          s.removeClass().addClass(d),
          n.removeClass().addClass(c),
          n.hasClass("force-not-dark") || n.removeClass("not-dark"),
          SEMICOLON.slider.swiperSliderMenu(),
          SEMICOLON.slider.revolutionSliderMenu()),
          s.hasClass("responsive-sticky-header") &&
            e("body.sticky-responsive-menu #header").removeClass(
              "responsive-sticky-header"
            ),
          (a.hasClass("device-sm") ||
            a.hasClass("device-xs") ||
            a.hasClass("device-md")) &&
            void 0 === f &&
            (s.removeClass().addClass(d),
            n.removeClass().addClass(c),
            n.hasClass("force-not-dark") || n.removeClass("not-dark"));
      },
      sideHeader: function () {
        e("#header-trigger").click(function () {
          return e("body.open-header").toggleClass("side-header-open"), !1;
        });
      },
      sidePanel: function () {
        e(".side-panel-trigger").click(function () {
          return (
            a.toggleClass("side-panel-open"),
            a.hasClass("device-touch") &&
              a.hasClass("side-push-panel") &&
              a.toggleClass("ohidden"),
            !1
          );
        });
      },
      onePageScroll: function () {
        if (N.length > 0) {
          var t = N.attr("data-speed"),
            i = N.attr("data-offset"),
            s = N.attr("data-easing");
          t || (t = 1e3),
            s || (s = "easeOutQuad"),
            N.find("a[data-href]").click(function () {
              var n = e(this),
                o = n.attr("data-href"),
                r = n.attr("data-speed"),
                d = n.attr("data-offset"),
                c = n.attr("data-easing");
              if (e(o).length > 0) {
                if (i) u = i;
                else var u = SEMICOLON.initialize.topScrollOffset();
                r || (r = t),
                  d || (d = u),
                  c || (c = s),
                  N.hasClass("no-offset") && (d = 0),
                  (x = Number(d)),
                  N.find("li").removeClass("current"),
                  N.find('a[data-href="' + o + '"]')
                    .parent("li")
                    .addClass("current"),
                  (l < 768 || a.hasClass("overlay-menu")) &&
                    (e("#primary-menu").find("ul.mobile-primary-menu").length >
                    0
                      ? e(
                          "#primary-menu > ul.mobile-primary-menu, #primary-menu > div > ul.mobile-primary-menu"
                        ).toggleClass("d-block", !1)
                      : e(
                          "#primary-menu > ul, #primary-menu > div > ul"
                        ).toggleClass("d-block", !1),
                    S.toggleClass("pagemenu-active", !1),
                    a.toggleClass("primary-menu-open", !1)),
                  e("html,body")
                    .stop(!0)
                    .animate(
                      { scrollTop: e(o).offset().top - Number(d) },
                      Number(r),
                      c
                    ),
                  (x = Number(d));
              }
              return !1;
            });
        }
      },
      onepageScroller: function () {
        N.find("li").removeClass("current"),
          N.find(
            'a[data-href="#' + SEMICOLON.header.onePageCurrentSection() + '"]'
          )
            .parent("li")
            .addClass("current");
      },
      onePageCurrentSection: function () {
        var i = "home",
          s = n.outerHeight();
        return (
          a.hasClass("side-header") && (s = 0),
          J.each(function (a) {
            var n = e(this).offset().top,
              o = t.scrollTop();
            o + (s + x) >= n &&
              o < n + e(this).height() &&
              e(this).attr("id") != i &&
              (i = e(this).attr("id"));
          }),
          i
        );
      },
      logo: function () {
        (!s.hasClass("dark") && !a.hasClass("dark")) || n.hasClass("not-dark")
          ? (p && h.find("img").attr("src", p),
            g && m.find("img").attr("src", g))
          : (v && h.find("img").attr("src", v),
            C && m.find("img").attr("src", C)),
          s.hasClass("sticky-header") &&
            (O && h.find("img").attr("src", O),
            b && m.find("img").attr("src", b)),
          (a.hasClass("device-sm") || a.hasClass("device-xs")) &&
            (y && h.find("img").attr("src", y),
            w && m.find("img").attr("src", w));
      },
      stickyMenuClass: function () {
        if (u) var e = u.split(/ +/);
        else e = "";
        var t = e.length;
        if (t > 0) {
          var a = 0;
          for (a = 0; a < t; a++)
            "not-dark" == e[a]
              ? (s.removeClass("dark"), n.addClass("not-dark"))
              : "dark" == e[a]
              ? (n.removeClass("not-dark force-not-dark"),
                s.hasClass(e[a]) || s.addClass(e[a]))
              : s.hasClass(e[a]) || s.addClass(e[a]);
        }
      },
      responsiveMenuClass: function () {
        if (
          a.hasClass("device-sm") ||
          a.hasClass("device-xs") ||
          a.hasClass("device-md")
        ) {
          if (f) var e = f.split(/ +/);
          else e = "";
          var t = e.length;
          if (t > 0) {
            var i = 0;
            for (i = 0; i < t; i++)
              "not-dark" == e[i]
                ? (s.removeClass("dark"), n.addClass("not-dark"))
                : "dark" == e[i]
                ? (n.removeClass("not-dark force-not-dark"),
                  s.hasClass(e[i]) || s.addClass(e[i]))
                : s.hasClass(e[i]) || s.addClass(e[i]);
          }
          SEMICOLON.header.logo();
        }
      },
      topsocial: function () {
        q.length > 0 &&
          (a.hasClass("device-lg") || a.hasClass("device-xl")
            ? (q.show(),
              q.find("a").css({ width: 40 }),
              q.find(".ts-text").each(function () {
                var t = e(this)
                    .clone()
                    .css({
                      visibility: "hidden",
                      display: "inline-block",
                      "font-size": "13px",
                      "font-weight": "bold",
                    })
                    .appendTo(a),
                  i = t.innerWidth() + 52;
                e(this).parent("a").attr("data-hover-width", i), t.remove();
              }),
              q.find("a").hover(
                function () {
                  e(this).find(".ts-text").length > 0 &&
                    e(this).css({ width: e(this).attr("data-hover-width") });
                },
                function () {
                  e(this).css({ width: 40 });
                }
              ))
            : (q.show(),
              q.find("a").css({ width: 40 }),
              q.find("a").each(function () {
                var t = e(this).find(".ts-text").text();
                e(this).attr("title", t);
              }),
              q.find("a").hover(
                function () {
                  e(this).css({ width: 40 });
                },
                function () {
                  e(this).css({ width: 40 });
                }
              ),
              a.hasClass("device-xs") && (q.hide(), q.slice(0, 8).show())));
      },
      topsearch: function () {
        e(document).on("click", function (t) {
          e(t.target).closest("#top-search").length ||
            a.toggleClass("top-search-open", !1),
            e(t.target).closest("#top-cart").length ||
              R.toggleClass("top-cart-open", !1),
            e(t.target).closest("#page-menu").length ||
              S.toggleClass("pagemenu-active", !1),
            e(t.target).closest("#side-panel").length ||
              a.toggleClass("side-panel-open", !1),
            e(t.target).closest("#primary-menu").length ||
              e("#primary-menu.on-click > ul")
                .find(".d-block")
                .removeClass("d-block"),
            e(t.target).closest("#primary-menu.mobile-menu-off-canvas > ul")
              .length ||
              e("#primary-menu.mobile-menu-off-canvas > ul").toggleClass(
                "d-block",
                !1
              ),
            e(t.target).closest(
              "#primary-menu.mobile-menu-off-canvas > div > ul"
            ).length ||
              e("#primary-menu.mobile-menu-off-canvas > div > ul").toggleClass(
                "d-block",
                !1
              );
        }),
          e("#top-search-trigger").click(function (t) {
            a.toggleClass("top-search-open"),
              R.toggleClass("top-cart-open", !1),
              e("#primary-menu > ul, #primary-menu > div > ul").toggleClass(
                "d-block",
                !1
              ),
              S.toggleClass("pagemenu-active", !1),
              a.hasClass("top-search-open") && _.find("input").focus(),
              t.stopPropagation(),
              t.preventDefault();
          });
      },
      topcart: function () {
        e("#top-cart-trigger").click(function (e) {
          S.toggleClass("pagemenu-active", !1),
            R.toggleClass("top-cart-open"),
            e.stopPropagation(),
            e.preventDefault();
        });
      },
    }),
    (SEMICOLON.slider = {
      init: function () {
        SEMICOLON.slider.sliderParallaxDimensions(),
          SEMICOLON.slider.sliderRun(),
          SEMICOLON.slider.sliderParallax(),
          SEMICOLON.slider.sliderElementsFade(),
          SEMICOLON.slider.captionPosition();
      },
      sliderParallaxDimensions: function () {
        if (E.find(".slider-parallax-inner").length < 1) return !0;
        if (
          a.hasClass("device-xl") ||
          a.hasClass("device-lg") ||
          a.hasClass("device-md")
        ) {
          var e = E.outerHeight(),
            t = E.outerWidth();
          (E.hasClass("revslider-wrap") ||
            E.find(".carousel-widget").length > 0) &&
            ((e = E.find(".slider-parallax-inner")
              .children()
              .first()
              .outerHeight()),
            E.height(e)),
            E.find(".slider-parallax-inner").height(e),
            a.hasClass("side-header") &&
              E.find(".slider-parallax-inner").width(t),
            a.hasClass("stretched") ||
              ((t = i.outerWidth()), E.find(".slider-parallax-inner").width(t));
        } else E.find(".slider-parallax-inner").css({ width: "", height: "" });
        T && T.update();
      },
      sliderRun: function () {
        if ("undefined" == typeof Swiper)
          return console.log("sliderRun: Swiper not Defined."), !0;
        L.filter(":not(.customjs)").each(function () {
          if (e(this).hasClass("swiper_wrapper")) {
            var t = e(this).filter(".swiper_wrapper"),
              a = t.attr("data-direction"),
              i = t.attr("data-speed"),
              s = t.attr("data-autoplay"),
              n = t.attr("data-loop"),
              o = t.attr("data-effect"),
              r = t.attr("data-grab"),
              l = t.find(".slide-number-total"),
              d = t.find(".slide-number-current"),
              c = t.attr("data-video-autoplay");
            if (
              (i || (i = 300),
              a || (a = "horizontal"),
              (s = s ? Number(s) : 999999999),
              (n = "true" == n),
              o || (o = "slide"),
              (r = "false" != r),
              (c = "false" != c),
              t.find(".swiper-pagination").length > 0)
            )
              var u = t.find(".swiper-pagination"),
                f = !0;
            else (u = ""), (f = !1);
            var h = t.find(".slider-arrow-right"),
              m = t.find(".slider-arrow-left");
            (T = new Swiper(t.find(".swiper-parent"), {
              direction: a,
              speed: Number(i),
              autoplay: { delay: s },
              loop: n,
              effect: o,
              slidesPerView: 1,
              grabCursor: r,
              pagination: { el: u, clickable: f },
              navigation: { prevEl: m, nextEl: h },
              on: {
                init: function (a) {
                  SEMICOLON.slider.sliderParallaxDimensions(),
                    t.find(".yt-bg-player").removeClass("customjs"),
                    SEMICOLON.widget.youtubeBgVideo(),
                    e(".swiper-slide-active [data-caption-animate]").each(
                      function () {
                        var t = e(this),
                          a = t.attr("data-caption-delay"),
                          i = 0;
                        if (
                          ((i = a ? Number(a) + 750 : 750),
                          !t.hasClass("animated"))
                        ) {
                          t.addClass("not-animated");
                          var s = t.attr("data-caption-animate");
                          setTimeout(function () {
                            t.removeClass("not-animated").addClass(
                              s + " animated"
                            );
                          }, i);
                        }
                      }
                    ),
                    t.find("[data-caption-animate]").each(function () {
                      var t = e(this),
                        a = t.attr("data-caption-animate");
                      if (
                        t
                          .parents(".swiper-slide")
                          .hasClass("swiper-slide-active")
                      )
                        return !0;
                      t.removeClass("animated")
                        .removeClass(a)
                        .addClass("not-animated");
                    }),
                    SEMICOLON.slider.swiperSliderMenu();
                },
                slideChangeTransitionStart: function (a) {
                  d.length > 0 &&
                    (1 == n
                      ? d.html(
                          Number(
                            t
                              .find(".swiper-slide.swiper-slide-active")
                              .attr("data-swiper-slide-index")
                          ) + 1
                        )
                      : d.html(T.activeIndex + 1)),
                    t.find("[data-caption-animate]").each(function () {
                      var t = e(this),
                        a = t.attr("data-caption-animate");
                      if (
                        t
                          .parents(".swiper-slide")
                          .hasClass("swiper-slide-active")
                      )
                        return !0;
                      t.removeClass("animated")
                        .removeClass(a)
                        .addClass("not-animated");
                    }),
                    SEMICOLON.slider.swiperSliderMenu();
                },
                slideChangeTransitionEnd: function (a) {
                  t.find(".swiper-slide").each(function () {
                    var t = e(this);
                    t.find("video").length > 0 &&
                      1 == c &&
                      t.find("video").get(0).pause(),
                      t.find(".yt-bg-player.mb_YTPlayer:not(.customjs)")
                        .length > 0 &&
                        t
                          .find(".yt-bg-player.mb_YTPlayer:not(.customjs)")
                          .YTPPause();
                  }),
                    t
                      .find('.swiper-slide:not(".swiper-slide-active")')
                      .each(function () {
                        var t = e(this);
                        t.find("video").length > 0 &&
                          0 != t.find("video").get(0).currentTime &&
                          (t.find("video").get(0).currentTime = 0),
                          t.find(".yt-bg-player.mb_YTPlayer:not(.customjs)")
                            .length > 0 &&
                            t
                              .find(".yt-bg-player.mb_YTPlayer:not(.customjs)")
                              .YTPGetPlayer()
                              .seekTo(
                                t
                                  .find(
                                    ".yt-bg-player.mb_YTPlayer:not(.customjs)"
                                  )
                                  .attr("data-start")
                              );
                      }),
                    t.find(".swiper-slide.swiper-slide-active").find("video")
                      .length > 0 &&
                      1 == c &&
                      t
                        .find(".swiper-slide.swiper-slide-active")
                        .find("video")
                        .get(0)
                        .play(),
                    t
                      .find(".swiper-slide.swiper-slide-active")
                      .find(".yt-bg-player.mb_YTPlayer:not(.customjs)").length >
                      0 &&
                      1 == c &&
                      t
                        .find(".swiper-slide.swiper-slide-active")
                        .find(".yt-bg-player.mb_YTPlayer:not(.customjs)")
                        .YTPPlay(),
                    t
                      .find(
                        ".swiper-slide.swiper-slide-active [data-caption-animate]"
                      )
                      .each(function () {
                        var t = e(this),
                          a = t.attr("data-caption-delay"),
                          i = 0;
                        if (
                          ((i = a ? Number(a) + 300 : 300),
                          !t.hasClass("animated"))
                        ) {
                          t.addClass("not-animated");
                          var s = t.attr("data-caption-animate");
                          setTimeout(function () {
                            t.removeClass("not-animated").addClass(
                              s + " animated"
                            );
                          }, i);
                        }
                      });
                },
              },
            })),
              d.length > 0 &&
                (1 == n ? d.html(T.realIndex + 1) : d.html(T.activeIndex + 1)),
              l.length > 0 &&
                l.html(
                  t.find(".swiper-slide:not(.swiper-slide-duplicate)").length
                );
          }
        });
      },
      sliderParallaxOffset: function () {
        var e = 0,
          t = s.outerHeight();
        ((a.hasClass("side-header") || s.hasClass("transparent-header")) &&
          (t = 0),
        z.length > 0)
          ? (e = z.outerHeight() + t)
          : (e = t);
        return k.next("#header").length > 0 && (e = 0), e;
      },
      sliderParallax: function () {
        if (E.length < 1) return !0;
        var i = SEMICOLON.slider.sliderParallaxOffset(),
          s = E.outerHeight();
        if (
          (!a.hasClass("device-xl") && !a.hasClass("device-lg")) ||
          SEMICOLON.isMobile.any()
        )
          E.find(".slider-parallax-inner").length > 0
            ? e(
                ".slider-parallax-inner,.slider-parallax .slider-caption,.ei-title"
              ).css({ transform: "translateY(0px)" })
            : e(
                ".slider-parallax,.slider-parallax .slider-caption,.ei-title"
              ).css({ transform: "translateY(0px)" });
        else {
          if (s + i + 50 > t.scrollTop())
            if (
              (E.addClass("slider-parallax-visible").removeClass(
                "slider-parallax-invisible"
              ),
              t.scrollTop() > i)
            )
              if (E.find(".slider-parallax-inner").length > 0) {
                var n = (-0.4 * (t.scrollTop() - i)).toFixed(0),
                  o = (-0.15 * (t.scrollTop() - i)).toFixed(0);
                E.find(".slider-parallax-inner").css({
                  transform: "translateY(" + n + "px)",
                }),
                  e(".slider-parallax .slider-caption,.ei-title").css({
                    transform: "translateY(" + o + "px)",
                  });
              } else {
                (n = ((t.scrollTop() - i) / 1.5).toFixed(0)),
                  (o = ((t.scrollTop() - i) / 7).toFixed(0));
                E.css({ transform: "translateY(" + n + "px)" }),
                  e(".slider-parallax .slider-caption,.ei-title").css({
                    transform: "translateY(" + -o + "px)",
                  });
              }
            else
              E.find(".slider-parallax-inner").length > 0
                ? e(
                    ".slider-parallax-inner,.slider-parallax .slider-caption,.ei-title"
                  ).css({ transform: "translateY(0px)" })
                : e(
                    ".slider-parallax,.slider-parallax .slider-caption,.ei-title"
                  ).css({ transform: "translateY(0px)" });
          else
            E.addClass("slider-parallax-invisible").removeClass(
              "slider-parallax-visible"
            );
          requesting &&
            requestAnimationFrame(function () {
              SEMICOLON.slider.sliderParallax(),
                SEMICOLON.slider.sliderElementsFade();
            });
        }
      },
      sliderElementsFade: function () {
        if (E.length > 0)
          if (
            (!a.hasClass("device-xl") && !a.hasClass("device-lg")) ||
            SEMICOLON.isMobile.any()
          )
            E.find(
              ".slider-arrow-left,.slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next"
            ).css({ opacity: 1 });
          else {
            SEMICOLON.slider.sliderParallaxOffset();
            var i = E.outerHeight();
            if (k.length > 0) {
              if (
                s.hasClass("transparent-header") ||
                e("body").hasClass("side-header")
              )
                var n = 100;
              else n = 0;
              E.find(
                ".slider-arrow-left,.slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next"
              ).css({ opacity: 1 - (1.85 * (t.scrollTop() - n)) / i });
            }
          }
      },
      captionPosition: function () {
        L.find(".slider-caption:not(.custom-caption-pos)").each(function () {
          var t = e(this).outerHeight(),
            i = L.outerHeight();
          e(this)
            .parents("#slider")
            .prev("#header")
            .hasClass("transparent-header") &&
          (a.hasClass("device-xl") || a.hasClass("device-lg"))
            ? e(this)
                .parents("#slider")
                .prev("#header")
                .hasClass("floating-header")
              ? e(this).css({ top: (i + 160 - t) / 2 + "px" })
              : e(this).css({ top: (i + 100 - t) / 2 + "px" })
            : e(this).css({ top: (i - t) / 2 + "px" });
        });
      },
      swiperSliderMenu: function (e) {
        if (
          ((e = void 0 !== e && e),
          a.hasClass("device-xl") || a.hasClass("device-lg"))
        ) {
          var t = k.find(".swiper-slide.swiper-slide-active");
          SEMICOLON.slider.headerSchemeChanger(t, e);
        }
      },
      revolutionSliderMenu: function (e) {
        if (
          ((e = void 0 !== e && e),
          a.hasClass("device-xl") || a.hasClass("device-lg"))
        ) {
          var t = k.find(".active-revslide");
          SEMICOLON.slider.headerSchemeChanger(t, e);
        }
      },
      headerSchemeChanger: function (t, i) {
        if (t.length > 0) {
          var o = !1;
          if (t.hasClass("dark")) {
            if (d) var r = d.split(/ +/);
            else r = "";
            var l = r.length;
            if (l > 0) {
              var c = 0;
              for (c = 0; c < l; c++)
                if ("dark" == r[c] && 1 == i) {
                  o = !0;
                  break;
                }
            }
            e(
              "#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)"
            ).addClass("dark"),
              o ||
                e(
                  "#header.transparent-header.sticky-header,#header.transparent-header.semi-transparent.sticky-header,#header.transparent-header.floating-header.sticky-header"
                ).removeClass("dark"),
              n.removeClass("not-dark");
          } else
            a.hasClass("dark")
              ? (t.addClass("not-dark"),
                e(
                  "#header.transparent-header:not(.semi-transparent,.floating-header)"
                ).removeClass("dark"),
                e(
                  "#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)"
                )
                  .find("#header-wrap")
                  .addClass("not-dark"))
              : (e(
                  "#header.transparent-header:not(.semi-transparent,.floating-header)"
                ).removeClass("dark"),
                n.removeClass("not-dark"));
          s.hasClass("sticky-header") && SEMICOLON.header.stickyMenuClass(),
            SEMICOLON.header.logo();
        }
      },
      owlCaptionInit: function () {
        X.length > 0 &&
          X.each(function () {
            var t = e(this);
            t.find(".owl-dot").length > 0 && t.addClass("with-carousel-dots");
          });
      },
    }),
    (SEMICOLON.portfolio = {
      init: function () {
        SEMICOLON.portfolio.ajaxload();
      },
      gridInit: function (t) {
        return e().isotope
          ? t.length < 1 ||
              !!t.hasClass("customjs") ||
              void t.each(function () {
                var t = e(this),
                  i = t.attr("data-transition"),
                  s = t.attr("data-layout"),
                  n = t.attr("data-stagger"),
                  o = !0;
                i || (i = "0.65s"),
                  s || (s = "masonry"),
                  n || (n = 0),
                  a.hasClass("rtl") && (o = !1),
                  setTimeout(function () {
                    t.hasClass("portfolio")
                      ? t.isotope({
                          layoutMode: s,
                          isOriginLeft: o,
                          transitionDuration: i,
                          stagger: Number(n),
                          masonry: {
                            columnWidth: t.find(
                              ".portfolio-item:not(.wide)"
                            )[0],
                          },
                        })
                      : t.isotope({
                          layoutMode: s,
                          isOriginLeft: o,
                          transitionDuration: i,
                        });
                  }, 300);
              })
          : (console.log("gridInit: Isotope not Defined."), !0);
      },
      filterInit: function () {
        return e().isotope
          ? H.length < 1 ||
              !!H.hasClass("customjs") ||
              void H.each(function () {
                var t = e(this),
                  a = t.attr("data-container"),
                  i = t.attr("data-active-class"),
                  s = t.attr("data-default");
                i || (i = "activeFilter"),
                  t.find("a").click(function () {
                    t.find("li").removeClass(i),
                      e(this).parent("li").addClass(i);
                    var s = e(this).attr("data-filter");
                    return e(a).isotope({ filter: s }), !1;
                  }),
                  s &&
                    (t.find("li").removeClass(i),
                    t
                      .find('[data-filter="' + s + '"]')
                      .parent("li")
                      .addClass(i),
                    e(a).isotope({ filter: s }));
              })
          : (console.log("filterInit: Isotope not Defined."), !0);
      },
      shuffleInit: function () {
        return e().isotope
          ? e(".portfolio-shuffle").length < 1 ||
              void e(".portfolio-shuffle").click(function () {
                var t = e(this).attr("data-container");
                e(t).isotope("shuffle");
              })
          : (console.log("shuffleInit: Isotope not Defined."), !0);
      },
      portfolioDescMargin: function () {
        var t = e(".portfolio-overlay");
        t.length > 0 &&
          t.each(function () {
            var t = e(this);
            if (t.find(".portfolio-desc").length > 0) {
              var a = t.outerHeight(),
                i = t.find(".portfolio-desc").outerHeight();
              if (
                t.find("a.left-icon").length > 0 ||
                t.find("a.right-icon").length > 0 ||
                t.find("a.center-icon").length > 0
              )
                var s = 60;
              else s = 0;
              var n = (a - i - s) / 2;
              t.find(".portfolio-desc").css({ "margin-top": n });
            }
          });
      },
      arrange: function () {
        I.length > 0 &&
          I.each(function () {
            var t = e(this);
            SEMICOLON.initialize.setFullColumnWidth(t);
          });
      },
      ajaxload: function () {
        e(".portfolio-ajax .portfolio-item a.center-icon").click(function (t) {
          var a = e(this).parents(".portfolio-item").attr("id");
          e(this).parents(".portfolio-item").hasClass("portfolio-active") ||
            SEMICOLON.portfolio.loadItem(a, A),
            t.preventDefault();
        });
      },
      newNextPrev: function (t) {
        var a = SEMICOLON.portfolio.getNextItem(t),
          i = SEMICOLON.portfolio.getPrevItem(t);
        e("#next-portfolio").attr("data-id", a),
          e("#prev-portfolio").attr("data-id", i);
      },
      loadItem: function (t, a, i) {
        i || (i = !1);
        var s = SEMICOLON.portfolio.getNextItem(t),
          n = SEMICOLON.portfolio.getPrevItem(t);
        if (0 == i) {
          SEMICOLON.portfolio.closeItem(), D.fadeIn();
          var o = e("#" + t).attr("data-loader");
          F.load(o, { portid: t, portnext: s, portprev: n }, function () {
            SEMICOLON.portfolio.initializeAjax(t),
              SEMICOLON.portfolio.openItem(),
              j.removeClass("portfolio-active"),
              e("#" + t).addClass("portfolio-active");
          });
        }
      },
      closeItem: function () {
        P &&
          P.height() > 32 &&
          (D.fadeIn(),
          P.find("#portfolio-ajax-single").fadeOut("600", function () {
            e(this).remove();
          }),
          P.removeClass("portfolio-ajax-opened"));
      },
      openItem: function () {
        var t = P.find("img").length,
          a = 0;
        if (t > 0)
          P.find("img").on("load", function () {
            a++;
            var i = SEMICOLON.initialize.topScrollOffset();
            if (t === a) {
              F.css({ display: "block" }),
                P.addClass("portfolio-ajax-opened"),
                D.fadeOut();
              setTimeout(function () {
                SEMICOLON.widget.loadFlexSlider(),
                  SEMICOLON.initialize.lightbox(),
                  SEMICOLON.initialize.resizeVideos(),
                  SEMICOLON.widget.masonryThumbs(),
                  e("html,body")
                    .stop(!0)
                    .animate(
                      { scrollTop: P.offset().top - i },
                      900,
                      "easeOutQuad"
                    );
              }, 500);
            }
          });
        else {
          var i = SEMICOLON.initialize.topScrollOffset();
          F.css({ display: "block" }),
            P.addClass("portfolio-ajax-opened"),
            D.fadeOut();
          setTimeout(function () {
            SEMICOLON.widget.loadFlexSlider(),
              SEMICOLON.initialize.lightbox(),
              SEMICOLON.initialize.resizeVideos(),
              SEMICOLON.widget.masonryThumbs(),
              e("html,body")
                .stop(!0)
                .animate({ scrollTop: P.offset().top - i }, 900, "easeOutQuad");
          }, 500);
        }
      },
      getNextItem: function (t) {
        var a = "",
          i = e("#" + t).next();
        return 0 != i.length && (a = i.attr("id")), a;
      },
      getPrevItem: function (t) {
        var a = "",
          i = e("#" + t).prev();
        return 0 != i.length && (a = i.attr("id")), a;
      },
      initializeAjax: function (t) {
        (A = e("#" + t)),
          e("#next-portfolio, #prev-portfolio").click(function () {
            var t = e(this).attr("data-id");
            return (
              j.removeClass("portfolio-active"),
              e("#" + t).addClass("portfolio-active"),
              SEMICOLON.portfolio.loadItem(t, A),
              !1
            );
          }),
          e("#close-portfolio").click(function () {
            return (
              F.fadeOut("600", function () {
                P.find("#portfolio-ajax-single").remove();
              }),
              P.removeClass("portfolio-ajax-opened"),
              j.removeClass("portfolio-active"),
              !1
            );
          });
      },
    }),
    (SEMICOLON.widget = {
      init: function () {
        SEMICOLON.widget.animations(),
          SEMICOLON.widget.youtubeBgVideo(),
          SEMICOLON.widget.tabs(),
          SEMICOLON.widget.tabsJustify(),
          SEMICOLON.widget.tabsResponsive(),
          SEMICOLON.widget.tabsResponsiveResize(),
          SEMICOLON.widget.toggles(),
          SEMICOLON.widget.accordions(),
          SEMICOLON.widget.counter(),
          SEMICOLON.widget.roundedSkill(),
          SEMICOLON.widget.progress(),
          SEMICOLON.widget.twitterFeed(),
          SEMICOLON.widget.flickrFeed(),
          SEMICOLON.widget.instagramPhotos(
            "5834720953.1677ed0.a0a26ba4c90845f9a844d64c316bf77a",
            "8e000fefe3024b2ead6a50ff005bf036"
          ),
          SEMICOLON.widget.dribbbleShots(
            "012d3d72d12f93e1d41a19195d7da2fc87e6b5afa48a184256e398eb793cfe56"
          ),
          SEMICOLON.widget.navTree(),
          SEMICOLON.widget.textRotater(),
          SEMICOLON.widget.carousel(),
          SEMICOLON.widget.linkScroll(),
          SEMICOLON.widget.contactForm(),
          SEMICOLON.widget.subscription(),
          SEMICOLON.widget.quickContact(),
          SEMICOLON.widget.stickySidebar(),
          SEMICOLON.widget.cookieNotify(),
          SEMICOLON.widget.extras();
      },
      parallax: function () {
        if ("undefined" != typeof skrollr && e.isFunction(skrollr))
          return console.log("parallax: skrollr not Defined."), !0;
        ($.length > 0 || K.length > 0 || Z.length > 0) &&
          (SEMICOLON.isMobile.any()
            ? ($.addClass("mobile-parallax"),
              K.addClass("mobile-parallax"),
              Z.addClass("mobile-parallax"))
            : skrollr.init({ forceHeight: !1 }));
      },
      animations: function () {
        if (!e().appear)
          return console.log("animations: Appear not Defined."), !0;
        var t = e("[data-animate]");
        t.length > 0 &&
          (a.hasClass("device-xl") ||
            a.hasClass("device-lg") ||
            a.hasClass("device-md")) &&
          t.each(function () {
            var t = e(this),
              a = t.attr("data-animate-out"),
              i = t.attr("data-delay"),
              s = t.attr("data-delay-out"),
              n = 0,
              o = 3e3;
            if (t.parents(".fslider.no-thumbs-animate").length > 0) return !0;
            if (
              ((n = i ? Number(i) + 500 : 500),
              a && s && (o = Number(s) + n),
              !t.hasClass("animated"))
            ) {
              t.addClass("not-animated");
              var r = t.attr("data-animate");
              t.appear(
                function () {
                  setTimeout(function () {
                    t.removeClass("not-animated").addClass(r + " animated");
                  }, n),
                    a &&
                      setTimeout(function () {
                        t.removeClass(r).addClass(a);
                      }, o);
                },
                { accX: 0, accY: -120 },
                "easeInCubic"
              );
            }
          });
      },
      loadFlexSlider: function () {
        if (!e().flexslider)
          return console.log("loadFlexSlider: FlexSlider not Defined."), !0;
        var t = e(".fslider:not(.customjs)").find(".flexslider");
        t.length > 0 &&
          t.each(function () {
            var t = e(this),
              a = t.parent(".fslider").attr("data-animation"),
              i = t.parent(".fslider").attr("data-easing"),
              s = t.parent(".fslider").attr("data-direction"),
              n = t.parent(".fslider").attr("data-reverse"),
              o = t.parent(".fslider").attr("data-slideshow"),
              r = t.parent(".fslider").attr("data-pause"),
              l = t.parent(".fslider").attr("data-speed"),
              d = t.parent(".fslider").attr("data-video"),
              c = t.parent(".fslider").attr("data-pagi"),
              u = t.parent(".fslider").attr("data-arrows"),
              f = t.parent(".fslider").attr("data-thumbs"),
              h = t.parent(".fslider").attr("data-hover"),
              m = t.parent(".fslider").attr("data-smooth-height"),
              p = t.parent(".fslider").attr("data-touch"),
              g = !1;
            a || (a = "slide"),
              (i && "swing" != i) || ((i = "swing"), (g = !0)),
              s || (s = "horizontal"),
              (n = "true" == n),
              (o = !o),
              r || (r = 5e3),
              l || (l = 600),
              d || (d = !1),
              (m = "false" != m),
              "vertical" == s && (m = !1),
              (c = "false" != c),
              (c = "true" == f ? "thumbnails" : c),
              (u = "false" != u),
              (h = "false" != h),
              (p = "false" != p),
              t.flexslider({
                selector: ".slider-wrap > .slide",
                animation: a,
                easing: i,
                direction: s,
                reverse: n,
                slideshow: o,
                slideshowSpeed: Number(r),
                animationSpeed: Number(l),
                pauseOnHover: h,
                video: d,
                controlNav: c,
                directionNav: u,
                smoothHeight: m,
                useCSS: g,
                touch: p,
                start: function (t) {
                  SEMICOLON.widget.animations(),
                    SEMICOLON.initialize.verticalMiddle(),
                    t.parent().removeClass("preloader2");
                  setTimeout(function () {
                    e(".grid-container").isotope("layout");
                  }, 1200);
                  SEMICOLON.initialize.lightbox(),
                    e(".flex-prev").html('<i class="icon-angle-left"></i>'),
                    e(".flex-next").html('<i class="icon-angle-right"></i>'),
                    SEMICOLON.portfolio.portfolioDescMargin();
                },
                after: function () {
                  e(".grid-container").hasClass("portfolio-full") &&
                    (e(".grid-container.portfolio-full").isotope("layout"),
                    SEMICOLON.portfolio.portfolioDescMargin()),
                    e(".post-grid").hasClass("post-masonry-full") &&
                      e(".post-grid.post-masonry-full").isotope("layout");
                },
              });
          });
      },
      html5Video: function () {
        var t = e(".video-wrap:has(video)");
        t.length > 0 &&
          t.each(function () {
            var t = e(this),
              a = t.find("video"),
              i = t.outerWidth(),
              s = t.outerHeight(),
              n = (16 * s) / 9,
              o = s;
            if (
              (n < i && ((n = i), (o = (9 * i) / 16)),
              a.css({ width: n + "px", height: o + "px" }),
              o > s && a.css({ left: "", top: -(o - s) / 2 + "px" }),
              n > i && a.css({ top: "", left: -(n - i) / 2 + "px" }),
              SEMICOLON.isMobile.any() && !t.hasClass("no-placeholder"))
            ) {
              var r = a.attr("poster");
              "" != r &&
                t.append(
                  '<div class="video-placeholder" style="background-image: url(' +
                    r +
                    ');"></div>'
                ),
                a.hide();
            }
          });
      },
      youtubeBgVideo: function () {
        if (!e().YTPlayer)
          return (
            console.log("youtubeBgVideo: YoutubeBG Plugin not Defined."), !0
          );
        var t = e(".yt-bg-player");
        if (t.hasClass("customjs")) return !0;
        t.length > 0 &&
          t.each(function () {
            var t = e(this),
              a = t.attr("data-video"),
              i = t.attr("data-mute"),
              s = t.attr("data-ratio"),
              n = t.attr("data-quality"),
              o = t.attr("data-opacity"),
              r = t.attr("data-container"),
              l = t.attr("data-optimize"),
              d = t.attr("data-loop"),
              c = t.attr("data-volume"),
              u = t.attr("data-start"),
              f = t.attr("data-stop"),
              h = t.attr("data-autoplay"),
              m = t.attr("data-fullscreen");
            (i = "false" != i),
              s || (s = "16/9"),
              n || (n = "hd720"),
              o || (o = 1),
              r || (r = "self"),
              (l = "false" != l),
              (d = "false" != d),
              c || (c = 1),
              u || (u = 0),
              f || (f = 0),
              (h = "false" != h),
              (m = "true" == m),
              t.YTPlayer({
                videoURL: a,
                mute: i,
                ratio: s,
                quality: n,
                opacity: Number(o),
                containment: r,
                optimizeDisplay: l,
                loop: d,
                vol: Number(c),
                startAt: Number(u),
                stopAt: Number(f),
                autoPlay: h,
                realfullscreen: m,
                showYTLogo: !1,
                showControls: !1,
              });
          });
      },
      tabs: function () {
        if (!e().tabs) return console.log("tabs: Tabs not Defined."), !0;
        var t = e(".tabs:not(.customjs)");
        t.length > 0 &&
          t.each(function () {
            var t = e(this),
              a = t.attr("data-speed"),
              i = t.attr("data-active");
            a || (a = 400), i ? (i -= 1) : (i = 0);
            var s = window.location.hash;
            if (jQuery(s).length > 0) {
              var n = s.split("#"),
                o = document.getElementById(n[1]);
              i = jQuery(".tab-content").index(o);
            }
            t.tabs({
              active: Number(i),
              show: { effect: "fade", duration: Number(a) },
            });
          });
      },
      tabsJustify: function () {
        if (e("body").hasClass("device-xs") || e("body").hasClass("device-sm"))
          e(".tabs.tabs-justify").find(".tab-nav > li").css({ width: "" });
        else {
          var t = e(".tabs.tabs-justify");
          t.length > 0 &&
            t.each(function () {
              var t,
                a = e(this),
                i = a.find(".tab-nav > li"),
                s = i.length,
                n = 0;
              (n =
                a.hasClass("tabs-bordered") || a.hasClass("tabs-bb")
                  ? a.find(".tab-nav").outerWidth()
                  : a.find("tab-nav").hasClass("tab-nav2")
                  ? a.find(".tab-nav").outerWidth() - 10 * s
                  : a.find(".tab-nav").outerWidth() - 30),
                (t = Math.floor(n / s)),
                i.css({ width: t + "px" });
            });
        }
      },
      tabsResponsive: function () {
        if (!e().tabs) return console.log("tabs: Tabs not Defined."), !0;
        var t = e(".tabs.tabs-responsive");
        if (t.length < 1) return !0;
        t.each(function () {
          var t = e(this),
            a = t.find(".tab-nav"),
            i = t.find(".tab-container");
          a.children("li").each(function () {
            var t = e(this).children("a"),
              a = t.attr("href"),
              s = t.html();
            i.find(a).before(
              '<div class="acctitle d-none"><i class="acc-closed icon-ok-circle"></i><i class="acc-open icon-remove-circle"></i>' +
                s +
                "</div>"
            );
          });
        });
      },
      tabsResponsiveResize: function () {
        if (!e().tabs) return console.log("tabs: Tabs not Defined."), !0;
        var t = e(".tabs.tabs-responsive");
        if (t.length < 1) return !0;
        t.each(function () {
          var t = e(this),
            a = t.tabs("option", "active") + 1,
            i = t.attr("data-accordion-style");
          e("body").hasClass("device-sm") || e("body").hasClass("device-xs")
            ? (t.find(".tab-nav").addClass("d-none"),
              t
                .find(".tab-container")
                .addClass("accordion " + i + " clearfix")
                .attr("data-active", a),
              t.find(".tab-content").addClass("acc_content"),
              t.find(".acctitle").removeClass("d-none"),
              SEMICOLON.widget.accordions())
            : (e("body").hasClass("device-md") ||
                e("body").hasClass("device-lg") ||
                e("body").hasClass("device-xl")) &&
              (t.find(".tab-nav").removeClass("d-none"),
              t
                .find(".tab-container")
                .removeClass("accordion " + i + " clearfix")
                .attr("data-active", ""),
              t.find(".tab-content").removeClass("acc_content"),
              t.find(".acctitle").addClass("d-none"),
              t.tabs("refresh"));
        });
      },
      toggles: function () {
        var t = e(".toggle");
        t.length > 0 &&
          t.each(function () {
            var t = e(this);
            "open" != t.attr("data-state")
              ? t.children(".togglec").hide()
              : t.children(".togglet").addClass("toggleta"),
              t.children(".togglet").click(function () {
                return (
                  e(this)
                    .toggleClass("toggleta")
                    .next(".togglec")
                    .slideToggle(300),
                  !0
                );
              });
          });
      },
      accordions: function () {
        var t = e(".accordion");
        t.length > 0 &&
          t.each(function () {
            var t = e(this),
              i = t.attr("data-state"),
              s = t.attr("data-active");
            s ? (s -= 1) : (s = 0),
              t.find(".acc_content").hide(),
              "closed" != i &&
                t
                  .find(".acctitle:eq(" + Number(s) + ")")
                  .addClass("acctitlec")
                  .next()
                  .show(),
              t.find(".acctitle").click(function () {
                if (e(this).next().is(":hidden")) {
                  t.find(".acctitle")
                    .removeClass("acctitlec")
                    .next()
                    .slideUp("normal");
                  var i = e(this);
                  e(this)
                    .toggleClass("acctitlec")
                    .next()
                    .stop()
                    .slideDown("normal", function () {
                      (a.hasClass("device-sm") || a.hasClass("device-xs")) &&
                        t.hasClass("scroll-on-open") &&
                        e("html,body")
                          .stop(!0)
                          .animate(
                            {
                              scrollTop:
                                i.offset().top -
                                (SEMICOLON.initialize.topScrollOffset() - 40),
                            },
                            800,
                            "easeOutQuad"
                          );
                    });
                }
                return !1;
              });
          });
      },
      counter: function () {
        if (!e().appear) return console.log("counter: Appear not Defined."), !0;
        if (!e().countTo)
          return console.log("counter: countTo not Defined."), !0;
        var t = e(".counter:not(.counter-instant)");
        t.length > 0 &&
          t.each(function () {
            var t = e(this),
              i = e(this).find("span").attr("data-comma");
            (i = !!i),
              a.hasClass("device-xl") || a.hasClass("device-lg")
                ? t.appear(
                    function () {
                      SEMICOLON.widget.runCounter(t, i),
                        t.parents(".common-height") &&
                          SEMICOLON.initialize.maxHeight();
                    },
                    { accX: 0, accY: -120 },
                    "easeInCubic"
                  )
                : SEMICOLON.widget.runCounter(t, i);
          });
      },
      runCounter: function (e, t) {
        1 == t
          ? e.find("span").countTo({
              formatter: function (e, t) {
                return (e = (e = e.toFixed(t.decimals)).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                ));
              },
            })
          : e.find("span").countTo();
      },
      roundedSkill: function () {
        if (!e().appear)
          return console.log("roundedSkill: Appear not Defined."), !0;
        if (!e().easyPieChart)
          return console.log("roundedSkill: EasyPieChart not Defined."), !0;
        var t = e(".rounded-skill");
        t.length > 0 &&
          t.each(function () {
            var t = e(this),
              i = t.attr("data-size"),
              s = t.attr("data-speed"),
              n = t.attr("data-width"),
              o = t.attr("data-color"),
              r = t.attr("data-trackcolor");
            i || (i = 140),
              s || (s = 2e3),
              n || (n = 8),
              o || (o = "#0093BF"),
              r || (r = "rgba(0,0,0,0.04)");
            var l = {
              roundSkillSize: i,
              roundSkillSpeed: s,
              roundSkillWidth: n,
              roundSkillColor: o,
              roundSkillTrackColor: r,
            };
            a.hasClass("device-xl") || a.hasClass("device-lg")
              ? (t
                  .css({
                    width: i + "px",
                    height: i + "px",
                    "line-height": i + "px",
                  })
                  .animate({ opacity: 0 }, 10),
                t.appear(
                  function () {
                    if (!t.hasClass("skills-animated")) {
                      setTimeout(function () {
                        t.css({ opacity: 1 });
                      }, 100);
                      SEMICOLON.widget.runRoundedSkills(t, l),
                        t.addClass("skills-animated");
                    }
                  },
                  { accX: 0, accY: -120 },
                  "easeInCubic"
                ))
              : SEMICOLON.widget.runRoundedSkills(t, l);
          });
      },
      runRoundedSkills: function (e, t) {
        e.easyPieChart({
          size: Number(t.roundSkillSize),
          animate: Number(t.roundSkillSpeed),
          scaleColor: !1,
          trackColor: t.roundSkillTrackColor,
          lineWidth: Number(t.roundSkillWidth),
          lineCap: "square",
          barColor: t.roundSkillColor,
        });
      },
      progress: function () {
        if (!e().appear)
          return console.log("progress: Appear not Defined."), !0;
        var t = e(".progress");
        t.length > 0 &&
          t.each(function () {
            var t = e(this),
              i = t.parent("li"),
              s = i.attr("data-percent");
            a.hasClass("device-xl") || a.hasClass("device-lg")
              ? t.appear(
                  function () {
                    i.hasClass("skills-animated") ||
                      (t.find(".counter-instant span").countTo(),
                      i
                        .find(".progress")
                        .css({ width: s + "%" })
                        .addClass("skills-animated"));
                  },
                  { accX: 0, accY: -120 },
                  "easeInCubic"
                )
              : (t.find(".counter-instant span").countTo(),
                i.find(".progress").css({ width: s + "%" }));
          });
      },
      twitterFeed: function () {
        if ("undefined" == typeof sm_format_twitter)
          return (
            console.log("twitterFeed: sm_format_twitter() not Defined."), !0
          );
        if ("undefined" == typeof sm_format_twitter3)
          return (
            console.log("twitterFeed: sm_format_twitter3() not Defined."), !0
          );
        var t = e(".twitter-feed");
        t.length > 0 &&
          t.each(function () {
            var t = e(this),
              a = t.attr("data-username"),
              i = t.attr("data-count"),
              s = t.attr("data-loader");
            a || (a = "twitter"),
              i || (i = 3),
              s || (s = "include/twitter/tweets.php"),
              e.getJSON(s + "?username=" + a + "&count=" + i, function (e) {
                t.hasClass("fslider")
                  ? t
                      .find(".slider-wrap")
                      .html(sm_format_twitter3(e))
                      .promise()
                      .done(function () {
                        var e = setInterval(function () {
                          if (t.find(".slide").length > 1) {
                            t.removeClass("customjs");
                            setTimeout(function () {
                              SEMICOLON.widget.loadFlexSlider();
                            }, 500);
                            clearInterval(e);
                          }
                        }, 500);
                      })
                  : t.html(sm_format_twitter(e));
              });
          });
      },
      flickrFeed: function () {
        if (!e().jflickrfeed)
          return console.log("flickrFeed: jflickrfeed not Defined."), !0;
        var t = e(".flickr-feed");
        t.length > 0 &&
          t.each(function () {
            var t = e(this),
              a = t.attr("data-id"),
              i = t.attr("data-count"),
              s = "photos_public.gne";
            "group" == t.attr("data-type") && (s = "groups_pool.gne"),
              i || (i = 9),
              t.jflickrfeed(
                {
                  feedapi: s,
                  limit: Number(i),
                  qstrings: { id: a },
                  itemTemplate:
                    '<a href="{{image_b}}" title="{{title}}" data-lightbox="gallery-item"><img src="{{image_s}}" alt="{{title}}" /></a>',
                },
                function (e) {
                  SEMICOLON.initialize.lightbox();
                }
              );
          });
      },
      instagramPhotos: function (t, a) {
        if ("undefined" == typeof Instafeed)
          return console.log("Instafeed not Defined."), !0;
        var i = e(".instagram-photos");
        i.length > 0 &&
          i.each(function () {
            var i = e(this),
              s = i.attr("id"),
              n = i.attr("data-user"),
              o = i.attr("data-tag"),
              r = (i.attr("data-location"), i.attr("data-count")),
              l = i.attr("data-type"),
              d = i.attr("data-sortBy"),
              c = i.attr("data-resolution");
            if (
              (r || (r = 9),
              d || (d = "none"),
              c || (c = "thumbnail"),
              "user" == l)
            )
              var u = new Instafeed({
                target: s,
                get: l,
                userId: Number(n),
                limit: Number(r),
                sortBy: d,
                resolution: c,
                accessToken: t,
                clientId: a,
              });
            else if ("tagged" == l)
              u = new Instafeed({
                target: s,
                get: l,
                tagName: o,
                limit: Number(r),
                sortBy: d,
                resolution: c,
                clientId: a,
              });
            else if ("location" == l)
              u = new Instafeed({
                target: s,
                get: l,
                locationId: Number(n),
                limit: Number(r),
                sortBy: d,
                resolution: c,
                clientId: a,
              });
            else
              u = new Instafeed({
                target: s,
                get: "popular",
                limit: Number(r),
                sortBy: d,
                resolution: c,
                clientId: a,
              });
            u.run();
          });
      },
      dribbbleShots: function (t) {
        if (!e.jribbble)
          return console.log("dribbbleShots: Jribbble not Defined."), !0;
        if (!e().imagesLoaded)
          return console.log("dribbbleShots: imagesLoaded not Defined."), !0;
        var a = e(".dribbble-shots");
        a.length > 0 &&
          (e.jribbble.setToken(t),
          a.each(function () {
            var t = e(this),
              a = t.attr("data-user"),
              i = t.attr("data-count"),
              s = t.attr("data-list"),
              n = t.attr("data-type");
            t.addClass("customjs"),
              i || (i = 9),
              "user" == n
                ? e.jribbble
                    .users(a)
                    .shots({ sort: "recent", page: 1, per_page: Number(i) })
                    .then(function (e) {
                      var a = [];
                      e.forEach(function (e) {
                        a.push('<a href="' + e.html_url + '" target="_blank">'),
                          a.push('<img src="' + e.images.teaser + '" '),
                          a.push('alt="' + e.title + '"></a>');
                      }),
                        t.html(a.join("")),
                        t.imagesLoaded().done(function () {
                          t.removeClass("customjs"),
                            SEMICOLON.widget.masonryThumbs();
                        });
                    })
                : "list" == n &&
                  e.jribbble
                    .shots(s, { sort: "recent", page: 1, per_page: Number(i) })
                    .then(function (e) {
                      var a = [];
                      e.forEach(function (e) {
                        a.push('<a href="' + e.html_url + '" target="_blank">'),
                          a.push('<img src="' + e.images.teaser + '" '),
                          a.push('alt="' + e.title + '"></a>');
                      }),
                        t.html(a.join("")),
                        t.imagesLoaded().done(function () {
                          t.removeClass("customjs"),
                            SEMICOLON.widget.masonryThumbs();
                        });
                    });
          }));
      },
      navTree: function () {
        var t = e(".nav-tree");
        t.length > 0 &&
          t.each(function () {
            var t = e(this),
              a = t.attr("data-speed"),
              i = t.attr("data-easing");
            a || (a = 250),
              i || (i = "swing"),
              t.find("ul li:has(ul)").addClass("sub-menu"),
              t
                .find("ul li:has(ul) > a")
                .append(' <i class="icon-angle-down"></i>'),
              t.hasClass("on-hover")
                ? t.find("ul li:has(ul):not(.active)").hover(
                    function (t) {
                      e(this)
                        .children("ul")
                        .stop(!0, !0)
                        .slideDown(Number(a), i);
                    },
                    function () {
                      e(this).children("ul").delay(250).slideUp(Number(a), i);
                    }
                  )
                : t.find("ul li:has(ul) > a").click(function (s) {
                    var n = e(this);
                    t.find("ul li").not(n.parents()).removeClass("active"),
                      n
                        .parent()
                        .children("ul")
                        .slideToggle(Number(a), i, function () {
                          e(this).find("ul").hide(),
                            e(this).find("li.active").removeClass("active");
                        }),
                      t
                        .find("ul li > ul")
                        .not(n.parent().children("ul"))
                        .not(n.parents("ul"))
                        .slideUp(Number(a), i),
                      n.parent("li:has(ul)").toggleClass("active"),
                      s.preventDefault();
                  });
          });
      },
      carousel: function () {
        if (!e().owlCarousel)
          return console.log("carousel: Owl Carousel not Defined."), !0;
        var t = e(".carousel-widget:not(.customjs)");
        if (t.length < 1) return !0;
        t.each(function () {
          var t = e(this),
            i = t.attr("data-items"),
            s = t.attr("data-items-xl"),
            n = t.attr("data-items-lg"),
            o = t.attr("data-items-md"),
            r = t.attr("data-items-sm"),
            l = t.attr("data-items-xs"),
            d = t.attr("data-loop"),
            c = t.attr("data-autoplay"),
            u = t.attr("data-speed"),
            f = t.attr("data-animate-in"),
            h = t.attr("data-animate-out"),
            m = t.attr("data-nav"),
            p = t.attr("data-pagi"),
            g = t.attr("data-margin"),
            v = t.attr("data-stage-padding"),
            C = t.attr("data-merge"),
            O = t.attr("data-start"),
            b = t.attr("data-rewind"),
            y = t.attr("data-slideby"),
            w = t.attr("data-center"),
            S = t.attr("data-lazyload"),
            N = t.attr("data-video"),
            x = t.attr("data-rtl"),
            I = 5e3,
            M = !0;
          i || (i = 4),
            s || (s = Number(i)),
            n || (n = Number(s)),
            o || (o = Number(n)),
            r || (r = Number(o)),
            l || (l = Number(r)),
            u || (u = 250),
            g || (g = 20),
            v || (v = 0),
            O || (O = 0),
            y || (y = 1),
            (y = "page" == y ? "page" : Number(y)),
            (d = "true" == d),
            c ? ((I = Number(c)), (c = !0)) : ((c = !1), (M = !1)),
            f || (f = !1),
            h || (h = !1),
            (m = "false" != m),
            (p = "false" != p),
            (b = "true" == b),
            (C = "true" == C),
            (w = "true" == w),
            (S = "true" == S),
            (N = "true" == N),
            (x = !("true" != x && !a.hasClass("rtl"))),
            t.owlCarousel({
              margin: Number(g),
              loop: d,
              stagePadding: Number(v),
              merge: C,
              startPosition: Number(O),
              rewind: b,
              slideBy: y,
              center: w,
              lazyLoad: S,
              nav: m,
              navText: [
                '<i class="icon-angle-left"></i>',
                '<i class="icon-angle-right"></i>',
              ],
              autoplay: c,
              autoplayTimeout: I,
              autoplayHoverPause: M,
              dots: p,
              smartSpeed: Number(u),
              fluidSpeed: Number(u),
              video: N,
              animateIn: f,
              animateOut: h,
              rtl: x,
              responsive: {
                0: { items: Number(l) },
                576: { items: Number(r) },
                768: { items: Number(o) },
                992: { items: Number(n) },
                1200: { items: Number(s) },
              },
              onInitialized: function () {
                SEMICOLON.slider.owlCaptionInit(),
                  SEMICOLON.slider.sliderParallaxDimensions(),
                  SEMICOLON.initialize.lightbox();
              },
            });
        });
      },
      masonryThumbs: function () {
        var t = e(".masonry-thumbs:not(.customjs)");
        t.length > 0 &&
          t.each(function () {
            var t = e(this);
            SEMICOLON.widget.masonryThumbsArrange(t);
          });
      },
      masonryThumbsArrange: function (t) {
        if (!e().isotope)
          return console.log("masonryThumbsArrange: Isotope not Defined."), !0;
        SEMICOLON.initialize.setFullColumnWidth(t), t.isotope("layout");
      },
      notifications: function (t) {
        if ("undefined" == typeof toastr)
          return console.log("notifications: Toastr not Defined."), !0;
        toastr.remove();
        var a = e(t),
          i = a.attr("data-notify-position"),
          s = a.attr("data-notify-type"),
          n = a.attr("data-notify-msg"),
          o = a.attr("data-notify-timeout"),
          r = a.attr("data-notify-close");
        return (
          (i = i
            ? "toast-" + a.attr("data-notify-position")
            : "toast-top-right"),
          n || (n = "Please set a message!"),
          o || (o = 5e3),
          (r = "true" == r),
          (toastr.options.positionClass = i),
          (toastr.options.timeOut = Number(o)),
          (toastr.options.closeButton = r),
          (toastr.options.closeHtml =
            '<button><i class="icon-remove"></i></button>'),
          "warning" == s
            ? toastr.warning(n)
            : "error" == s
            ? toastr.error(n)
            : "success" == s
            ? toastr.success(n)
            : toastr.info(n),
          !1
        );
      },
      textRotater: function () {
        if (!e().Morphext)
          return console.log("textRotater: Morphext not Defined."), !0;
        ee.length > 0 &&
          ee.each(function () {
            e(this);
            var t = e(this).attr("data-rotate"),
              a = e(this).attr("data-speed"),
              i = e(this).attr("data-separator");
            t || (t = "fade"),
              a || (a = 1200),
              i || (i = ","),
              e(this)
                .find(".t-rotate")
                .Morphext({ animation: t, separator: i, speed: Number(a) });
          });
      },
      linkScroll: function () {
        e("a[data-scrollto]").click(function () {
          var t = e(this),
            a = t.attr("data-scrollto"),
            i = t.attr("data-speed"),
            s = t.attr("data-offset"),
            n = t.attr("data-easing"),
            o = t.attr("data-highlight");
          return (
            !!t.parents("#primary-menu").hasClass("on-click") ||
            (i || (i = 750),
            s || (s = SEMICOLON.initialize.topScrollOffset()),
            n || (n = "easeOutQuad"),
            e("html,body")
              .stop(!0)
              .animate(
                { scrollTop: e(a).offset().top - Number(s) },
                Number(i),
                n,
                function () {
                  if (o)
                    if (e(a).find(".highlight-me").length > 0) {
                      e(a)
                        .find(".highlight-me")
                        .animate({ backgroundColor: o }, 300);
                      setTimeout(function () {
                        e(a)
                          .find(".highlight-me")
                          .animate({ backgroundColor: "transparent" }, 300);
                      }, 500);
                    } else {
                      e(a).animate({ backgroundColor: o }, 300);
                      setTimeout(function () {
                        e(a).animate({ backgroundColor: "transparent" }, 300);
                      }, 500);
                    }
                }
              ),
            !1)
          );
        });
      },
      contactForm: function () {
        if (!e().validate)
          return console.log("contactForm: Form Validate not Defined."), !0;
        if (!e().ajaxSubmit)
          return console.log("contactForm: jQuery Form not Defined."), !0;
        var t = e(".contact-widget:not(.customjs)");
        if (t.length < 1) return !0;
        t.each(function () {
          var t = e(this),
            a = t.attr("data-alert-type"),
            i = t.attr("data-loader"),
            s = t.find(".contact-form-result"),
            n = t.attr("data-redirect");
          t.find("form").validate({
            submitHandler: function (t) {
              if ((s.hide(), "button" == i)) {
                var o = e(t).find("button"),
                  r = o.html();
                o.html('<i class="icon-line-loader icon-spin nomargin"></i>');
              } else e(t).find(".form-process").fadeIn();
              e(t).ajaxSubmit({
                target: s,
                dataType: "json",
                success: function (l) {
                  if (
                    ("button" == i
                      ? o.html(r)
                      : e(t).find(".form-process").fadeOut(),
                    "error" != l.alert && n)
                  )
                    return window.location.replace(n), !0;
                  if ("inline" == a) {
                    if ("error" == l.alert) var d = "alert-danger";
                    else d = "alert-success";
                    s.removeClass("alert-danger alert-success")
                      .addClass("alert " + d)
                      .html(l.message)
                      .slideDown(400);
                  } else
                    s
                      .attr("data-notify-type", l.alert)
                      .attr("data-notify-msg", l.message)
                      .html(""),
                      SEMICOLON.widget.notifications(s);
                  e(t).find(".g-recaptcha").children("div").length > 0 &&
                    grecaptcha.reset(),
                    "error" != l.alert && e(t).clearForm();
                },
              });
            },
          });
        });
      },
      subscription: function () {
        if (!e().validate)
          return console.log("subscription: Form Validate not Defined."), !0;
        if (!e().ajaxSubmit)
          return console.log("subscription: jQuery Form not Defined."), !0;
        var t = e(".subscribe-widget:not(.customjs)");
        if (t.length < 1) return !0;
        t.each(function () {
          var t = e(this),
            a = t.attr("data-alert-type"),
            i = t.attr("data-loader"),
            s = t.find(".widget-subscribe-form-result"),
            n = t.attr("data-redirect");
          t.find("form").validate({
            submitHandler: function (t) {
              if ((s.hide(), "button" == i)) {
                var o = e(t).find("button"),
                  r = o.html();
                o.html('<i class="icon-line-loader icon-spin nomargin"></i>');
              } else
                e(t)
                  .find(".input-group-addon")
                  .find(".icon-email2")
                  .removeClass("icon-email2")
                  .addClass("icon-line-loader icon-spin");
              e(t).ajaxSubmit({
                target: s,
                dataType: "json",
                resetForm: !0,
                success: function (l) {
                  if (
                    ("button" == i
                      ? o.html(r)
                      : e(t)
                          .find(".input-group-addon")
                          .find(".icon-line-loader")
                          .removeClass("icon-line-loader icon-spin")
                          .addClass("icon-email2"),
                    "error" != l.alert && n)
                  )
                    return window.location.replace(n), !0;
                  if ("inline" == a) {
                    if ("error" == l.alert) var d = "alert-danger";
                    else d = "alert-success";
                    s.addClass("alert " + d)
                      .html(l.message)
                      .slideDown(400);
                  } else
                    s
                      .attr("data-notify-type", l.alert)
                      .attr("data-notify-msg", l.message)
                      .html(""),
                      SEMICOLON.widget.notifications(s);
                },
              });
            },
          });
        });
      },
      quickContact: function () {
        if (!e().validate)
          return console.log("quickContact: Form Validate not Defined."), !0;
        if (!e().ajaxSubmit)
          return console.log("quickContact: jQuery Form not Defined."), !0;
        var t = e(".quick-contact-widget:not(.customjs)");
        if (t.length < 1) return !0;
        t.each(function () {
          var t = e(this),
            a = t.attr("data-alert-type"),
            i = t.attr("data-loader"),
            s = t.find(".quick-contact-form-result"),
            n = t.attr("data-redirect");
          t.find("form").validate({
            submitHandler: function (t) {
              if ((s.hide(), e(t).animate({ opacity: 0.4 }), "button" == i)) {
                var o = e(t).find("button"),
                  r = o.html();
                o.html('<i class="icon-line-loader icon-spin nomargin"></i>');
              } else e(t).find(".form-process").fadeIn();
              e(t).ajaxSubmit({
                target: s,
                dataType: "json",
                resetForm: !0,
                success: function (l) {
                  if (
                    (e(t).animate({ opacity: 1 }),
                    "button" == i
                      ? o.html(r)
                      : e(t).find(".form-process").fadeOut(),
                    "error" != l.alert && n)
                  )
                    return window.location.replace(n), !0;
                  if ("inline" == a) {
                    if ("error" == l.alert) var d = "alert-danger";
                    else d = "alert-success";
                    s.addClass("alert " + d)
                      .html(l.message)
                      .slideDown(400);
                  } else
                    s
                      .attr("data-notify-type", l.alert)
                      .attr("data-notify-msg", l.message)
                      .html(""),
                      SEMICOLON.widget.notifications(s);
                  e(t).find(".g-recaptcha").children("div").length > 0 &&
                    grecaptcha.reset();
                },
              });
            },
          });
        });
      },
      ticker: function () {
        var t = jQuery(".scw-ticker");
        if (t.length < 1) return !0;
        t.each(function () {
          var t,
            a,
            i = e(this),
            s = i.find(".scw-ticker-item"),
            n = s.length,
            o = i.attr("data-speed"),
            r = i.attr("data-hover"),
            d = i.attr("data-items"),
            c = i.attr("data-items-xl"),
            u = i.attr("data-items-lg"),
            f = i.attr("data-items-md"),
            h = i.attr("data-items-sm"),
            m = i.attr("data-items-xs");
          d || (d = 5),
            c || (c = Number(d)),
            u || (u = Number(c)),
            f || (f = Number(u)),
            h || (h = Number(f)),
            m || (m = Number(h)),
            (a = (t = l / d) * n),
            i
              .find(".scw-ticker-wrap")
              .after('<div class="scw-ticker-wrap-clone"></div>');
          var p = i.find(".scw-ticker-wrap,.scw-ticker-wrap-clone");
          s.css({ width: t }),
            setTimeout(function () {
              p.css({ width: a }),
                i.css({ width: 2 * a }),
                s.clone().appendTo(i.find(".scw-ticker-wrap-clone"));
            }, 300),
            o || (o = 3e4),
            (r = "false" != r);
          var g = a / l;
          p.css({ "animation-duration": Number(o) * g + "ms" }),
            1 == r &&
              (i.on("mouseover", function () {
                p.addClass("scw-ticker-paused");
              }),
              i.on("mouseout", function () {
                p.removeClass("scw-ticker-paused");
              }));
        });
      },
      stickySidebar: function () {
        if (!e().scwStickySidebar)
          return (
            console.log("stickySidebar: Sticky Sidebar is not Defined."), !0
          );
        var t = jQuery(".sticky-sidebar-wrap");
        if (t.length < 1) return !0;
        t.each(function () {
          var t = e(this),
            a = t.attr("data-offset-top"),
            i = t.attr("data-offset-bottom");
          a || (a = 110),
            i || (i = 50),
            t.scwStickySidebar({
              additionalMarginTop: Number(a),
              additionalMarginBottom: Number(i),
            });
        });
      },
      cookieNotify: function () {
        if (!e.cookie)
          return console.log("cookieNotify: Cookie Function not defined."), !0;
        if (te.length > 0) {
          var t = te.outerHeight();
          te.css({ bottom: -t }),
            "yesConfirmed" != e.cookie("websiteUsesCookies") &&
              te.css({ bottom: 0 }),
            e(".cookie-accept").click(function () {
              return (
                te.css({ bottom: -t }),
                e.cookie("websiteUsesCookies", "yesConfirmed", { expires: 30 }),
                !1
              );
            });
        }
      },
      extras: function () {
        e().tooltip
          ? e('[data-toggle="tooltip"]').tooltip({ container: "body" })
          : console.log("extras: Bootstrap Tooltip not defined."),
          e().popover
            ? e("[data-toggle=popover]").popover()
            : console.log("extras: Bootstrap Popover not defined."),
          e(".style-msg").on("click", ".close", function (t) {
            e(this).parents(".style-msg").slideUp(), t.preventDefault();
          }),
          e("#primary-menu-trigger,#overlay-menu-close").click(function () {
            return (
              e("#primary-menu").find("ul.mobile-primary-menu").length > 0
                ? e(
                    "#primary-menu > ul.mobile-primary-menu, #primary-menu > div > ul.mobile-primary-menu"
                  ).toggleClass("d-block")
                : e("#primary-menu > ul, #primary-menu > div > ul").toggleClass(
                    "d-block"
                  ),
              a.toggleClass("primary-menu-open"),
              !1
            );
          }),
          e("#page-submenu-trigger").click(function () {
            return (
              a.toggleClass("top-search-open", !1),
              S.toggleClass("pagemenu-active"),
              !1
            );
          }),
          S.find("nav").click(function (e) {
            a.toggleClass("top-search-open", !1),
              R.toggleClass("top-cart-open", !1);
          }),
          SEMICOLON.isMobile.any() && a.addClass("device-touch");
      },
    }),
    (SEMICOLON.isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          SEMICOLON.isMobile.Android() ||
          SEMICOLON.isMobile.BlackBerry() ||
          SEMICOLON.isMobile.iOS() ||
          SEMICOLON.isMobile.Opera() ||
          SEMICOLON.isMobile.Windows()
        );
      },
    }),
    (SEMICOLON.documentOnResize = {
      init: function () {
        setTimeout(function () {
          SEMICOLON.header.topsocial(),
            SEMICOLON.header.fullWidthMenu(),
            SEMICOLON.header.overlayMenu(),
            SEMICOLON.initialize.fullScreen(),
            SEMICOLON.initialize.dataResponsiveHeights(),
            SEMICOLON.initialize.maxHeight(),
            SEMICOLON.initialize.verticalMiddle(),
            SEMICOLON.initialize.testimonialsGrid(),
            SEMICOLON.initialize.stickFooterOnSmall(),
            SEMICOLON.initialize.stickyFooter(),
            SEMICOLON.slider.sliderParallaxDimensions(),
            SEMICOLON.slider.captionPosition(),
            SEMICOLON.portfolio.arrange(),
            SEMICOLON.portfolio.portfolioDescMargin(),
            SEMICOLON.widget.tabsResponsiveResize(),
            SEMICOLON.widget.tabsJustify(),
            SEMICOLON.widget.html5Video(),
            SEMICOLON.widget.masonryThumbs(),
            SEMICOLON.initialize.dataResponsiveClasses(),
            M.length > 0 &&
              (M.hasClass(".customjs") ||
                (e().isotope
                  ? M.isotope("layout")
                  : console.log(
                      "documentOnResize > init: Isotope not defined."
                    ))),
            (a.hasClass("device-xl") || a.hasClass("device-lg")) &&
              e("#primary-menu")
                .find("ul.mobile-primary-menu")
                .removeClass("d-block");
        }, 500);
        l = t.width();
      },
    }),
    (SEMICOLON.documentOnReady = {
      init: function () {
        SEMICOLON.initialize.init(),
          SEMICOLON.header.init(),
          (k.length > 0 || L.length > 0) && SEMICOLON.slider.init(),
          I.length > 0 && SEMICOLON.portfolio.init(),
          SEMICOLON.widget.init(),
          SEMICOLON.documentOnReady.windowscroll();
      },
      windowscroll: function () {
        var a = 0,
          i = 0;
        s.length > 0 && s.offset().top,
          s.length > 0 && (a = n.offset().top),
          S.length > 0 &&
            (i =
              s.length > 0 && !s.hasClass("no-sticky")
                ? s.hasClass("sticky-style-2") || s.hasClass("sticky-style-3")
                  ? S.offset().top - n.outerHeight()
                  : S.offset().top - s.outerHeight()
                : S.offset().top);
        var o = s.attr("data-sticky-offset");
        if (void 0 !== o)
          if ("full" == o) {
            a = t.height();
            var r = s.attr("data-sticky-offset-negative");
            void 0 !== r && (a = a - r - 1);
          } else a = Number(o);
        SEMICOLON.header.stickyMenu(a),
          SEMICOLON.header.stickyPageMenu(i),
          t.on("scroll", function () {
            SEMICOLON.initialize.goToTopScroll(),
              e("body.open-header.close-header-on-scroll").removeClass(
                "side-header-open"
              ),
              SEMICOLON.header.stickyMenu(a),
              SEMICOLON.header.stickyPageMenu(i),
              SEMICOLON.header.logo();
          }),
          window.addEventListener("scroll", onScrollSliderParallax, !1),
          N.length > 0 &&
            (e().scrolled
              ? t.scrolled(function () {
                  SEMICOLON.header.onepageScroller();
                })
              : console.log("windowscroll: Scrolled Function not defined."));
      },
    }),
    (SEMICOLON.documentOnLoad = {
      init: function () {
        SEMICOLON.slider.captionPosition(),
          SEMICOLON.slider.swiperSliderMenu(!0),
          SEMICOLON.slider.revolutionSliderMenu(!0),
          SEMICOLON.initialize.maxHeight(),
          SEMICOLON.initialize.testimonialsGrid(),
          SEMICOLON.initialize.verticalMiddle(),
          SEMICOLON.initialize.stickFooterOnSmall(),
          SEMICOLON.initialize.stickyFooter(),
          SEMICOLON.portfolio.gridInit(M),
          SEMICOLON.portfolio.filterInit(),
          SEMICOLON.portfolio.shuffleInit(),
          SEMICOLON.portfolio.arrange(),
          SEMICOLON.portfolio.portfolioDescMargin(),
          SEMICOLON.widget.parallax(),
          SEMICOLON.widget.loadFlexSlider(),
          SEMICOLON.widget.html5Video(),
          SEMICOLON.widget.masonryThumbs(),
          SEMICOLON.widget.ticker(),
          SEMICOLON.header.topsocial(),
          SEMICOLON.header.responsiveMenuClass(),
          SEMICOLON.initialize.modal();
      },
    });
  var t = e(window),
    a = e("body"),
    i = e("#wrapper"),
    s = e("#header"),
    n = e("#header-wrap"),
    o = e("#content"),
    r = e("#footer"),
    l = t.width(),
    d = s.attr("class"),
    c = n.attr("class"),
    u = s.attr("data-sticky-class"),
    f = s.attr("data-responsive-class"),
    h = e("#logo").find(".standard-logo"),
    m = (h.find("img").outerWidth(), e("#logo").find(".retina-logo")),
    p = h.find("img").attr("src"),
    g = m.find("img").attr("src"),
    v = h.attr("data-dark-logo"),
    C = m.attr("data-dark-logo"),
    O = h.attr("data-sticky-logo"),
    b = m.attr("data-sticky-logo"),
    y = h.attr("data-mobile-logo"),
    w = m.attr("data-mobile-logo"),
    S = e("#page-menu"),
    N = e(".one-page-menu"),
    x = 0,
    I = e(".portfolio"),
    M = (e(".shop"), e(".grid-container")),
    k = e("#slider"),
    E = e(".slider-parallax"),
    L = e(".slider-element"),
    T = "",
    z = e("#page-title"),
    j = e(".portfolio-ajax").find(".portfolio-item"),
    P = e("#portfolio-ajax-wrap"),
    F = e("#portfolio-ajax-container"),
    D = e("#portfolio-ajax-loader"),
    H = e(".portfolio-filter,.custom-filter"),
    A = "",
    _ = e("#top-search"),
    R = e("#top-cart"),
    B = e(".vertical-middle"),
    q = e("#top-social").find("li"),
    Y = e(".si-sticky"),
    W = e(".dots-menu"),
    V = e("#gotoTop"),
    Q = e(".full-screen"),
    U = e(".common-height"),
    G = e(".testimonials-grid"),
    J = e(".page-section"),
    X = e(".owl-carousel"),
    $ = e(".parallax"),
    K = e(".page-title-parallax"),
    Z = e(".portfolio-parallax").find(".portfolio-image"),
    ee = e(".text-rotater"),
    te = e("#cookie-notification");
  e(document).ready(SEMICOLON.documentOnReady.init),
    t.on("load", SEMICOLON.documentOnLoad.init),
    t.on("resize", SEMICOLON.documentOnResize.init);
})(jQuery),
  (function (e, t, a, i, s, n, o) {
    (e.GoogleAnalyticsObject = s),
      (e.ga =
        e.ga ||
        function () {
          (e.ga.q = e.ga.q || []).push(arguments);
        }),
      (e.ga.l = 1 * new Date()),
      (n = t.createElement("script")),
      (o = t.getElementsByTagName("script")[0]),
      (n.async = 1),
      (n.src = "//www.google-analytics.com/analytics.js"),
      o.parentNode.insertBefore(n, o);
  })(window, document, 0, 0, "ga"),
  ga("create", "UA-23255544-12", "auto"),
  ga("send", "pageview"),
  jQuery(document).ready(function () {
    jQuery(".disable-pagetranstion").on("click", function () {
      return (
        jQuery("body").addClass("no-transition"),
        jQuery(".css3-spinner").fadeOut(400, function () {
          jQuery(this).remove();
        }),
        !1
      );
    });
  }),
  jQuery.get("switcher-html.html", function (e) {
    jQuery("#gotoTop").after(e),
      jQuery(".scw-trigger").on("click", function () {
        jQuery(".scw-switcher-wrap").toggleClass("scw-switcher-open");
      }),
      jQuery(document).on("click", function (e) {
        jQuery(e.target).closest(".scw-switcher-wrap").length ||
          jQuery(".scw-switcher-wrap").toggleClass("scw-switcher-open", !1);
      });
  });
jQuery(document).one("ajaxComplete", function () {
  jQuery(".preloader-demo").on("click", function (s) {
    var i = jQuery(this),
      d = jQuery(".preloader-demo"),
      v = i.attr("data-loader");
    d.prop("disabled", !0),
      "1" == v
        ? (css3Loader =
            '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>')
        : "2" == v
        ? (css3Loader = '<div class="css3-spinner-flipper"></div>')
        : "3" == v
        ? (css3Loader =
            '<div class="css3-spinner-double-bounce1"></div><div class="css3-spinner-double-bounce2"></div>')
        : "4" == v
        ? (css3Loader =
            '<div class="css3-spinner-rect1"></div><div class="css3-spinner-rect2"></div><div class="css3-spinner-rect3"></div><div class="css3-spinner-rect4"></div><div class="css3-spinner-rect5"></div>')
        : "5" == v
        ? (css3Loader =
            '<div class="css3-spinner-cube1"></div><div class="css3-spinner-cube2"></div>')
        : "6" == v
        ? (css3Loader = '<div class="css3-spinner-scaler"></div>')
        : "7" == v
        ? (css3Loader =
            '<div class="css3-spinner-grid-pulse"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>')
        : "8" == v
        ? (css3Loader =
            '<div class="css3-spinner-clip-rotate"><div></div></div>')
        : "9" == v
        ? (css3Loader =
            '<div class="css3-spinner-ball-rotate"><div></div><div></div><div></div></div>')
        : "10" == v
        ? (css3Loader =
            '<div class="css3-spinner-zig-zag"><div></div><div></div></div>')
        : "11" == v
        ? (css3Loader =
            '<div class="css3-spinner-triangle-path"><div></div><div></div><div></div></div>')
        : "12" == v
        ? (css3Loader =
            '<div class="css3-spinner-ball-scale-multiple"><div></div><div></div><div></div></div>')
        : "13" == v
        ? (css3Loader =
            '<div class="css3-spinner-ball-pulse-sync"><div></div><div></div><div></div></div>')
        : "14" == v &&
          (css3Loader =
            '<div class="css3-spinner-scale-ripple"><div></div><div></div><div></div></div>'),
      jQuery("body").append('<div class="css3-spinner"></div>'),
      jQuery(".css3-spinner").html(css3Loader),
      setTimeout(function () {
        jQuery(".css3-spinner").fadeOut("400", function () {
          jQuery(this).remove(), d.prop("disabled", !1);
        });
      }, 2e3),
      s.preventDefault();
  });
});
