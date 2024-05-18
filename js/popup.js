(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".max-w-wrapperwhoweare");

  // check if an element is in viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        if (
          items[i].querySelector(".label-text-empower").textContent.trim() ===
          "Whom We Support"
        ) {
          showPopup(
            "https://res.cloudinary.com/difpe3hca/image/upload/v1715170793/IEEE_mr3vtb.jpg"
          );
          break; // once we find the section, no need to check further
        }
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
