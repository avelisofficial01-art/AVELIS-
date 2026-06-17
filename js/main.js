/* ================ 
    Nav
  =================== */
$(function () {
  // hide show nav
  if ($.fn.hidescroll) {
    $(".navbar").hidescroll();
  }

  // mobile dropdown menu
  const toggleBtn = $("#toggle_btn");
  const dropdownMenu = $(".dropdown-menu");

  if (toggleBtn.length && dropdownMenu.length) {
    toggleBtn.click(() => {
      dropdownMenu.toggleClass("open");
    });
  }
});

/* ================ 
    Products (Tabs)
  =================== */
$(function () {
  const $tabs = $("#products-tabs");
  if ($tabs.length && $.fn.responsiveTabs) {
    // thêm activeTab vào li đầu tiên
    $tabs.find("li:first").addClass("activeTab");

    // đổi màu activeTab
    $tabs.find("li").on("click", function () {
      $tabs.find("li").removeClass("activeTab");
      $tabs.find("ul .r-tabs-state-active").addClass("activeTab");
    });

    $tabs.responsiveTabs({
      animation: "slide",
    });
  }
});

/* ================ 
   Best Sellers
  =================== */
$(function () {
  if ($.fn.slick && $(".slider").length) {
    $(".slider").slick({
      autoplay: true,
      dots: true,
    });
  }
});

/* ================ 
   Stats
  =================== */
$(function () {
  if (window.counterUp && window.counterUp.default && document.querySelectorAll(".counter").length) {
    const counterUp = window.counterUp.default;

    const callback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          counterUp(el, {
            duration: 2000,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    document.querySelectorAll(".counter").forEach((node) => IO.observe(node));
  }
});

/* ================ 
   AOS Animation
  =================== */
$(function () {
  if (window.AOS) {
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 700,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      anchorPlacement: "center-bottom",
    });
  }
});
